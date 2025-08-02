import React, { useRef } from "react";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";

const UploadBoxOnly = () => {
  const fileInputRef = useRef();

  const expectedHeaders = [
    "Serial Number",
    "ID",
    "Name",
    "Related Person",
    "Relation",
    "House Number",
    "Age",
    "Gender",
    "Photo Status",
  ];

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Swal.fire({
      title: "Parsing Excel...",
      text: "Please wait while we read your file.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const rawRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const fileHeaders = rawRows[0];

      const isValid = expectedHeaders.every(
        (header, index) => fileHeaders[index]?.trim() === header
      );

      if (!isValid) {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Invalid Excel Format",
          html: `
            <p>Your Excel file must have the following 9 columns <b>in exact order</b>:</p>
            <pre style="text-align:left; padding: 10px; background:#f1f1f1; border-radius:6px;">${expectedHeaders.join(
              " | "
            )}</pre>
          `,
        });
        return;
      }

      const rawJsonData = XLSX.utils.sheet_to_json(worksheet);

      const seenSerials = new Set();
      const seenIds = new Set();
      const seenPairs = new Set();
      const duplicateSerials = new Set();
      const duplicateIds = new Set();
      const duplicatePairs = new Set();

      rawJsonData.forEach((row) => {
        const sn = (row["Serial Number"] || "").toString().trim();
        const id = (row["ID"] || "").toString().trim();
        const pairKey = `${sn}||${id}`;

        if (sn) {
          if (seenSerials.has(sn)) duplicateSerials.add(sn);
          else seenSerials.add(sn);
        }

        if (id) {
          if (seenIds.has(id)) duplicateIds.add(id);
          else seenIds.add(id);
        }

        if (sn && id) {
          if (seenPairs.has(pairKey)) duplicatePairs.add(pairKey);
          else seenPairs.add(pairKey);
        }
      });

      if (
        duplicateSerials.size > 0 ||
        duplicateIds.size > 0 ||
        duplicatePairs.size > 0
      ) {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Duplicate Entries Found in Excel",
          html: `
            ${
              duplicateSerials.size > 0
                ? `<p><b>Duplicate Serial Numbers:</b> ${[...duplicateSerials].join(", ")}</p>`
                : ""
            }
            ${
              duplicateIds.size > 0
                ? `<p><b>Duplicate Voter IDs:</b> ${[...duplicateIds].join(", ")}</p>`
                : ""
            }
            ${
              duplicatePairs.size > 0
                ? `<p><b>Duplicate Serial Number + ID Pairs:</b><br>${[...duplicatePairs].join("<br>")}</p>`
                : ""
            }
            <p>Please fix these in your Excel file before uploading.</p>
          `,
        });
        return;
      }

      const transformedData = rawJsonData
        .map((row) => ({
          serialNumber: Number(row["Serial Number"] || 0),
          voterId: row.ID || "",
          name: row.Name || "",
          relatedPerson: row["Related Person"] || "",
          relation: row.Relation || "",
          houseNumber: (row["House Number"] || "").toString(),
          age: Number(row.Age || 0),
          gender: row.Gender || "",
          photoStatus: row["Photo Status"] || "",
        }))
        .filter((item) => item.voterId);

      // Helper function for upload with flag
      const uploadToServer = async (data, allowPartial = false) => {
        const response = await fetch(
          "http://localhost:5000/api/voters/upload-voters",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ voters: data, allowPartial }),
          }
        );
        const result = await response.json();
        return { response, result };
      };

      let { response, result } = await uploadToServer(transformedData, false);
      Swal.close();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Upload Successful",
          text: `${result.uploadedCount} new voters saved.`,
        });
      } else if (response.status === 409 && result.canContinue) {
        const proceed = await Swal.fire({
          icon: "warning",
          title: "Duplicate Entries Detected",
          html: `
            <p>The following <b>Serial Numbers</b> already exist in DB:</p>
            <pre style="text-align:left; padding:10px; background:#f1f1f1; border-radius:6px;">${result.duplicateSerials.join(
              ", "
            )}</pre>
            <p><b>${result.newEntryCount}</b> new entries found.<br>Continue and upload them?</p>
          `,
          showCancelButton: true,
          confirmButtonText: "Yes, Upload New Entries",
          cancelButtonText: "Cancel",
        });

        if (proceed.isConfirmed) {
          const retry = await uploadToServer(transformedData, true);
          if (retry.response.ok) {
            Swal.fire({
              icon: "success",
              title: "Partial Upload Completed",
              text: `${retry.result.uploadedCount} new entries uploaded.`,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Partial Upload Failed",
              text:
                retry.result.message || "Server error during partial upload.",
            });
          }
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: result.message || "Unexpected error occurred.",
        });
      }
    } catch (error) {
      console.error("❌ Upload error:", error);
      Swal.fire("Error", "Failed to upload voters.", "error");
    }

    event.target.value = ""; // Reset file input
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #007bff",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Upload Voters List
      </button>
      <input
        type="file"
        accept=".xls,.xlsx"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadBoxOnly;

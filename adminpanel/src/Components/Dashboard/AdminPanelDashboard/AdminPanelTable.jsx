import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import DropdownCommon from '../../Common/Dropdown';

// ✅ Year-wise election data for each state
const AdminPanelTablaData = {
  "Tamil Nadu": {
    "2021": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "dmk.png", party: "DMK", winningPercentage: 55.2, totalVotes: 9876543, alliances: 3 },
        { logo: "aiadmk.png", party: "AIADMK", winningPercentage: 38.4, totalVotes: 8765432, alliances: 2 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 4.5, totalVotes: 345678, alliances: 1 },
        { logo: "congress.png", party: "Congress", winningPercentage: 1.9, totalVotes: 123456, alliances: 2 }
      ]
    },
    "2016": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "aiadmk.png", party: "AIADMK", winningPercentage: 54.4, totalVotes: 9123456, alliances: 2 },
        { logo: "dmk.png", party: "DMK", winningPercentage: 40.8, totalVotes: 8345678, alliances: 3 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 2.6, totalVotes: 210987, alliances: 1 },
        { logo: "others.png", party: "Others", winningPercentage: 2.2, totalVotes: 178901, alliances: 0 }
      ]
    },
    "2011": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "aiadmk.png", party: "AIADMK", winningPercentage: 52.4, totalVotes: 8321456, alliances: 2 },
        { logo: "dmk.png", party: "DMK", winningPercentage: 39.8, totalVotes: 7543678, alliances: 3 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 3.2, totalVotes: 243987, alliances: 1 },
        { logo: "others.png", party: "Others", winningPercentage: 4.6, totalVotes: 389012, alliances: 0 }
      ]
    }
  },
  "Kerala": {
    "2021": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "ldf.png", party: "LDF", winningPercentage: 57.1, totalVotes: 6543210, alliances: 3 },
        { logo: "udf.png", party: "UDF", winningPercentage: 40.5, totalVotes: 5432109, alliances: 2 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 2.2, totalVotes: 234567, alliances: 1 },
        { logo: "others.png", party: "Others", winningPercentage: 0.2, totalVotes: 12345, alliances: 0 }
      ]
    },
    "2016": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "udf.png", party: "UDF", winningPercentage: 47.2, totalVotes: 5789012, alliances: 2 },
        { logo: "ldf.png", party: "LDF", winningPercentage: 45.9, totalVotes: 5432109, alliances: 3 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 5.4, totalVotes: 345678, alliances: 1 },
        { logo: "others.png", party: "Others", winningPercentage: 1.5, totalVotes: 45678, alliances: 0 }
      ]
    },
    "2011": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "ldf.png", party: "LDF", winningPercentage: 48.3, totalVotes: 5234567, alliances: 3 },
        { logo: "udf.png", party: "UDF", winningPercentage: 46.7, totalVotes: 5032109, alliances: 2 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 4.3, totalVotes: 245678, alliances: 1 },
        { logo: "others.png", party: "Others", winningPercentage: 0.7, totalVotes: 25678, alliances: 0 }
      ]
    }
  },
  "Telangana": {
    "2018": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "trsv.png", party: "TRS", winningPercentage: 48.4, totalVotes: 4321567, alliances: 2 },
        { logo: "inc.png", party: "INC", winningPercentage: 40.2, totalVotes: 3876543, alliances: 2 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 9.5, totalVotes: 765432, alliances: 1 },
        { logo: "others.png", party: "Others", winningPercentage: 1.9, totalVotes: 123456, alliances: 0 }
      ]
    },
    "2014": {
      header: ["Logo", "Party Name", "Winning %", "Total Votes", "Total Alliances"],
      body: [
        { logo: "trsv.png", party: "TRS", winningPercentage: 50.3, totalVotes: 4123456, alliances: 2 },
        { logo: "inc.png", party: "INC", winningPercentage: 36.2, totalVotes: 3123456, alliances: 2 },
        { logo: "bjp.png", party: "BJP", winningPercentage: 11.0, totalVotes: 912345, alliances: 1 },
        { logo: "others.png", party: "Others", winningPercentage: 2.5, totalVotes: 123456, alliances: 0 }
      ]
    }
  }
};

const AdminPanelTable = ({ selectedState }) => {
  const years = Object.keys(AdminPanelTablaData[selectedState] || {}).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0] || null);

  // ✅ Reset year when state changes
  useEffect(() => {
    setSelectedYear(years[0] || null);
  }, [selectedState]);

  const tableData = AdminPanelTablaData[selectedState]?.[selectedYear] || { header: [], body: [] };

  return (
    <Card>
      <CardHeader className='card-no-border'>
        <div className='header-top'>
          <H5 className='m-0'>Last 5 Elections - {selectedState} ({selectedYear})</H5>
          <div className='card-header-right-icon'>
            <DropdownCommon
              dropdownMain={{ className: 'icon-dropdown', direction: 'start' }}
              options={years} // pass only strings
              iconName='icon-more-alt'
              btn={{ tag: 'span' }}
              onClick={(e, year) => setSelectedYear(year)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className='pt-0 campaign-table'>
        <div className='recent-table table-responsive currency-table'>
          <Table>
            <thead>
              <tr>
                {tableData.header.map((item, i) => (
                  <th key={i} className='f-light'>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.body.map((row, i) => (
                <tr key={i}>
                  <td>
                    <img src={`/images/${row.logo}`} alt={row.party} width="32" />
                  </td>
                  <td>{row.party}</td>
                  <td>{row.winningPercentage}%</td>
                  <td>{row.totalVotes.toLocaleString()}</td>
                  <td>{row.alliances}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default AdminPanelTable;

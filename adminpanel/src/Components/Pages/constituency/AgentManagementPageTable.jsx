import React, { Fragment, useCallback, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Btn, H4 } from '../../../AbstractElements';
import { AgentBoothData, boothColumns } from '../../../Data/Table/agentBoothData';
import { Media } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import defaultImg from '../../../assets/images/user/1.jpg';

const AgentManagementPageTable = ({ externalData = [] }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelet, setToggleDelet] = useState(false);
  const [data, setData] = useState(AgentBoothData);

  useEffect(() => {
    if (externalData.length > 0) {
      const mappedData = externalData.map(item => ({
        ...item,
        name: (
          <Media className='d-flex'>
            <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: defaultImg, alt: 'default' }} />
            <Media body className="align-self-center">
              <div>{item.name}</div>
            </Media>
          </Media>
        )
      }));
      setData(prev => [...prev, ...mappedData]);
    }
  }, [externalData]);

  const handleRowSelected = useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
      setToggleDelet(!toggleDelet);
      setData(data.filter(item => !selectedRows.some(row => row.id === item.id)));
      setSelectedRows([]);
    }
  };

  return (
    <Fragment>
      {selectedRows.length > 0 && (
        <div className="d-flex align-items-center justify-content-between bg-light-info p-2">
          <H4 attrH4={{ className: 'text-muted m-0' }}>Delete Selected Data!</H4>
          <Btn attrBtn={{ color: 'danger', onClick: handleDelete }}>Delete</Btn>
        </div>
      )}
      <DataTable
        // data={data}
        // columns={boothColumns}
        columns={boothColumns}
  data={AgentBoothData}
        striped
        center
        pagination
        selectableRows
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleDelet}
      />
    </Fragment>
  );
};

export default AgentManagementPageTable;

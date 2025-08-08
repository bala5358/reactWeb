
import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Input, Table, Form } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { ElectionTableData } from './constituencyData';
import { TrendingDown, TrendingUp } from 'react-feather';

const ConstituencyCampaigns = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = ElectionTableData.body.filter(item =>
    item.candidate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.party.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader className='card-no-border'>
        <div className='d-flex justify-content-between align-items-center'>
          <H5 className='m-0'>Election Results</H5>
          <Form className='mb-0'>
            <Input
              type='text'
              name='search'
              placeholder='Search by Party or Candidate...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='form-control'
            />
          </Form>
        </div>
      </CardHeader>

      <CardBody className='pt-0 campaign-table'>
        <div className='recent-table table-responsive currency-table'>
          <Table>
            <thead>
              <tr>
                {ElectionTableData.header.map((item, i) => (
                  <th key={i} className='f-light'>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={i}>
                  <td className={`border-icon ${item.party.toLowerCase()}`}>
                    {/* <div className='social-circle'>
                      <i className={`fa fa-${item.icon}`} />
                    </div> */}
                    <span className='ms-2'>{item.party}</span>
                  </td>
                  <td>{item.candidate}</td>
                  <td>{item.electoralVotes}</td>
                  <td>
                    <div className='change-currency'>
                      {item.electoralPercent > 50 ? (
                        <TrendingUp className='font-success me-1' />
                      ) : (
                        <TrendingDown className='font-danger me-1' />
                      )}
                      {item.electoralPercent}%
                    </div>
                  </td>
                  <td>{item.popularVotes.toLocaleString()}</td>
                  <td>{item.popularPercent}%</td>
                  <td>
                    <span className={`badge rounded-pill badge-light-${item.status === 'Leading' ? 'success' : item.status === 'Trailing' ? 'danger' : 'secondary'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ConstituencyCampaigns;
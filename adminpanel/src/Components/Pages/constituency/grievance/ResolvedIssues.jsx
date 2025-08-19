import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { 
  Container, Row, Col, Card, CardHeader, CardBody, 
  Table, Input, Button, Badge, Pagination, PaginationItem, PaginationLink 
} from 'reactstrap';

const ResolvedIssues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [filterStatus, setFilterStatus] = useState('all');
  
  const resolvedIssues = Array.from({ length: 25 }, (_, i) => ({
    id: `COMP-2023-${100 + i}`,
    date: `2023-05-${10 + (i % 20)}`,
    type: ['Voter Registration', 'Polling Booth', 'Campaign Violation', 'Other'][i % 4],
    resolution: ['Resolved', 'Rejected'][i % 2],
    rating: i % 5 + 1
  }));

  const pageSize = 5;
  const filteredIssues = resolvedIssues.filter(issue => {
    const matchesSearch = 
      issue.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filterStatus === 'all' || issue.resolution === filterStatus;
    return matchesSearch && matchesFilter;
  });
  const pageCount = Math.ceil(filteredIssues.length / pageSize);

  const currentIssues = filteredIssues.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
              <Fragment>
                      <Breadcrumbs parent="Pages" title="Resolved Issues" mainTitle="Resolved Issues" />
    <Container fluid>
      <Row>
        <Col>
          <Card>
          <CardHeader className="d-flex flex-column flex-md-row justify-content-between align-items-center">
  {/* Left side heading */}
  <h4 className="mb-3 mb-md-0">Resolved Issues</h4>

  {/* Right side controls */}
  <div className="d-flex flex-column flex-md-row align-items-md-center" style={{gap:"10px"}}>
    <Input
      type="select"
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
      className="mb-2 mb-md-0 mr-md-2"
      style={{ maxWidth: "150px" }}
    >
      <option value="all">All Statuses</option>
      <option value="Resolved">Resolved</option>
      <option value="Rejected">Rejected</option>
    </Input>

    <Input
      type="search"
      placeholder="Search issues..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-2 mb-md-0 mr-md-2"
      style={{ maxWidth: "180px" }}
    />
  </div>
</CardHeader>

            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Complaint ID</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Resolution</th>
                    {/* <th>Rating</th> */}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentIssues.map(issue => (
                    <tr key={issue.id}>
                      <td>{issue.id}</td>
                      <td>{issue.date}</td>
                      <td>{issue.type}</td>
                      <td>
                        <Badge color={issue.resolution === 'Resolved' ? 'success' : 'danger'}>
                          {issue.resolution}
                        </Badge>
                      </td>
                      {/* <td>
                        <div className="text-warning">
                          {[...Array(5)].map((_, i) => (
                            <i 
                              key={i} 
                              className={`fas fa-star${i < issue.rating ? '' : '-half-alt'}`}
                            ></i>
                          ))}
                        </div>
                      </td> */}
                      <td>
                        <Button color="info" size="sm">Details</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              
              {pageCount > 1 && (
                <Pagination className="mt-3">
                  <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink previous onClick={() => setCurrentPage(p => p - 1)} />
                  </PaginationItem>
                  {[...Array(pageCount)].map((_, i) => (
                    <PaginationItem active={i === currentPage} key={i}>
                      <PaginationLink onClick={() => setCurrentPage(i)}>
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem disabled={currentPage >= pageCount - 1}>
                    <PaginationLink next onClick={() => setCurrentPage(p => p + 1)} />
                  </PaginationItem>
                </Pagination>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default ResolvedIssues;
import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import { Btn, H6, Image } from '../../../AbstractElements';
import admin1 from '../../../assets/images/user/1.jpg'; // Sample image
import { Edit2, Trash2 } from 'react-feather';

const AllAdminListTable = () => {
  const adminData = [
    {
      id: 1,
      image: admin1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '9876543210',
    },
    {
      id: 2,
      image: admin1,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '9123456780',
    },
  ];

  const handleEdit = (id) => {
    console.log(`Edit admin ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete admin ID: ${id}`);
  };

  return (
    <Card>
      <CardBody>
        <H6 className="mb-3">Admin User List</H6>
        <div className="table-responsive">
          <Table className="table-hover">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((admin) => (
                <tr key={admin.id}>
                  <td>
                    <Image
                      attrImage={{
                        src: admin.image,
                        className: 'img-40 rounded-circle',
                        alt: 'admin',
                      }}
                    />
                  </td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.phone}</td>
                  <td className="text-end">
                    <Btn
                      attrBtn={{
                        color: 'primary',
                        size: 'sm',
                        className: 'me-2',
                        onClick: () => handleEdit(admin.id),
                      }}
                    >
                      <Edit2 size={14} />
                    </Btn>
                    <Btn
                      attrBtn={{
                        color: 'danger',
                        size: 'sm',
                        onClick: () => handleDelete(admin.id),
                      }}
                    >
                      <Trash2 size={14} />
                    </Btn>
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

export default AllAdminListTable;

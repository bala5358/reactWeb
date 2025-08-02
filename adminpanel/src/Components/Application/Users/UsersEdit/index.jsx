import React,{ Fragment,useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import MyProfileEdit from './MyProfile';
import MaterialTabWithColorClass from '../../../Bonus-Ui/Cards/TabCard/MaterialTabWithColor';
import { RibbonData } from '../../../Common/Data/Bonus-ui';
const UsersEditContain = () => {
  const [searchTerm, setSearchTerm] = useState('');
    const { state: item } = useLocation();
    const navigate = useNavigate();
  const filteredData = RibbonData.filter((item) =>
    [item.name, item.relationName, item.voterId, item.door]
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

    React.useEffect(() => {
    if (!item && window.location.pathname.includes('/edit/')) {
      const voterId = window.location.pathname.split('/').pop();
      const foundItem = RibbonData.find(member => member.voterId === voterId);
      if (foundItem) {
        navigate(`/app/users/edit/${voterId}`, { state: foundItem, replace: true });
      }
    }
  }, [item, navigate]);

  if (!item) return <div>No user data provided</div>;

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Edit Profile' parent='Users' title='Edit Profile' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='4'>
              <MyProfileEdit data={filteredData}/>
            </Col>
            <Col xl='8'>
              <MaterialTabWithColorClass selectedItem={item}/>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersEditContain;

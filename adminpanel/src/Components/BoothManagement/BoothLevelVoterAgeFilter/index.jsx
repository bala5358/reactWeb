import { Fragment,useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../src/AbstractElements';
import VoterAgeFilter from './VoterAgeFilter';

const BoothLevelVoterAgeFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
    
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Voter Data Entry Form' parent='Users' title='Voter Data' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='12'>
              <VoterAgeFilter />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default BoothLevelVoterAgeFilter;

import React, { Fragment, useState, useContext } from "react";
import { Row, Container} from "reactstrap";
import PartyPerformanceChart from "./PartyPerformanceChart";
import { Breadcrumbs } from "../../../AbstractElements";
import PieChartClass from "../../Charts/ApexCharts/PieChart";
// import PieChart2Class from "../../Charts/GoogleCharts/PieChart2";
// import PieChart3Class from "../../Charts/GoogleCharts/PieChart3";
// import PieChart4Class from "../../Charts/GoogleCharts/PieChart4";
// import PieChart5Class from "../../Charts/GoogleCharts/PieChart5";
import GoogleContext from '../../../_helper/GoogleChart';
import { AreaChart, BarChart2, BasicBarChart, ComboChart, GanttChart, LineChart, MaterialDesign, PieChart, SliceVisibilityThreshold, StackingAreaChart, WordTree } from '../../../Constant';
import VotesPage from "./VotesPage";
// import PieChart6Class from '../../Charts/GoogleCharts/PieChart6';
// import ComboChartClass from '../../Charts/GoogleCharts/ComboChart';


const PartyPerformancePage = () => {

    const chartData = useContext(GoogleContext);



  return (




    <Fragment>
          <Breadcrumbs mainTitle='Party Performance' parent="Charts" title="Party Performance" />
          <Container fluid={true}>
            <Row>
              <VotesPage/>
        
              {/* <PieChartClass data={chartData.googleChart.GoogleSliceCharts} title={SliceVisibilityThreshold} /> */}
  
      {/* Header Row with Title and Dropdown */}
     

      {/* Chart Component */}
      <PartyPerformanceChart/>
      

             
            </Row>
          </Container>
        </Fragment>

   
  );
};

export default PartyPerformancePage;

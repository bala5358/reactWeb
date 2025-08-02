import React, { useContext } from "react";
import { Grid } from "react-feather";
import { Link } from "react-router-dom";
import CustomizerContext from "../../_helper/Customizer";
import { Image } from "../../AbstractElements";
import CubaIcon from "../../assets/images/login/logo.jpg";

const SidebarLogo = () => {
  const { mixLayout, toggleSidebar, toggleIcon, layout, layoutURL } = useContext(CustomizerContext);

  const openCloseSidebar = () => {
    toggleSidebar(!toggleIcon);
  };

  const layout1 = localStorage.getItem("sidebar_layout") || layout;

  return (
    <div className='logo-wrapper'>
      {layout1 !== "compact-wrapper dark-sidebar" && layout1 !== "compact-wrapper color-sidebar" && mixLayout ? (
        <Link to={`/dashboard/${layoutURL}`}>
          <Image attrImage={{ className: "img-fluid d-inline", src: `${CubaIcon}`, alt: "", style: { width: "131px" },  }} />
        </Link>
      ) : (
        <Link to={`/dashboard/${layoutURL}`}>
          <Image attrImage={{ className: "img-fluid d-inline", src: `${require("../../assets/images/logo/logo_dark.png")}`, alt: "" }} />
        </Link>
      )}
      <div className='back-btn' onClick={() => openCloseSidebar()}>
        <i className='fa fa-angle-left'></i>
      </div>
      <div className='toggle-sidebar' onClick={openCloseSidebar}>
        <Grid className='status_toggle middle sidebar-toggle' />
      </div>
    </div>
  );
};

export default SidebarLogo;

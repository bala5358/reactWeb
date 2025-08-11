import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { H5 ,Image} from "../../../AbstractElements";
import dmkLogo from "../../../assets/images/parties/dmk.png";
import ldfLogo from "../../../assets/images/parties/ldf.png";
import congressLogo from "../../../assets/images/parties/congress.png";
import SvgIcon from "../../Common/Component/SvgIcon";

const MobileAppCard = ({ selectedState }) => {
  // 🔸 Party data with logos
  const partyData = {
    Kerala: {
      party: "LDF (Left Democratic Front)",
      seats: 99,
      logo: ldfLogo,
    },
    "Tamil Nadu": {
      party: "DMK-led Alliance",
      seats: 159,
      logo: dmkLogo,
    },
    Telangana: {
      party: "Congress",
      seats: 64,
      logo: congressLogo,
    },
  };

  const data = partyData[selectedState] || {
    party: "N/A",
    seats: 0,
    logo: "",
  };

  return (
    <Card className="mobile-app-card text-center">
      <CardHeader className="border-0 bg-transparent text-center">
        
        <div className='social-img-wrap'>
          <div className='social-img'>
            <Image attrImage={{ src: data.logo, alt: 'profile' }} />
          </div>
          <div className='edit-icon'>
            <SvgIcon iconId='profile-check' />
          </div>
        </div>
      </CardHeader>

      <CardBody className="pt-0">
        <H5 attrH5={{ className: "mb-2" }}>Current Ruling Party</H5>
        <h6 className="mb-2 fw-semibold">{data.party}</h6>
        <p className="mb-0 f-light">Total Seats: {data.seats}</p>
      </CardBody>
    </Card>
  );
};

export default MobileAppCard;

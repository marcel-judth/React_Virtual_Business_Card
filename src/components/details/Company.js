import { useState } from "react";
import CompanyBody from "./Company/CompanyBody";
import CompanyHeader from "./Company/CompanyHeader";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CompanyHeaderMobile from "./Company/CompanyHeaderMobile";
import CompanyBodyMobile from "./Company/CompanyBodyMobile";

function Company({ company }) {
  const [toggle, setToggle] = useState(false);
  const showMobileVersion = useMediaQuery("(max-width:1000px)");

  return (
    <>
      {showMobileVersion ? (
        <>
          <CompanyHeaderMobile
            company={company}
            toggle={toggle}
            setToggle={setToggle}
          />
          <CompanyBodyMobile company={company} toggle={toggle} />
        </>
      ) : (
        <>
          <CompanyHeader
            company={company}
            toggle={toggle}
            setToggle={setToggle}
          />
          <CompanyBody toggle={toggle} company={company} />
        </>
      )}
    </>
  );
}

export default Company;

import { useState } from "react";
import CompanyBody from "./CompanyBody";
import CompanyHeader from "./CompanyHeader";

function Company({ company }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <CompanyHeader company={company} toggle={toggle} setToggle={setToggle} />
      <CompanyBody toggle={toggle} company={company} />
    </>
  );
}

export default Company;

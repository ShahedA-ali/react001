import React, { useEffect, useState } from "react";
import roles from "./Roles";

function Protect(props) {
  const [permit, setPermit] = useState(false);

  useEffect(() => {
    const allRoles = roles(props.user.roles)
    console.log(allRoles)
    for (const key in allRoles[0]) {
        console.log(key)
        const okay = allRoles[0][key].some(role => role === window.location.pathname.substring(1))
        if (okay === true) {
            setPermit(true)
            break;
        }
    }
    // const okay = allRoles[0].forEach(item => {console.log(item)})
        // item.some(role => role === window.location.pathname)).some(item => item === true)
    // .some(
    //   (role) => role === window.location.pathname
    // );
  }, [props.user]);

  return (
    <>
      {!permit && <div>
            YOu do not have permistion
        
        </div>}
      {permit && props.children}
    </>
  );
}

export default Protect;

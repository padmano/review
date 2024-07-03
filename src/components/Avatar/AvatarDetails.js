import React from "react";

function AvatarDetails({ name, empId, role, designation }) {
  return (
    <div className="col-6">
      <h4 className="dark-color">{name}</h4>
      <h6>{empId}</h6>
      <p>
        {role}, {designation}
      </p>
    </div>
  );
}

export default AvatarDetails;

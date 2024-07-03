import React from "react";
import AvatarImage from "./AvatarImage";
import AvatarDetails from "./AvatarDetails";

function AvatarContent({ image, name, empId, role, designation }) {
  return (
    <div className="row">
      <AvatarImage image={image} />
      <AvatarDetails
        name={name}
        empId={empId}
        role={role}
        designation={designation}
      />
    </div>
  );
}

export default AvatarContent;

import React from "react";

function AvatarImage({ image, width= 100 }) {
  return (
    <div className="col-2">
      <img
        src={require(`../../assets/img/${image}`)}
        class="rounded-circle"
        style={{width}}
        alt="test"
      />
    </div>
  );
}

export default AvatarImage;

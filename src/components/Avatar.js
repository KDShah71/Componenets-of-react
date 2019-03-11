import React from "react";

const Avatar = (props) => {
  return (
    <div className="UserInfo">
      <img src={props.user.avatarUrl} alt={props.user.name} />
      <div className="User-Info-name">{props.user.name}</div>
    </div>
  );
};

export default Avatar;

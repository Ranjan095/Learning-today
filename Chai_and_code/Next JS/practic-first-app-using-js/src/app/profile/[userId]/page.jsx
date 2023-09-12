/** @format */

import React from "react";

const UserProfile = ({ params }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">user Profile page</h1>
      <h1 className="text-2xl">user id : {params.userId}</h1>
    </div>
  );
};

export default UserProfile;

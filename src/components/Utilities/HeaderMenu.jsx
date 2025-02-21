import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div className="p-8">
      <h3 className="text-center text-2xl text-light">{title}</h3>
    </div>
  );
};

export default HeaderMenu;

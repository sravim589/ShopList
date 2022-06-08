import React from "react";

const navbar = ({ filterItem, shopList }) => {
  return (
    <>
    <h1  ><center>SHOP LIST</center></h1>
      <nav className="navbar">
        <div className="btn-group">
          
          {shopList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;

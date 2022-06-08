import React from "react";

const Shop = ({ shopData }) => {
  //   console.log(shopData);

  return (
    <>
      <section className="main-card--cointainer">
        {shopData.map((curElem) => {
          const { id, name, category, image,Area, Status, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <span className="card-author subtle"> {Area}</span>
                    <span className="card-author subtl"> {Status}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Shop;

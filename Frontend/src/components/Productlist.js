import React from "react";
import { NavLink } from "react-router-dom";

const productlist = () => {
  const modelDetails = [
    {
      title: "Shoe Model",
      image: "images/shoe1.png",
      filename: "shoe1",
    },
    {
      title: "Shoe Model",
      image: "images/shoe2.png",
      filename: "shoe2",
    },
    {
      title: "Shoe Model",
      image: "images/shoe3.png",
      filename: "shoe3",
    },
    {
      title: "Shoe Model",
      image: "images/shoe4.png",
      filename: "shoe4",
    },
    {
      title: "Shoe Model",
      image: "images/shoe5.png",
      filename: "shoe5",
    },
    {
      title: "Chair Model",
      image: "images/chair.png",
      filename: "shoe5",
    },
  ];

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5">
          <strong>Bestsellers</strong>
        </h4>
        <div className="row">
          {modelDetails.map((model) => (
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img src={model.image} className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">{model.title}</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">$61.99</h6>
                  <NavLink className="btn btn-danger" to={"/customize/"+model.filename} >Customize</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default productlist;

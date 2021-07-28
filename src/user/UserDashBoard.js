import React, { useEffect, useState } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "../core/Base";
import Card from "../core/Card";
import { getProducts } from "../admin/helper/adminapicall";

 const UserDashboard = () => {
  const [products, setproducts] = useState([]);
  const [error, seterror] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setproducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row">
        <h1 className="text-white ">All of T-shirts</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-md-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
export default UserDashboard;
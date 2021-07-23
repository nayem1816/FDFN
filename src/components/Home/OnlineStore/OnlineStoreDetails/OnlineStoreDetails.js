import React, { useEffect, useState } from "react";
import Footer from "./../../../Shared/Footer/Footer";
import storesData from "../../../../AllData/OnlineStore/OnlineStore.json";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./OnlineStoreDetails.css";
import Header from "../../../Shared/Header/Header";

const OnlineStoreDetails = () => {
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    setStoreData(storesData);
  }, []);
  const { id } = useParams();
  const singleStore = storeData.find(
    (store) => parseInt(store.id) === parseInt(id)
  );
  console.log(singleStore);
  return (
    <div className="">
      <Header />
      <div className="store-details-header">
        <div className="store-details-header-bg d-flex justify-content-center align-items-center">
          <div className="text-center w-50 mt-5">
            <h2 className="display-1 color-red font-dancing">Buy Product</h2>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center font-ubuntu">Product Details</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-4 text-end">
            <img
              className="img-fluid rounded store-details-img"
              src={singleStore?.productImage}
              alt=""
            />
          </div>
          <div className="col-8">
            <h2 className=" font-open-sans">{singleStore?.productName}</h2>
            <h4 className="mt-3 font-open-sans">
              Price: {singleStore?.price} TAKA
            </h4>
            <h6 className="mt-3 font-open-sans">
              Description: {singleStore?.description}
            </h6>
            <Link
              to={`/buyProducts/${singleStore?.id}`}
              className="btn store-details-btn-style"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnlineStoreDetails;

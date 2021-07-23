import React, { useEffect, useState } from "react";
import "./BuyProduct.css";
import { useParams } from "react-router-dom";
import productData from "../../AllData/OnlineStore/OnlineStore.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PaymentProcess from "./PaymentProcess/PaymentProcess";
import Footer from "./../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const BuyProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productData);
  }, []);

  const singleProduct = products.find((pd) => parseInt(pd.id) === parseInt(id));

  const [pdCount, setPdCount] = useState(1);
  const increasePd = () => {
    setPdCount(pdCount + 1);
  };
  const decreasePd = () => {
    setPdCount(pdCount - 1);
  };

  const pdPrice = singleProduct?.price;

  const newPrice = pdCount * pdPrice;
  return (
    <div>
      <Header />
      <div className="buy-product-header">
        <div className="buy-product-header-bg d-flex justify-content-center align-items-center">
          <div className="text-center w-50 mt-5">
            <h2 className="display-1 color-red font-dancing mt-5">
              Buy Product
            </h2>
          </div>
        </div>
        <div className="container buy-product my-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-5">
                  <img
                    className="img-fluid"
                    src={singleProduct?.productImage}
                    alt=""
                  />
                </div>
                <div className="col-7">
                  <h2>{singleProduct?.productName}</h2>
                  <p>Description: {singleProduct?.description}</p>
                  <div className="product-increment">
                    {pdCount === 1 ? (
                      <button onClick={decreasePd} className="minus" disabled>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    ) : (
                      <button onClick={decreasePd} className="minus">
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    )}
                    <button className="product-number font-open-sans">
                      {pdCount}
                    </button>
                    {pdCount === 10 ? (
                      <button onClick={increasePd} className="plus" disabled>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    ) : (
                      <button onClick={increasePd} className="plus">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    )}
                  </div>
                  <h5 className="mt-3">Price: {newPrice} TAKA</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pay-money">
                <PaymentProcess
                  singleProduct={singleProduct}
                  newPrice={newPrice}
                  pdCount={pdCount}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;

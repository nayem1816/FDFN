import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PaymentProcess = ({ singleProduct, newPrice }) => {
  console.log(singleProduct);
  return (
    <div className="border rounded m-2">
      <div className="bg-dark text-white rounded">
        <h1 className="p-2">Payment Process</h1>
      </div>
      <div className="">
        <button
          className="btn btn-danger font-ubuntu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Bikash Payment Rules
          <FontAwesomeIcon className="ms-2" icon={faChevronDown} />
        </button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p className="font-open-sans">
              01. Go to your bKash Mobile Menu by dialing *247# <br /> 02.
              Choose “Send Money” <br />
              03. Enter the bKash Account Number you want to send money to{" "}
              <br />
              04. Enter the amount you want to send <br />
              05. Enter a reference about the transaction. (Do not use more than
              one word, avoid space or special characters) <br />
              06. Now enter your bKash Mobile Menu PIN to confirm the
              transaction <br />
              Done! You and the Receiver both will receive a confirmation
              message from bKash.
            </p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h4 className="font-open-sans">
          Name: <small>Md Nayem Hossain</small>
        </h4>
        <h4 className="font-open-sans">
          Email: <small>nayem@gmail.com</small>
        </h4>
        <h4 className="font-open-sans">
          Total Amount: <small>{newPrice} Tk.</small>
        </h4>
        <div className="">
          <button className="btn btn-dark my-3 font-ubuntu">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;

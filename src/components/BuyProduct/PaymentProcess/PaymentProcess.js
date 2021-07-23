import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./PaymentProcess.css";
import { useForm } from "react-hook-form";

const PaymentProcess = ({ singleProduct, newPrice, pdCount }) => {
  // console.log(singleProduct);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
              ১। *২৪৭# ডায়াল করে বিকাশ মোবাইল মেন্যুতে যান
              <br /> ২। “সেন্ড মানি” সিলেক্ট করুন <br />
              ৩। আপনি যে বিকাশ একাউন্টে টাকা পাঠাতে চান সেই একাউন্ট নাম্বারটি
              লিখুন
              <br />
              ৪। আপনি যে পরিমাণ টাকা পাঠাতে চান সেই পরিমাণ টি লিখুন <br />
              ৫। লেনদেনের একটি রেফারেন্স/তথ্যসূত্র দিন (একটি শব্দের বেশি ব্যবহার
              করবেন না, স্পেস এবং বিশেষ অক্ষর এর ব্যবহার এড়িয়ে চলুন) <br />
              ৬। আপনার বিকাশ মোবাইল মেন্যু পিনটি দিয়ে লেনদেনটি সম্পন্ন করুন{" "}
              <br />
              আপনি এবং প্রাপক দুজনই বিকাশ থেকে কনফার্মেশন মেসেজ পাবেন।
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 checkout-process">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="font-open-sans">
            Name:{" "}
            <input
              type="text"
              value="Md Nayem Hossain"
              {...register("name", { required: true })}
              placeholder="Your name"
            />
          </h4>
          <h4 className="font-open-sans">
            Email:{" "}
            <input
              type="text"
              value="nayem@gmail.com"
              {...register("email", { required: true })}
              placeholder="Your email"
            />
          </h4>
          <h4 className="font-open-sans">
            Total Product:{" "}
            <input
              type="text"
              value={pdCount}
              {...register("totalProduct", { required: true })}
              placeholder="Total Product"
              readonly
            />
          </h4>

          <h4 className="font-open-sans">
            Total Amount:{" "}
            <input
              type="text"
              value={newPrice}
              {...register("totalPrice", { required: true })}
              placeholder="Total Price"
              readonly
            />
          </h4>
          <h4 className="font-open-sans">
            Bikash Trx Id:{" "}
            <input
              type="text"
              {...register("trxId", { required: true })}
              placeholder="Transaction ID"
            />
          </h4>
          <h4 className="font-open-sans">
            Phone Number:{" "}
            <input
              type="number"
              {...register("phoneNum", {
                required: true,
                minLength: 10,
                maxLength: 15,
              })}
              placeholder="+8801811111111"
            />
          </h4>
          <h4 className="font-open-sans">
            Address:{" "}
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Your Address"
            />
          </h4>
          <div className="">
            <input
              className="btn btn-dark my-3 font-ubuntu"
              type="submit"
              value="Checkout"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentProcess;

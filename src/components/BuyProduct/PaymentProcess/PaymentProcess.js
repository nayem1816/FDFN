import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./PaymentProcess.css";
import { useForm } from "react-hook-form";
import { userContext } from "./../../../App";
import { useHistory } from "react-router-dom";

const PaymentProcess = ({ singleProduct, pdCount, newPrice }) => {
    const [loggedInUser] = useContext(userContext);
    const history = useHistory();

    const { register, handleSubmit } = useForm();
    const orderStatus = "Pending";
    const onSubmit = (data) => {
        const orderTime = new Date().toLocaleString();
        const order = data;
        const buyProducts = {
            ...loggedInUser,
            order,
            newPrice,
            singleProduct,
            pdCount,
            orderTime,
            orderStatus,
        };

        console.log(buyProducts);
        fetch("https://hidden-everglades-14055.herokuapp.com/buyProducts", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(buyProducts),
        })
            .then((res) => res.json)
            .then((data) => {
                console.log(data);
                alert("Product Buy Successfully", history.push("/myOrder"));
            });
    };
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
                            ৩। আপনি যে বিকাশ একাউন্টে টাকা পাঠাতে চান সেই
                            একাউন্ট নাম্বারটি লিখুন
                            <br />
                            ৪। আপনি যে পরিমাণ টাকা পাঠাতে চান সেই পরিমাণ টি
                            লিখুন <br />
                            ৫। লেনদেনের একটি রেফারেন্স/তথ্যসূত্র দিন (একটি
                            শব্দের বেশি ব্যবহার করবেন না, স্পেস এবং বিশেষ অক্ষর
                            এর ব্যবহার এড়িয়ে চলুন) <br />
                            ৬। আপনার বিকাশ মোবাইল মেন্যু পিনটি দিয়ে লেনদেনটি
                            সম্পন্ন করুন <br />
                            আপনি এবং প্রাপক দুজনই বিকাশ থেকে কনফার্মেশন মেসেজ
                            পাবেন।
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-3 checkout-process">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="font-open-sans">
                        <span className="fw-bold">Name:</span>{" "}
                        {loggedInUser.name}
                    </h4>
                    <h4 className="font-open-sans">
                        <span className="fw-bold">Email:</span>{" "}
                        {loggedInUser.email}
                    </h4>
                    <h4 className="font-open-sans">
                        <span className="fw-bold">Total Product:</span>{" "}
                        {pdCount}
                    </h4>

                    <h4 className="font-open-sans">
                        <span className="fw-bold">Total Amount:</span>{" "}
                        {newPrice} Taka
                    </h4>
                    <h4 className="font-open-sans">
                        <span className="fw-bold">Bikash Trx Id:</span>{" "}
                        <input
                            type="text"
                            {...register("trxId", { required: true })}
                            placeholder="Transaction ID"
                        />
                    </h4>
                    <h4 className="font-open-sans">
                        <span className="fw-bold">Phone Number:</span>{" "}
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
                        <span className="fw-bold">Address:</span>{" "}
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

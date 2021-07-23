import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./RegisterForm.css";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Thank You! for your Registration form");
  };
  return (
    <div>
      <Header />
      <div className="text-center register-form-top">
        <div className="register-form-bg d-flex justify-content-center align-items-center">
          <div className="text-white container mt-5">
            <div className="p-2">
              <Link to="/">FDFN</Link>
            </div>
            <h6>Friends Digital Fiber Network</h6>
            <h3 className="p-2">Internet Subscriber Registration Form</h3>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row p-2">
            <label for="subscriberName" className="col-sm-2 col-form-label">
              Subscriber's Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="subscriberName"
                {...register("subscriberName", { required: true })}
                placeholder="Subscriber Name"
              />
              {errors.subscriberName && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label
              for="authorizedPersonName"
              className="col-sm-2 col-form-label"
            >
              Authorized Person's Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Authorized Person Name"
                className="form-control"
                id="authorizedPersonName"
                {...register("authorizedPersonName", { required: true })}
              />
              {errors.authorizedPersonName && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label for="contactNumber" className="col-sm-2 col-form-label">
              Contact Number
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Your Contact Number"
                className="form-control"
                id="contactNumber"
                {...register("contactNumber", { required: true })}
              />
              {errors.contactNumber && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label for="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
              />
              {errors.email && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label for="nationalId" className="col-sm-2 col-form-label">
              National ID No.
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nationalId"
                {...register("nationalId", { required: true })}
                placeholder="National ID No."
              />
              {errors.nationalId && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label for="dateOfBirth" className="col-sm-2 col-form-label">
              Date Of Birth
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="dateOfBirth"
                {...register("dateOfBirth", { required: true })}
                placeholder="Date Of Birth"
              />
              {errors.dateOfBirth && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label for="gender" className="col-sm-2 col-form-label">
              Gender
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                {...register("gender", { required: true })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label for="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="address"
                {...register("address", { required: true })}
                placeholder="Address"
              />
              {errors.address && (
                <span className="color-red">This field is required</span>
              )}
            </div>
          </div>
          <div className="row p-2">
            <label for="occupation" className="col-sm-2 col-form-label">
              Occupation
            </label>
            <div className="col-sm-10">
              <select className="form-select" {...register("occupation")}>
                <option value="business">Business</option>
                <option value="student">Student</option>
                <option value="government">Government Service</option>
                <option value="private">Private Service</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
          <div className="row p-2">
            <label for="fathersName" className="col-sm-2 col-form-label">
              Father's Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fathersName"
                {...register("fathersName")}
                placeholder="Father Name"
              />
            </div>
          </div>
          <div className="row p-2">
            <label for="mothersName" className="col-sm-2 col-form-label">
              Mother's Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="mothersName"
                {...register("mothersName")}
                placeholder="Mother Name"
              />
            </div>
          </div>
          <div className="row p-2">
            <label for="yourPhoto" className="col-sm-2 col-form-label">
              Your Photo
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="yourPhoto"
                {...register("yourPhoto")}
                placeholder="Your Photo"
              />
            </div>
          </div>
          <div className="row p-2">
            <label for="nidFrontPhoto" className="col-sm-2 col-form-label">
              NID Front Page
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="nidFrontPhoto"
                {...register("nidFrontPhoto")}
                placeholder="NID Front Photo"
              />
            </div>
          </div>
          <div className="row p-2">
            <label for="nidBackPhoto" className="col-sm-2 col-form-label">
              NID Back Page
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="nidBackPhoto"
                {...register("nidBackPhoto")}
                placeholder="NID Back Photo"
              />
            </div>
          </div>
          <div className="text-center">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterForm;

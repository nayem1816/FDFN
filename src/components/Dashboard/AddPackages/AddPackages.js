import React from "react";
import { useForm } from "react-hook-form";

const AddPackages = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container-fluid">
      <h1>Add Packages</h1>
      <div className="mt-5 mx-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-5">
            <div className="col-12">
              <h5>Package Type*</h5>
              <select {...register("packageType")}>
                <option value="home">Home</option>
                <option value="locally">Locally</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>
            <div className="col-md-6">
              <h5>Package Title*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Package title"
                {...register("packageTitle", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Package Name*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Package name"
                {...register("packageName", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Package Price*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Package Price"
                {...register("packagePrice", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Add Feature*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Features"
                {...register("features1", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Add Feature*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Features"
                {...register("features2", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Add Feature*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Features"
                {...register("features3", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Add Feature*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Features"
                {...register("features4", { required: true })}
              />
            </div>
            <div className="col-md-12">
              <input
                className="btn btn-dark"
                type="submit"
                value="Add Package"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackages;

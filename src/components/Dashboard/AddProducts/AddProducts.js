import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Add Products</h1>
      <div className="mt-5 mx-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-5">
            <div className="col-md-6">
              <h5>Product Name*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
                {...register("ProductName", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Product Image*</h5>
              <input
                type="file"
                className="form-control"
                {...register("productImg", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Product Price*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="product Price"
                {...register("productPrice", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <h5>Description*</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Product description"
                {...register("description", { required: true })}
              />
            </div>
            <div className="col-md-12">
              <input
                className="btn btn-dark"
                type="submit"
                value="Add Product"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

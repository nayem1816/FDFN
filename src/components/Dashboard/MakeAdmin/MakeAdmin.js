/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [admins, setAdmins] = useState([]);
    const onSubmit = (data) => {
        const adminEmail = data;
        fetch("https://hidden-everglades-14055.herokuapp.com/makeAdmin", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(adminEmail),
        })
            .then((res) => res.json)
            .then((data) => {
                console.log(data);
                alert("Thank you, for new Admin");
                reset();
            });
    };
    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/admins")
            .then((res) => res.json())
            .then((data) => {
                setAdmins(data);
            });
    }, []);

    let count = 1;

    return (
        <div>
            <h2>Make Admin</h2>
            <div className="mt-5 mx-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <h5>Add New Admin Email</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="New Admin Email"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="col-md-12">
                            <input
                                className="btn btn-dark"
                                type="submit"
                                value="Make Admin"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-5">
                <h2>Admin List</h2>
                <div className="mx-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin) => (
                                <tr>
                                    <td>{count++}</td>
                                    <td>{admin.email}</td>
                                    <td>
                                        <a href="#">Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;

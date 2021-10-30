import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";

const ManageAllOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [status, setStatus] = useState('');
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("https://secret-oasis-75904.herokuapp.com/allOrder")
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://secret-oasis-75904.herokuapp.com/deletePackage/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        console.log(id);
    }
    const handleStatus = (e) => {
        fetch(`https://secret-oasis-75904.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    setStatus("approved")
                }
            })
        e.preventDefault();
    }
    return (
        <div className="container">
            <h1>Total Order {order?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Package Title</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Stutus</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {order?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd.Place}</td>
                            <td>{pd.email}</td>
                            <td>{pd.address}</td>
                            <td>
                                {/* <button
                                    onClick={() => handleStatus(pd._id)}
                                    className="btn bg-warning p-2"
                                >
                                    {pd.status}
                                </button> */}
                                <form onSubmit={handleStatus}>
                                    <input type="submit" value={pd.status} />
                                </form>

                            </td>
                            <td>
                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrder;
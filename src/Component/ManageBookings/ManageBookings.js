import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManageBookings.css';

const ManageBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch('https://ghostly-moonlight-88781.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [control])


    const handleDelete = (id) => {
        const proceed = window.confirm("Do you want to delete? ");
        if (proceed) {
            fetch(`https://ghostly-moonlight-88781.herokuapp.com/deleteBooking/${id}`, {
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
        }
        console.log(id);
    }

    const handleStatus = (id) => {
        const proceed = window.confirm("Do you want to Approve? ");
        if (proceed) {
            fetch(`https://ghostly-moonlight-88781.herokuapp.com/allBookings/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ status: "Approved" })
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        setConrol(!control);
                    } else {
                        setConrol(false);
                    }
                });
        }
        console.log(id);

    }

    return (
        <Container className="text-center pb-5 my-5">
            <h1>Manage All Bookings</h1>
            <Container>
                <Table responsive="sm" className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Package Title</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, index) => (

                                <tr key={booking?._id}>
                                    <td>{index + 1}</td>
                                    <td>{booking?.packageName}</td>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.email}</td>
                                    <td><button onClick={() => handleStatus(booking?._id)} className="btn btn-success">{booking?.status}</button></td>

                                    <td> <button onClick={() => handleDelete(booking?._id)}
                                        className="btn bg-danger text-white px-3 py-1"><i className="far fa-trash-alt"></i> Delete</button></td>
                                </tr>

                            ))}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
};

export default ManageBookings;
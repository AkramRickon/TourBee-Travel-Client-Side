
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();

    const [myBookings, setMyBookings] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch(`https://ghostly-moonlight-88781.herokuapp.com/myBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data))
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


    return (
        <Container className="my-5 pb-5 text-center"  >
            <h1 className="mb-5">My Booking List</h1>
            <Container>
                <Table responsive="sm" className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Package Title</th>
                            <th>Name</th>
                            <th>EMail</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings?.map((booking, index) => (

                                <tr key={booking?._id}>
                                    <td>{index + 1}</td>
                                    <td>{booking?.packageName}</td>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.email}</td>
                                    <td className="fw-bold text-warning">{booking?.status}</td>

                                    <td> <button onClick={() => handleDelete(booking?._id)}
                                        className="btn bg-danger text-white px-3 py-1"> <i className="far fa-trash-alt me-2"></i>Delete</button></td>
                                </tr>

                            ))}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
};

export default MyBookings;
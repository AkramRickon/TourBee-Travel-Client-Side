import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './PlaceBooking.css';

const PlaceBooking = (props) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        data.status = "Pending";

        fetch('https://ghostly-moonlight-88781.herokuapp.com/addBookings', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Package Booked sccessfully');
                    reset();
                }
            });

        console.log(data);
    }

    return (
        <Container className="booking-form  text-center  my-5 pb-5">
            
                <h3 className="mb-3">Book This Package</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                    <input defaultValue={user?.email} {...register("email", { required: true })} placeholder="Email" />

                     <input {...register("packageName",)} placeholder="Package Name" />

                    {/* <select {...register("packageName")}>
                        <option value="Sajek Valley">Sajek Valley</option>
                        <option value="Cox's Bazar Tour">Cox's Bazar Tour</option>
                        <option value="Saint Martin Island">Saint Martin Island</option>
                        <option value="Nijhum Dwip">Nijhum Dwip</option>
                        <option value="Rangamati Tour">Rangamati Tour</option>
                        <option value="Sylhet Tour">Sylhet Tour</option>
                    </select> */}

                    <input type="number" {...register("phoneNumber", { required: true })} placeholder="Mobile Number" />

                    <textarea {...register("address", { required: true })} placeholder="Address" />

                    {/* <input type="submit" className="btn btn-success" /> */}
                    <button type="submit" className="btn btn-warning">Book Now</button>
                </form>
           
        </Container>
    );
};

export default PlaceBooking;
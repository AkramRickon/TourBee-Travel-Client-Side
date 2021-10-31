import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPackage.css';


const AddPackage = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {

        fetch('https://ghostly-moonlight-88781.herokuapp.com/addPackage', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) =>{
                if(result.insertedId)
                {
                    alert('Package inserted sccessfully');
                    reset();
                }
            });

        console.log(data);
    }

    return (
        <Container className="form-container text-center  my-5 pb-5">
            <Container>
                <h3 className="mb-3">Add Package</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true, maxLength: 20 })} placeholder="Title" />
                    <input {...register("duration")} placeholder="Duration" />
                    <input type="number" {...register("cost", { min: 2000, max: 20000 })} placeholder="Cost" />
                    <input {...register("transport")} placeholder="Transport" />
                    <textarea {...register("details")} placeholder="Details" />
                    <input {...register("photo")} placeholder="Photo URL" />
                    <input type="submit" className="btn btn-success" />
                </form>
            </Container>
        </Container>
    );
};

export default AddPackage;
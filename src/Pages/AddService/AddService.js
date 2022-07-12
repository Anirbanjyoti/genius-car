import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, acknowledged } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://sleepy-harbor-68407.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(acknowledged){
          Navigate('/home');
        }
      });
  };
  return (
    <div className="add-service">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-50 mx-auto d-flex flex-column"
      >
        <h1>Please Add Service</h1>
        <input
          className="mb-2"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <textarea
          className="mb-2"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="mb-2"
          type="text"
          placeholder="Photo Url"
          {...register("img")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;

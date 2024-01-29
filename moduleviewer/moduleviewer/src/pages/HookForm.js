import React from "react";
import { useForm } from "react-hook-form";
// import "./styles.css";

// https://leekihyun.tistory.com/entry/React-Hook-Form-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

function HookForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            minLength: {
              value: 5,
              message: "Username must be longer than 5 characters"
            }
          })}
        />
        <input type="submit" />
      </form>
      {/* {errors && <h1>{error?.username?.message}</h1>} */}
    </div>
  );
}

export default HookForm;
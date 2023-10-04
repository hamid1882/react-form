import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginInputSchema, inputTypes } from "../schema.ts";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<inputTypes>({
    resolver: zodResolver(loginInputSchema),
  });

  const onSubmit: SubmitHandler<inputTypes> = async (data: inputTypes) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-2 items-center h-screen w-screen"
    >
      <div className="flex gap-5 flex-col w-1/2 justify-center items-center mb-4">
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded p-2 w-64"
          {...register("email")}
        />
        {errors["email"] && (
          <span className="text-red-800 block">{errors["email"]?.message}</span>
        )}
      </div>
      <div className="flex gap-5 flex-col w-1/2 justify-center items-center mb-4">
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded p-2 w-64"
          {...register("password")}
        />
        {errors["password"] && (
          <span className="text-red-800 block">
            {errors["password"]?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;

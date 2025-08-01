"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log({ res });

    if (res.status === 200 || res.status === 201) {
      // set token for each user
      const data = await res.json()
      console.log({data})
      // localStorage.setItem('token' , data.token)
      // router.push("/chat");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-md w-1/3 rounded-md p-5 m-auto"
    >
      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
          name="username"
          id=""
          className="w-full border border-amber-600 rounded-full py-2 px-4"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="پسورد را وارد کنید"
          name="password"
          id=""
          className="w-full my-3 border border-amber-600 rounded-full py-2 px-4"
        />
      </div>
      <button
        type="submit"
        className="bg-amber-700 w-full rounded-full py-2 cursor-pointer"
      >
        login
      </button>
    </form>
  );
};

export default LoginPage;

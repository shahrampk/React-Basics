import React, { useEffect, useState } from "react";

const InputForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const postUsers = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "Post",
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (data) alert("User added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={postUsers}
      className="bg-linear-to-br bg-green-700 py-10 px-8 rounded-lg flex flex-col gap-5 shadow-xl shadow-black"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg font-black">
          Name:
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Enter your name"
          className="text-xl px-3 py-2 outline-none border-2"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-black">
          Email:
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          placeholder="Enter your email"
          className="text-xl px-3 py-2 outline-none border-2"
          autoComplete="email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-lg font-black">
          Password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="current-password"
          id="password"
          placeholder="Enter your password"
          className="text-xl px-3 py-2 outline-none border-2"
          required
        />
      </div>
      <button className="border-2 px-3 py-2 cursor-pointer">Submit</button>
    </form>
  );
};

export default InputForm;

import React, { use, useActionState, useId } from "react";

const UseActiveState = ({ setUserData }) => {
  async function handleSubmit(prevData, formData) {
    console.log(prevData);

    await new Promise((res) => setInterval(res, 2000));
    const data = {
      id: Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    setUserData((prev) => [...prev, data]);
  }
  const [data, active, pending] = useActionState(handleSubmit, undefined);

  return (
    <form
      action={active}
      className="border border-gray-300/30 rounded-lg p-5 flex flex-col gap-5 bg-[#481175]"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-100/30 px-4 py-2 rounded-sm"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-gray-100/30 px-4 py-2 rounded-sm"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-gray-100/30 px-4 py-2 rounded-sm"
          required
        />
      </div>
      <button
        className={`bg-[#1b742b] cursor-pointer px-4 py-2 rounded-sm ${
          pending ? "opacity-60" : "opacity-100"
        } `}
      >
        {pending ? "Submitting..." : "Submit Form"}
      </button>
    </form>
  );
};

export default UseActiveState;

import React, { useState } from "react";

const UpdateObjects = () => {
  const [data, setData] = useState({
    name: "Shahram",
    address: {
      city: "JPJ",
      country: "Pakistan",
      street: {
        chok: "Habib sizing",
        no: 1,
      },
    },
  });

  const handleInput = (e, changePara) =>
    setData((prev) =>
      changePara === "city"
        ? { ...prev, address: { ...prev.address, city: e } }
        : changePara === "country"
        ? { ...prev, address: { ...prev.address, country: e } }
        : { ...prev, name: e }
    );

  function changeChok() {

    setData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        street: { ...prev.address.street, chok: "Habib sizing plant Chok" },
      },
    }));
  }
  return (
    <div className="p-20 flex flex-col gap-5 w-fit">
      <input
        type="text"
        placeholder="Change Name"
        className="border px-4 py-2"
        onChange={(e) => handleInput(e.target.value, "name")}
      />
      <input
        type="text"
        placeholder="Change City"
        className="border px-4 py-2"
        onChange={(e) => handleInput(e.target.value, "city")}
      />
      <input
        type="text"
        placeholder="Change"
        className="border px-4 py-2"
        onChange={changeChok}
      />

      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
};

export default UpdateObjects;

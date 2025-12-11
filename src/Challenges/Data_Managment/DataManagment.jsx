import React from "react";
import InputForm from './InputForm'
import DataTable from './DataTable'


const DataManagment = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-black/80 via-black/90 to-black flex flex-col items-center">
      <p className="my-5 pb-5 text-8xl text-shadow-lg text-shadow-green-600 font-black">
        📈 Data Management
      </p>
      <div className="flex gap-10 justify-between items-start w-full px-10 py-5 min-h-3/4">
        <InputForm />
        <DataTable />
      </div>
    </div>
  );
};

export default DataManagment;

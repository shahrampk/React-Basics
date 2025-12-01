import { useState } from "react";
import UseActiveState from "./Practice/Hooks/UseActiveState";
import DataTable from "./Challenges/Data_Managment/DataTable";
const App = () => {
  const [userData, setUserData] = useState([]);
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-20 gap-10">
      <UseActiveState setUserData={setUserData} />
      <DataTable users={userData} />
    </div>
  );
};

export default App;

import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

export default function useJsonApi() {
  const [usersData, setUsersData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  async function fetchDate() {
    try {
      const res = await fetch("http://localhost:3000/users");
      if (!res.ok) return new Error(res.state);
      const data = await res.json();
      console.log(data);

      setUsersData(data);
      setShowLoader(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    setShowLoader(true);
    fetchDate();
  }, []);

  return [usersData, setUsersData, showLoader];
}

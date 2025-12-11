import { useState, useEffect } from "react";

export default function useUsersProfile({ id }) {
  console.log(id);

  const [userData, setUserData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(`https://api.github.com/users/${id}`);
      if (!res.ok) return new Error();
      const data = await res.json();
      console.log(data);

      setUserData(data);
    } catch (error) {
      throw new Error();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [userData, setUserData];
}

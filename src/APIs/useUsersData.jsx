import { useState, useEffect } from "react";

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("https://api.github.com/users");
      if (!res.ok) return new Error(res.statusText);
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [users, setUsers];
}

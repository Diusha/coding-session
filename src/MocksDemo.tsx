import { useEffect, useState } from "react";

const MocksDemo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <>
      {users.map((user: any) => (
        <div>
          {user.name}, {user.age}
        </div>
      ))}
    </>
  );
};
export default MocksDemo;

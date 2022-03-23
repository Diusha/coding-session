import { useEffect, useState } from "react";

const MocksDemo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then(setUsers);
  });

  return (
    <>
      {users.map((user: any) => (
        <div>
          {user.name}, {user.username}
        </div>
      ))}
    </>
  );
};

export default MocksDemo;

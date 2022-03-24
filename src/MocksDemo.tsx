import { useEffect, useState } from "react";

const MocksDemo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <>
      {data.map((user: any) => (
        <div>
          {user.name}, {user.username}
        </div>
      ))}
    </>
  );
};

export default MocksDemo;

import { useEffect, useState } from "react";
import axios from "axios";

const MocksDemo = () => {
  const [data, setData] = useState([]);
  const [refetch, setRefetch] = useState(1);

  useEffect(() => {
    fetch("/favs")
      .then((response) => response.json())
      .then(setData);
  }, [refetch]);

  function addItem(id: string, name: string) {
    axios.post("/favs", { id, name });
    setRefetch(refetch + 1);
  }

  return (
    <>
      <button onClick={() => addItem("btc", "Bitcoin")}>Add</button>
      {data.map((user: any) => (
        <div>
          {user.id}, {user.name}
        </div>
      ))}
    </>
  );
};

export default MocksDemo;

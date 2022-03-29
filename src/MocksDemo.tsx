import { useEffect, useState } from "react";
import axios from "axios";

const MocksDemo = () => {
  const [data, setData] = useState([]);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    axios.get("/favs").then((r) => setData(r.data));
  }, [refetch]);

  return <>Demo</>;
};

export default MocksDemo;

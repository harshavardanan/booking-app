import React, { useState, useEffect } from "react";

export default function VehiclesList() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    const response = await fetch("http://localhost:5000/vehicles");
    const datas = await response.json();
    setData(datas);
  };

  console.log(data);
  useEffect(() => {
    fetchPost();
    setLoading(true);
  }, []);

  return loading ? (
    <div>
      <p>
        {data.brand},{data.model}, {data.wheels}
      </p>
    </div>
  ) : (
    <p>No Data</p>
  );
}

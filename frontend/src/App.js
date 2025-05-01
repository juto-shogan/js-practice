import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/data")
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/api/data", { item: newData })
      .then(() => {
        setData([...data, { item: newData }]);
        setNewData("");
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Full Web App</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Add new data"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
      <ul>
        {data.map((d, i) => (
          <li key={i} className="border-b p-2">{d.item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
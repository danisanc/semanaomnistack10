import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

import DevForm from "./components/devForm";
import DevItem from "./components/devItem";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  const handleAddDev = async data => {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  };

  return (
    <section id="app">
      <aside>
        <h2>Cadastrar</h2>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map((dev, i) => (
            <DevItem key={i} dev={dev} />
          ))}
        </ul>
      </main>
    </section>
  );
}

export default App;

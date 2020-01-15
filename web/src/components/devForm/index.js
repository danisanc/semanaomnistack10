import React, { useState, useEffect } from "react";

import "./styles.css";

const DevForm = ({ onSubmit }) => {
  const [github_username, setGithubUsarname] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      err => console.log(err),
      { timeout: 30000 }
    );
  }, []);

  const handleAddDev = async e => {
    e.preventDefault();

    const data = {
      github_username,
      techs,
      latitude,
      longitude
    };

    onSubmit(data);

    setGithubUsarname("");
    setTechs("");
  };

  return (
    <form onSubmit={handleAddDev}>
      <div className="input-block">
        <label htmlFor="github_username">Usuario do GitHub</label>
        <input
          type="text"
          id="github_username"
          value={github_username}
          onChange={e => setGithubUsarname(e.target.value)}
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          type="text"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            id="latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            id="longitude"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            required
          />
        </div>
      </div>

      <input type="submit" value="Salvar" />
    </form>
  );
};

export default DevForm;

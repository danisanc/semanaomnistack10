import React from "react";

import "./styles.css";

const DevItem = ({ dev }) => {
  return (
    <li>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-infos">
          <h4>{dev.name}</h4>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar github</a>
    </li>
  );
};

export default DevItem;

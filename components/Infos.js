import React from "react";

function Infos({ title, description }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ borderBottom: "1px solid", marginBottom: "2px" }}>
        {title}
      </h2>
      <p style={{ marginTop: "5px" }}>{description}</p>
    </div>
  );
}

export default Infos;

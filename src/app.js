import React, { useEffect, useState } from "react";

const GYPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";

const App = () => {
  const [obtenerGato, setObtenerGato] = useState("");
  const [imagenGato, setImagenGato] = useState("");

  const llamarGiphyAPI = (string) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GYPHY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const imagen = data.data[0].images.original.url;
        setImagenGato(imagen);
      });
  };

  const llamarApi = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setObtenerGato(data?.fact?.split(" ", 3) || "not Found");
        llamarGiphyAPI(data?.fact?.split(" ", 3));
      });
  };

  useEffect(llamarApi, []);

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <img
        src={imagenGato}
        alt="gif"
        style={{ objectFit: "contain", width: "250px", height: "250px" }}
      />
      <h1>{obtenerGato}</h1>;
    </div>
  );
};
export default App;

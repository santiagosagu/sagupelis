import React, { useState } from "react";
import { db } from "../firebaseConfig";

const NuevaSerie = () => {
  const [datosSerie, setDatosSerie] = useState({
    id: "",
    imagen: "",
    nombre: "",
    descripcion: "",
    categoria: "",
  });
  const [temporadaActual, setTemporadaActual] = useState("");
  const [episodioActual, setEpisodioActual] = useState({
    nombre: "",
    url: "",
  });
  const [temporadas, setTemporadas] = useState([]);
  const [episodios, setEpisodios] = useState([]);

  const guardarEpisodio = async () => {
    await setEpisodios([...episodios, episodioActual]);

    await setEpisodioActual({
      nombre: "",
      url: "",
    });
  };

  const guardarTemporada = () => {
    if (episodios.length > 0) {
      setTemporadas([
        ...temporadas,
        {
          nombre: temporadaActual,
          episodios: episodios,
        },
      ]);
    }

    setTemporadaActual("");
    setEpisodios([]);
  };

  const confirmarTemporadas = () => {
    setDatosSerie({
      ...datosSerie,
      temporadas: temporadas,
    });

    setTemporadas([]);
  };

  const guardarSerie = async (e) => {
    e.preventDefault();

    if (datosSerie.nombre.length !== 0) {
      await db.collection("series").add(datosSerie);
    }

    console.log("serie guardada");
  };

  return (
    <div>
      <form
        onSubmit={guardarSerie}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Id</label>
        <input
          type="number"
          onChange={(e) =>
            setDatosSerie({ ...datosSerie, imagen: Number(e.target.value) })
          }
        />

        <label>Imagen</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosSerie({ ...datosSerie, imagen: e.target.value })
          }
        />

        <label>Nombre Serie</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosSerie({ ...datosSerie, nombre: e.target.value })
          }
        />

        <label>Descripcion</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosSerie({ ...datosSerie, descripcion: e.target.value })
          }
        />

        <label>Categoria</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosSerie({ ...datosSerie, categoria: e.target.value })
          }
        />

        <label>Temporada</label>
        <input
          type="text"
          value={temporadaActual}
          onChange={(e) => setTemporadaActual(e.target.value)}
        />

        <h2>episodios</h2>

        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={episodioActual.nombre}
          onChange={(e) =>
            setEpisodioActual({
              ...episodioActual,
              [e.target.name]: e.target.value,
            })
          }
        />

        <label>Url</label>
        <input
          type="text"
          name="url"
          value={episodioActual.url}
          onChange={(e) =>
            setEpisodioActual({
              ...episodioActual,
              [e.target.name]: e.target.value,
            })
          }
        />

        <button type="button" onClick={() => guardarEpisodio()}>
          guardar episodio
        </button>
        <button type="button" onClick={() => guardarTemporada()}>
          guardar temporada
        </button>
        <button type="button" onClick={() => confirmarTemporadas()}>
          confirmar temporadas
        </button>

        <button type="submit">guardar serie</button>
      </form>
    </div>
  );
};

export default NuevaSerie;

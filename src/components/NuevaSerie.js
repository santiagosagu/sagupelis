import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { db } from "../firebaseConfig";

const Contenedor = styled.div`
  padding: 2rem;
  form {
    @media (min-width: 768px) {
      width: 50%;
    }
    margin: 0 auto;

    h2 {
      text-align: center;
    }

    label {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #baad0f;
    }

    input {
      background-color: rgb(19, 18, 18);
      border: none;
      margin-bottom: 1.8rem;
      border-bottom: 1px solid #fff;
      color: #fff;
      font-size: 2rem;

      @media (min-width: 768px) {
        margin-bottom: 3.5rem;
      }
    }

    .cardEpisodio {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border: 1px solid #fff;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      margin: 1rem 0;
      background-color: #fff;
      color: #000;

      li {
        list-style: none;
      }
    }
  }
`;

const Boton = styled.h4`
  color: #fff;
  background-color: #53555a;
  padding: 1.2rem;
  font-size: 2rem;
  opacity: 3;
  text-align: center;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

const NuevaSerie = () => {
  const [series, setSeries] = useState([]);
  const [datosSerie, setDatosSerie] = useState({
    id: "",
    imagen: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    temporadas: [],
  });
  const [temporadaActual, setTemporadaActual] = useState("");
  const [episodioActual, setEpisodioActual] = useState({
    nombre: "",
    url: "",
  });
  const [temporadas, setTemporadas] = useState([]);
  const [episodios, setEpisodios] = useState([]);

  // traer todas las series
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("series").orderBy("id", "desc").onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          ids: doc.id,
          ...doc.data(),
        };
      });
      setSeries(resultado);
    }
  }, []);

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
    <Contenedor>
      <form
        onSubmit={guardarSerie}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {series.length && <p>consecutivo: {series.length}</p>}

        <h2>Datos de la Serie</h2>
        <label>Id</label>
        <input
          type="number"
          onChange={(e) =>
            setDatosSerie({ ...datosSerie, id: Number(e.target.value) })
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
        {datosSerie.id > series.length &&
          datosSerie.imagen.trim > "" &&
          datosSerie.nombre.trim > "" &&
          datosSerie.descripcion.trim > "" &&
          datosSerie.categoria.trim > "" && (
            <>
              <h2>Temporada</h2>
              <input
                type="text"
                value={temporadaActual}
                onChange={(e) => setTemporadaActual(e.target.value)}
              />
            </>
          )}

        {temporadaActual !== "" && (
          <>
            <h2>Episodios</h2>

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
          </>
        )}

        {episodioActual.nombre !== "" && episodioActual.url !== "" && (
          <Boton onClick={() => guardarEpisodio()}>Guardar Episodio</Boton>
        )}

        {episodios.length > 0 &&
          episodios.map((item) => (
            <div className="cardEpisodio">
              <li>{item.nombre}</li>
              <li>{item.url}</li>
            </div>
          ))}

        {episodios.length > 0 && (
          <Boton type="button" onClick={() => guardarTemporada()}>
            Guardar temporada
          </Boton>
        )}

        {temporadas.length > 0 &&
          temporadas.map((item) => (
            <>
              <div className="cardEpisodio">
                <li>{item.nombre}</li>
                <li>Se ha guardado con exito!!!</li>
              </div>
            </>
          ))}
        {temporadas.length > 0 && (
          <Boton type="button" onClick={() => confirmarTemporadas()}>
            confirmar temporadas
          </Boton>
        )}

        {datosSerie.temporadas.length > 0 && (
          <div className="cardEpisodio">
            <li>
              Se han Guardado {datosSerie.temporadas.length} Temporada con
              Exito!!!
            </li>
            <li>Ya Puedes Proceder a guardar en la base de datos</li>
          </div>
        )}

        {datosSerie.temporadas.length > 0 && (
          <Boton type="submit">Guardar Base Datos</Boton>
        )}
      </form>
    </Contenedor>
  );
};

export default NuevaSerie;

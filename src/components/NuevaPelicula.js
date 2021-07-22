import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
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

    input,
    textarea {
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

const BotonSubmit = styled.button`
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

const NuevaPelicula = () => {
  const [datosPelicula, setDatosPelicula] = useState({
    id: "",
    imagen: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    url: "",
  });

  const [peliculasDB, setPeliculasDB] = useState([]);

  // traer todos las peliculas
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("peliculas")
        .orderBy("id", "desc")
        .onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          ids: doc.id,
          ...doc.data(),
        };
      });
      setPeliculasDB(resultado);
    }
  }, []);

  const guardarPelicula = (e) => {
    e.preventDefault();

    if (datosPelicula.nombre.length !== 0) {
      db.collection("peliculas").add(datosPelicula);

      setDatosPelicula({
        id: "",
        imagen: "",
        nombre: "",
        descripcion: "",
        categoria: "",
        url: "",
      });
    }

    console.log("pelicula guardada");
  };

  return (
    <Contenedor>
      <form
        onSubmit={guardarPelicula}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {peliculasDB.length && <p>consecutivo: {peliculasDB[0].id}</p>}

        <label>ID</label>
        <input
          value={datosPelicula.id}
          type="number"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, id: Number(e.target.value) })
          }
        />

        <label>Imagen</label>
        <input
          value={datosPelicula.imagen}
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, imagen: e.target.value })
          }
        />

        <label>Nombre Pelicula</label>
        <input
          value={datosPelicula.nombre}
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, nombre: e.target.value })
          }
        />

        <label>Descripcion</label>
        <textarea
          value={datosPelicula.descripcion}
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, descripcion: e.target.value })
          }
        ></textarea>

        <label>Categoria</label>
        <input
          value={datosPelicula.categoria}
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, categoria: e.target.value })
          }
        />

        <label>url</label>
        <input
          value={datosPelicula.url}
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, url: e.target.value })
          }
        />

        <BotonSubmit type="submit" style={{ marginTop: "1rem" }}>
          guardar pelicula
        </BotonSubmit>
      </form>
    </Contenedor>
  );
};

export default NuevaPelicula;

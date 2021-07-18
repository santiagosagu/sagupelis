import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

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

  const guardarPelicula = async (e) => {
    e.preventDefault();

    if (datosPelicula.nombre.length !== 0) {
      await db.collection("peliculas").add(datosPelicula);
    }

    console.log("pelicula guardada");
  };

  return (
    <div>
      <p>consecutivo: {peliculasDB.length}</p>
      <form
        onSubmit={guardarPelicula}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>ID</label>
        <input
          type="number"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, id: Number(e.target.value) })
          }
        />

        <label>Imagen</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, imagen: e.target.value })
          }
        />

        <label>Nombre Pelicula</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, nombre: e.target.value })
          }
        />

        <label>Descripcion</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, descripcion: e.target.value })
          }
        />

        <label>Categoria</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, categoria: e.target.value })
          }
        />

        <label>url</label>
        <input
          type="text"
          onChange={(e) =>
            setDatosPelicula({ ...datosPelicula, url: e.target.value })
          }
        />

        <button type="submit" style={{ marginTop: "1rem" }}>
          guardar pelicula
        </button>
      </form>
    </div>
  );
};

export default NuevaPelicula;

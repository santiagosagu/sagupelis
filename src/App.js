import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Push from "push.js";
import logo from "./logo3.png";
import { db } from "./firebaseConfig";

import Inicio from "./components/Inicio";
import Peliculas from "./components/Peliculas";
import Series from "./components/Series";
import Carrusel from "./components/Carrusel";
import VerPelicula from "./components/VerPelicula";
import Buscar from "./components/Buscar";
import Styled from "@emotion/styled";
import VerSerie from "./components/VerSerie";
import NuevaSerie from "./components/NuevaSerie";

const Derechos = Styled.h3`
  text-align: center;
  margin: 4rem 0;
`;

const App = () => {
  const estrenos = [
    {
      id: 1,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5Nfl7nbruxF1z01GxExUO0GYujm.jpg",
      nombre: "Focus",
      descripcion:
        "Nicky, un consumado maestro de la estafa conoce a Jess, una atractiva y joven ladrona que está dando sus primeros pasos en el oficio. Tras el intenso encuentro entre ambos, Nicky decide compartir sus trucos con ella.",
      categoria: "Romance, Comedia, Crimen, Drama",
      url: "https://www.antentri.top/watch_video.php?v=elJKa2R4cURsZFAyalZjNTNsSllUMXYxZlNuY2NxOGlSVVVCaThkN0xjVXV3QWVRcURJaFpoZmdINGRSc0VFNg%3D%3D#iss=MTgxLjEzNS41MC4yMDQ=",
    },
    {
      id: 2,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d1QKiYtceF3GDtxvTFXFAqwwah9.jpg",
      nombre: "Interstellar",
      descripcion:
        "Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.",
      categoria: "Aventura, Drama, Ciencia ficción",
      url: "https://jetload.net/p/g6iUNY4ALWM3",
    },
    {
      id: 3,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg",
      nombre: "Mujer Maravilla 1984 (2020)",
      descripcion:
        "En 1984, en plena guerra fría, Diana Prince, conocida como Wonder Woman se enfrenta al empresario Maxwell Lord y a su antigua amiga Barbara Minerva / Cheetah, una villana que posee fuerza y agilidad sobrehumanas.",
      categoria: "Fantasía, Acción, Aventura",
      url: "https://jetload.net/p/xid7usBpXso9",
    },
    {
      id: 4,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bHke4PS5Whg0pz6dDWhzAmwvEr8.jpg",
      nombre: "Cuenta pendiente",
      descripcion:
        "David Cuevas es un hombre de familia que trabaja como recaudador de impuestos de los pandilleros de alto rango de Los Ángeles. Hace colecciones en toda la ciudad con su compañero Creeper asegurándose de que las personas paguen o vean represalias. Una vieja amenaza regresa a Los Ángeles que pone en peligro todo lo que David ama.",
      categoria: "Acción, Crimen, Drama",
      url: "https://jetload.net/p/056MYXOfXD6u",
    },
  ];

  const [notificacion, setNotificacion] = useState([]);

  /* actualizar las notificaciones */
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("notificacion").onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setNotificacion(resultado);
    }
  }, []);

  /* notificaciones */
  useEffect(() => {
    if (notificacion.length > 0) {
      Push.create(`${notificacion[0].titulo}`, {
        body: `${notificacion[0].mensaje}`,
        icon: `${logo}`,
        onClick: function () {
          window.focus();
          this.close();
        },
      });
    }
  }, [notificacion]);

  console.log(notificacion);

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Inicio} />

          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/buscar" component={Buscar} />
          <Route
            exact
            path="/ver-pelicula/:nombre/:id"
            component={VerPelicula}
          />
          <Route exact path="/ver-serie/:nombre/:id" component={VerSerie} />
          <Route exact path="/nueva-serie" component={NuevaSerie} />
        </Switch>

        <Derechos>
          Todos los Derechos Reservados {new Date().getFullYear()}
        </Derechos>
      </Router>
    </>
  );
};

export default App;

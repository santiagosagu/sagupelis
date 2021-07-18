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
import VerPelicula from "./components/VerPelicula";
import Buscar from "./components/Buscar";
import Styled from "@emotion/styled";
import VerSerie from "./components/VerSerie";
import NuevaSerie from "./components/NuevaSerie";
import NuevaPelicula from "./components/NuevaPelicula";

const Derechos = Styled.h3`
  text-align: center;
  margin: 4rem 0;
`;

const App = () => {
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
          <Route exact path="/nueva-pelicula" component={NuevaPelicula} />
        </Switch>

        <Derechos>
          Todos los Derechos Reservados {new Date().getFullYear()}
        </Derechos>
      </Router>
    </>
  );
};

export default App;

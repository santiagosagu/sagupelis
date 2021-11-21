import React, { useContext, useEffect, useState } from "react";
import Styled from "@emotion/styled";
import useInformacionPeliculas from "../hooks/useInformacionPeliculas";
import useInformacionSeries from "../hooks/useInformacionSeries";
import Carrusel from "./Carrusel";
import { db } from "../firebaseConfig";
import AsistenteVirtual, { AsistenteVirtualContext } from "../asistenteVirtual";

const TituloSeccion = Styled.h2`
    margin: 2rem;

    @media (min-width: 768px) {
        margin: 8rem 8rem 1rem 8rem;

    }
`;

const Contenedor = Styled.div`
    margin: 0 2rem;
    display: flex;
    overflow-x: auto;

        @media (min-width: 768px) {
            margin: 0 8rem;

            ::-webkit-scrollbar {
                width: 10px;
                background: #000;
                margin: 0;
            }

            ::-webkit-scrollbar-thumb {
                background:  #53555a;
            }

            ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 0 grey;
                border-radius: 5px;
            }
    }
`;

const Card = Styled.div`
    
    h3{
        font-size: 2rem;
        margin: 0 1rem 0 0;
        @media(min-width: 768px){
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
    }

    @media (min-width: 768px) {
        margin-right: 2.5rem;

        :hover{
            cursor: pointer;
        }
    }
`;

const CardImage = Styled.div`
    width: 15rem;
    height: 20rem;
    background-color:#fff;
    border-radius: 10px;
    margin-bottom: 3rem;
    margin-right: 1.5rem;
    overflow:hidden;

    img {
        width: 100%;
        height: inherit;
        
    }

    img {
        :hover {
            -webkit-transform:scale(1.2);transform:scale(1.2);
            transition: all 1s ease;
        }
    }

    @media (min-width: 768px) {
        width: 22rem;
        height: 30rem;
        background-color:#fff;
       
    }
`;

const Inicio = ({ history }) => {
  const [datosPelicula, guardarDatosPelicula] = useState({});
  const [datosSerie, guardarDatosSerie] = useState({});

  const [verPelicula, guardarVerPelicula] = useState(false);
  const [verSerie, guardarVerSerie] = useState(false);

  const [peliculasDB, setPeliculasDB] = useState([]);
  const [seriesDB, setSeriesDB] = useState([]);
  const [animesDB, setAnimesDB] = useState([]);

  const [peliculasDBCatalogo, setPeliculasDBCatalogo] = useState({});

  const [votosGustaPeliculas, setVotosGustaPeliculas] = useState([]);
  const [votosGustaSeries, setVotosGustaSeries] = useState([]);

  const peliculaSeleccionada = (pelicula) => {
    guardarDatosPelicula(pelicula);
    guardarDatosSerie({});

    guardarVerPelicula(true);
    guardarVerSerie(false);

    history.push(`/ver-pelicula/${pelicula.nombre}/${pelicula.id}`);
  };

  const serieSeleccionada = (serie) => {
    guardarDatosPelicula({});
    guardarDatosSerie(serie);

    guardarVerPelicula(false);
    guardarVerSerie(true);

    history.push(`/ver-serie/${serie.nombre}/${serie.id}`);
  };

  const animeSeleccionado = (serie) => {
    // guardarDatosPelicula({});
    // guardarDatosSerie(serie);

    // guardarVerPelicula(false);
    // guardarVerSerie(true);

    history.push(`/ver-anime/${serie.nombre}/${serie.id}`);
  };

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

  // traer todos las peliculas para catalogo
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("peliculas")
        .orderBy("id", "desc")
        .limit(50)
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
      setPeliculasDBCatalogo(resultado);
    }
  }, []);

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
      setSeriesDB(resultado);
    }
  }, []);

  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("anime").orderBy("id", "desc").onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          ids: doc.id,
          ...doc.data(),
        };
      });
      setAnimesDB(resultado);
    }
  }, []);

  //traer todos los votos me gusta peliculas
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("votosGustaPeliculas")
        .orderBy("votos", "desc")
        .onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setVotosGustaPeliculas(resultado);
    }
  }, []);

  //traer todos los votos me gusta series
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("votosGustaSeries")
        .orderBy("votos", "desc")
        .onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setVotosGustaSeries(resultado);
    }
  }, []);

  // useEffect(() => {
  //   const guardarPeliculas = async () => {
  //     await peliculas.map((item) => {
  //       db.collection("peliculas").add(item);
  //     });
  //   };

  //   guardarPeliculas();
  // }, []);

  // useEffect(() => {
  //   const guardarSerie = async () => {
  //     await series.map((item) => {
  //       db.collection("series").add(item);
  //     });
  //   };

  //   guardarSerie();
  // }, []);

  // useEffect(() => {
  //   if (peliculasDB && peliculaNueva) {
  //     const guardarPeli = () => {
  //       const resultado = peliculasDB.filter(
  //         (item) => item.id === peliculaNueva.id
  //       );

  //       if (resultado.length === 0) {
  //         return db.collection("peliculas").add(peliculaNueva);
  //       }
  //     };

  //     guardarPeli();
  //   }
  // }, [peliculasDB, peliculaNueva]);

  // const MasVotadasFn = () => {
  //   votosGusta.map((peli) => {
  //     const resultado = peliculasDB.filter(
  //       (item) => item.nombre === peli.nombre
  //     );

  //     if (resultado.length > 0) {
  //       return (
  //         <Card onClick={() => peliculaSeleccionada(resultado)}>
  //           <CardImage>
  //             <img src={resultado.imagen} alt={resultado.nombre} />
  //           </CardImage>
  //           <h3>{resultado.nombre}</h3>
  //         </Card>
  //       );
  //     }
  //   });
  // };

  return (
    <>
      {!verPelicula && !verSerie ? (
        <>
          {peliculasDBCatalogo.length !== 0 ? (
            <Carrusel catalogo={peliculasDBCatalogo} />
          ) : (
            <h1>Loading</h1>
          )}

          <section style={{ marginTop: "6.5rem" }}>
            <TituloSeccion>Peliculas</TituloSeccion>

            <Contenedor>
              {peliculasDB.map((pelicula) => (
                <Card onClick={() => peliculaSeleccionada(pelicula)}>
                  <CardImage>
                    <img src={pelicula.imagen} alt={pelicula.nombre} />
                  </CardImage>
                  <h3>{pelicula.nombre}</h3>
                </Card>
              ))}
            </Contenedor>
          </section>

          <section style={{ marginTop: "6.5rem" }}>
            <TituloSeccion>Series</TituloSeccion>

            <Contenedor>
              {seriesDB.map((serie) => (
                <Card onClick={() => serieSeleccionada(serie)}>
                  <CardImage>
                    <img src={serie.imagen} alt={serie.nombre} />
                  </CardImage>
                  <h3>{serie.nombre}</h3>
                </Card>
              ))}
            </Contenedor>
          </section>

          <section style={{ marginTop: "6.5rem" }}>
            <TituloSeccion>Animes</TituloSeccion>

            <Contenedor>
              {animesDB.map((serie) => (
                <Card onClick={() => animeSeleccionado(serie)}>
                  <CardImage>
                    <img src={serie.imagen} alt={serie.nombre} />
                  </CardImage>
                  <h3>{serie.nombre}</h3>
                </Card>
              ))}
            </Contenedor>
          </section>

          <section style={{ marginTop: "6.5rem" }}>
            <TituloSeccion>Peliculas mejor Valoradas</TituloSeccion>

            <Contenedor>
              {votosGustaPeliculas.length > 0 && peliculasDB.length > 0 && (
                <>
                  {votosGustaPeliculas.map((peli) => {
                    const resultado = peliculasDB.filter(
                      (item) => item.nombre === peli.nombre
                    );

                    if (resultado.length > 0)
                      return (
                        <Card
                          onClick={() => peliculaSeleccionada(resultado[0])}
                        >
                          <CardImage>
                            <img
                              src={resultado[0].imagen}
                              alt={resultado[0].nombre}
                            />
                          </CardImage>
                          <h3>{resultado[0].nombre}</h3>
                        </Card>
                      );
                  })}
                </>
              )}
            </Contenedor>
          </section>

          <section style={{ marginTop: "6.5rem" }}>
            <TituloSeccion>Series mejor Valoradas</TituloSeccion>

            <Contenedor>
              {votosGustaSeries.length > 0 && seriesDB.length > 0 && (
                <>
                  {votosGustaSeries.map((peli) => {
                    const resultado = seriesDB.filter(
                      (item) => item.nombre === peli.nombre
                    );

                    if (resultado.length > 0)
                      return (
                        <Card onClick={() => serieSeleccionada(resultado[0])}>
                          <CardImage>
                            <img
                              src={resultado[0].imagen}
                              alt={resultado[0].nombre}
                            />
                          </CardImage>
                          <h3>{resultado[0].nombre}</h3>
                        </Card>
                      );
                  })}
                </>
              )}
            </Contenedor>
          </section>
        </>
      ) : null}
    </>
  );
};

export default Inicio;

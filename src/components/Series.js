import React, { useState, useEffect } from "react";
import Styled from "@emotion/styled";
import useInformacionSeries from "../hooks/useInformacionSeries";
import { db } from "../firebaseConfig";

const Titulo = Styled.h2`
    margin: 2rem;

    @media (min-width: 768px) {
        margin: 2rem 8rem;
    }
`;

const Contenedor = Styled.div`

    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 3rem;
    margin: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 20rem 20rem 20rem;
        margin: 2rem;
        grid-gap: 6rem;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 20rem 20rem 20rem 20rem 20rem;
        margin: 2rem 4rem 2rem 6rem;
        grid-gap: 3rem;
    }
    
    @media (min-width: 1300px) {
        grid-template-columns: 20rem 20rem 20rem 20rem 20rem;
        margin: 2rem 8rem;
        grid-gap: 6rem;
    }

`;

const Card = Styled.div`
    margin-right: 1.5rem;

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
   

    img {
        width: 100%;
        height: auto;
        
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
        margin-bottom: 5rem;
    }
`;

const Series = ({ history }) => {
  const [series, setSeries] = useState([]);
  const [datosPelicula, guardarDatosPelicula] = useState({});
  const [datosSerie, guardarDatosSerie] = useState({});

  const [verPelicula, guardarVerPelicula] = useState(false);
  const [verSerie, guardarVerSerie] = useState(false);

  //   const { series } = useInformacionSeries();

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

  useEffect(() => {
    const verificarDatos = () => {
      if (!datosSerie) {
        guardarDatosSerie(false);
      }
    };

    verificarDatos();
  }, [datosPelicula, datosSerie]);

  const serieSeleccionada = (serie) => {
    guardarDatosPelicula({});
    guardarDatosSerie(serie);

    guardarVerPelicula(false);
    guardarVerSerie(true);

    history.push(`/ver-serie/${serie.nombre}/${serie.id}`);
  };

  return (
    <>
      {!verPelicula && !verSerie && series.length !== 0 ? (
        <>
          <Titulo>Todas las Series</Titulo>

          <Contenedor>
            {series.map((serie, index) => (
              <Card
                onClick={() => serieSeleccionada(serie)}
                className="ver-serie"
              >
                <CardImage>
                  <img src={serie.imagen} alt={serie.nombre} />
                </CardImage>
                <h3>{serie.nombre}</h3>
                <h3>identificador: {index}</h3>
              </Card>
            ))}
          </Contenedor>
        </>
      ) : null}
    </>
  );
};

export default Series;

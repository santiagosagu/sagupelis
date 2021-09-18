/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import Styled from "@emotion/styled";
import imagenUsuario from "../usuario.svg";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { db } from "../firebaseConfig";

const CardFlex = Styled.div`

    background-color: rgba(29, 28, 28, 0.979);
    border-radius: 5px;
    padding: 0.5rem 0.5rem 1rem 0.5rem;

    img{
        width: 100%;
    }

    @media (min-width: 768px) {
        display: flex;
        margin: 1rem 7rem;
        padding: 1rem;
        img{
        width: 620px;
        height: 650px;

    }
    }

    

    
`;
const CardFlexContenido = Styled.div`
    margin: 1rem 3rem;

    h2{
        font-size: 4rem;
        margin: 1rem;
    }

    span{
        font-size: 2.5rem;
    }
`;

const Boton = Styled.h4`
    color: #fff;
    background-color: #53555a;
    padding: 1.2rem;
    font-size: 1.6rem;
    opacity: 3;
    text-align: center;
    border-radius: 5px;

    :hover {
        cursor: pointer;
    }
`;
const ContenidoVotos = Styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    i{
        font-size: 4rem;
        margin: 2rem;
        cursor: pointer;
    }

    p{
        margin: 0;
    }
`;

const Contenedor = Styled.div`
    margin: 0 2rem;
    

    @media (max-width: 768px) {
        ::-webkit-scrollbar{
            width: 0;
        }
    }

        @media (min-width: 768px) {
            margin: 0 8rem;

            ::-webkit-scrollbar {
                width: 5px;
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
const ContenedorTemporadas = Styled.div`
    select {
        padding: 1.2rem;
        font-size: 1.6rem;
        width: 100%;
        text-align: center;
        align-items: center;
        background-color: #53555a;
        color: #fff;
        border: none;
        margin: 1rem 0;
        border-radius: 5px;
        text-transform: capitalize;

        @media (min-width: 768px) {
            width: auto;
            font-size: 1.8rem;
        }
    }


`;

const Temporada = Styled.h3`
    text-transform: capitalize;
    font-size: 3.2rem;
    font-weight: bold;

    :hover{
        color: #fff;
        cursor:pointer;
    }
    

    @media (min-width: 768px) {
        margin: 2rem 0;
    }
`;

const Tarjetas = Styled.div`
    display: flex;
    overflow: auto;
    

    @media (max-width: 768px) {
        ::-webkit-scrollbar{
            width: 0;
        }
    }

        @media (min-width: 768px) {
            margin: 1.5rem 0;

            ::-webkit-scrollbar {
                width: 5px;
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
    margin-right: 1.5rem;
    text-transform: capitalize;

    h3{
        margin-top: 0;
    }

    h4{
        margin-bottom: 0.5rem;
    }

    @media (min-width: 768px) {
        margin-right: 2.5rem;

        :hover{
            color: #fff;
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

    @media (min-width: 768px) {
        width: 22rem;
        height: 30rem;
        background-color:#fff;
        margin-bottom: 5rem;
    }
`;

const ContenedorReproductor = Styled.div`

    padding: 1rem;

    @media (min-width: 1200px) {
        padding: 5rem;
        align-items: center;
        text-align: center;
    }
    

    iframe{
        width: 100%;
        height: 20rem;

        @media (min-width: 768px){
            width: 100%;
            height: 500px;
        }

        @media (min-width: 1200px){
            width: 1200px;
            height: 500px;
        }
    }
`;
const ContenedorComentarios = Styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem auto;

    .comentario{
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        border-bottom: 1px solid #fff; 

        @media (min-width: 768px){
            grid-template-columns: 30% 70%;
        }
    }

    .imagen-nombre{
        display: flex;
        margin: 1rem;
        align-items: center;
        
        img{
            max-width: 80px;
            margin-right: 1rem;
        }
    }

    .contenido-comentario{
        
        align-items: center;

        p{
            font-size: 1.7rem;
        }
        
        @media (min-width: 768px){
            h4{
                margin-bottom: 1rem;
            }

        }
    }
`;

const FormularioComentarios = Styled.div`
    display: flex;
    justify-content: center;
    

    form{
        text-align: center;
        width: 80%;
        

        input{ 
            width: 100%;
            padding: 0.5rem;
            font-size: 2.4rem;
            margin-bottom: 2rem;
            border-radius: 1rem;
            text-align: center;
            font-family: 'Yanone Kaffeesatz', sans-serif;

            @media (min-width: 768px){
                width:50%;
                padding: 1rem;
            }
        }

        textarea{
            border-radius: 1rem;
            font-size: 2.4rem;
            text-align: center;
            font-family: 'Yanone Kaffeesatz', sans-serif;
            margin-bottom: 1rem;

            @media (min-width: 768px){
                width:50%;
                padding: 1rem;
            }
        }

        button{
            padding: 1rem;
            width: 100%;
            font-family: 'Yanone Kaffeesatz', sans-serif;
            font-size: 2.4rem;
            border-radius: 1rem;
            color: #fff;
            background-color: #53555a;
            border: none;

            @media (min-width: 768px){
                width: 30%;
                padding: 1rem;
            }
        }
    }
`;

const VerAnime = ({ match, history }) => {
  const [datosAnime, guardarDatosAnime] = useState([]);
  const [temporadaState, guardarTemporadaState] = useState("temporada 1");
  const [temporadaSeleccionada, guardarTemporadaSeleccionada] = useState([]);
  const [verCapitulo, guardaVerCapitulo] = useState(false);
  const [urlCapitulo, guardarUrlCapitulo] = useState("");
  const [mostrarEpisodios, guardarMostrarEpisodios] = useState(false);
  const [anime, setAnime] = useState([]);

  // traer todas los animes
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("anime").onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          ids: doc.id,
          ...doc.data(),
        };
      });
      setAnime(resultado);
    }
  }, []);

  //   const { series } = useInformacionSeries();

  const [comentarios, setComentarios] = useState({
    nombre: "",
    nombreUsuario: "",
    comentario: "",
    creado: Date.now(),
  });

  const [comentariosDbTodos, setComentariosDbTodos] = useState([]);

  const [comentariosDb, setComentariosDb] = useState([]);

  const [consultarDb, setConsultarDb] = useState(false);

  const [yaVotaste, setYaVotaste] = useState(false);

  const [votosGusta, setVotosGusta] = useState([]);

  const [votosNoGusta, setVotosNoGusta] = useState([]);

  const [votosGustaActual, setVotosGustaActual] = useState([]);

  const [votosNoGustaActual, setVotosNoGustaActual] = useState([]);

  /* verificar me gusta */
  useEffect(() => {
    if (
      votosGusta.length > 0 &&
      datosAnime.length !== 0 &&
      anime.length !== 0
    ) {
      const resultado = votosGusta.filter(
        (dato) => dato.nombre === datosAnime[0].nombre
      );

      setVotosGustaActual(resultado);
    }
  }, [votosGusta, consultarDb]);

  /* verificar no me gusta */
  useEffect(() => {
    if (
      votosNoGusta.length > 0 &&
      datosAnime.length !== 0 &&
      anime.length !== 0
    ) {
      const resultado = votosNoGusta.filter(
        (dato) => dato.nombre === datosAnime[0].nombre
      );

      setVotosNoGustaActual(resultado);
    }
  }, [votosNoGusta, consultarDb]);

  //traer todos los votos me gusta
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("votosGustaAnime").onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setVotosGusta(resultado);
    }
  }, [consultarDb]);

  //traer todos los votos no me gusta
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("votosNoGustaAnime").onSnapshot(manejarSnapshot);
    };

    obtenerProductos();

    function manejarSnapshot(snapshot) {
      const resultado = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setVotosNoGusta(resultado);
    }
  }, [consultarDb]);

  /* verificar comentarios */
  useEffect(() => {
    if (
      comentariosDbTodos.length > 0 &&
      datosAnime.length !== 0 &&
      anime.length !== 0
    ) {
      const resultado = comentariosDbTodos.filter(
        (dato) => dato.nombre === datosAnime[0].nombre
      );

      setComentariosDb(resultado);
    }
  }, [datosAnime, comentariosDbTodos]);

  //traer todos los comentarios
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("comentariosAnime")
        .orderBy("creado", "desc")
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
      setComentariosDbTodos(resultado);
    }
  }, []);

  useEffect(() => {
    if (anime.length > 0 && datosAnime.length !== 0) {
      const resultado = anime.filter(
        (serie) => serie.nombre === datosAnime[0].nombre
      );

      console.log(resultado[0].nombre);

      setComentarios({
        ...comentarios,
        nombre: resultado[0].nombre,
      });
    }
  }, [datosAnime]);

  useEffect(() => {
    const revisarSerie = () => {
      const prueba = anime.filter(
        (serie) => serie.id === Number(match.params.id)
      );

      guardarDatosAnime(prueba);
    };

    revisarSerie();
  }, [anime, match.params]);

  useEffect(() => {
    const funMostrarEpisosdios = () => {
      if (datosAnime.length !== 0 && anime.length !== 0) {
        const resultado = datosAnime[0].temporadas.filter(
          (temporada) => temporada.nombre === temporadaState
        );

        guardarTemporadaSeleccionada(resultado);
      }
    };

    funMostrarEpisosdios();
  }, [temporadaState, datosAnime]);

  /* useEffect */
  useEffect(() => {
    const verificar = () => {
      if (temporadaSeleccionada.length > 0) {
        guardarMostrarEpisodios(true);
      } else {
        guardarMostrarEpisodios(false);
      }
    };

    verificar();
  }, [temporadaSeleccionada]);

  const verEpisodio = (episodio) => {
    guardaVerCapitulo(true);

    guardarUrlCapitulo(episodio);
  };

  const volverSeleccion = () => {
    history.push("/");
  };

  const enviarComentario = async (e) => {
    e.preventDefault();

    if (comentarios.nombreUsuario !== "" && comentarios.comentario !== "") {
      await db.collection("comentariosAnime").add(comentarios);

      setComentarios({
        ...comentarios,
        nombreUsuario: "",
        comentario: "",
        creado: Date.now(),
      });

      setConsultarDb(true);

      setTimeout(() => {
        setConsultarDb(false);
      }, 3000);
    }
  };

  const gusta = async (nombre) => {
    if (votosGustaActual.length > 0 && !yaVotaste) {
      const verificacion = votosGusta.filter((item) => item.nombre === nombre);

      const editarVotos = await db
        .collection("votosGustaAnime")
        .doc(verificacion[0].id);

      setYaVotaste(true);

      return editarVotos.update({
        votos: verificacion[0].votos + 1,
      });
    } else {
      const votosGusta = {
        nombre: nombre,
        votos: 1,
      };

      if (!yaVotaste) {
        await db.collection("votosGustaAnime").add(votosGusta);

        setYaVotaste(true);
      }
    }

    setConsultarDb(true);

    setTimeout(() => {
      setConsultarDb(false);
    }, 3000);
  };

  const noGusta = async (nombre) => {
    if (votosNoGustaActual.length > 0 && !yaVotaste) {
      const verificacion = votosNoGusta.filter(
        (item) => item.nombre === nombre
      );

      const editarVotos = await db
        .collection("votosNoGustaAnime")
        .doc(verificacion[0].id);

      setYaVotaste(true);

      return editarVotos.update({
        votos: verificacion[0].votos + 1,
      });
    } else {
      const votosNoGusta = {
        nombre: nombre,
        votos: 1,
      };

      if (!yaVotaste) {
        await db.collection("votosNoGustaAnime").add(votosNoGusta);

        setYaVotaste(true);
      }
    }

    setConsultarDb(true);

    setTimeout(() => {
      setConsultarDb(false);
    }, 3000);
  };

  return (
    <>
      {datosAnime.length !== 0 && anime.length !== 0 && (
        <>
          <CardFlex>
            <img src={datosAnime[0].imagen} alt="" />
            <CardFlexContenido>
              <h2>{datosAnime[0].nombre}</h2>
              <h4>
                {" "}
                <span>Categoria:</span> {datosAnime[0].categoria}
              </h4>
              <p>{datosAnime[0].descripcion}</p>
              <ContenidoVotos>
                <div>
                  <i
                    className="fas fa-thumbs-up"
                    onClick={() => gusta(datosAnime[0].nombre)}
                  ></i>
                  {votosGustaActual.length > 0 ? (
                    <p>{votosGustaActual[0].votos}</p>
                  ) : (
                    <p>0</p>
                  )}
                </div>
                <div>
                  <i
                    className="fas fa-thumbs-down"
                    onClick={() => noGusta(datosAnime[0].nombre)}
                  ></i>
                  {votosNoGustaActual.length > 0 ? (
                    <p>{votosNoGustaActual[0].votos}</p>
                  ) : (
                    <p>0</p>
                  )}
                </div>
              </ContenidoVotos>
              <Boton onClick={() => volverSeleccion()}>Volver</Boton>
            </CardFlexContenido>
          </CardFlex>

          {verCapitulo ? (
            <ContenedorReproductor>
              <iframe
                src={urlCapitulo}
                allowfullscreen="true"
                allowtransparency
                allow="autoplay"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </ContenedorReproductor>
          ) : null}

          <Contenedor>
            <ContenedorTemporadas>
              <select
                name="temporada"
                onChange={(e) => guardarTemporadaState(e.target.value)}
              >
                {datosAnime[0].temporadas.map((temporada) => {
                  return (
                    <option value={temporada.nombre}>{temporada.nombre}</option>
                  );
                })}
              </select>
            </ContenedorTemporadas>

            {mostrarEpisodios ? (
              <Tarjetas>
                {temporadaSeleccionada[0].episodios.map((episodio) => (
                  <Card onClick={() => verEpisodio(episodio.url)}>
                    <CardImage>
                      <img
                        src={datosAnime[0].imagen}
                        alt={datosAnime[0].nombre}
                      />
                    </CardImage>
                    <h4>{temporadaSeleccionada[0].nombre}</h4>
                    <h3>{episodio.nombre}</h3>
                  </Card>
                ))}
              </Tarjetas>
            ) : null}
          </Contenedor>

          <FormularioComentarios>
            <form onSubmit={enviarComentario}>
              <h2>Escribe Tu Comentario Sobre esta Pelicula</h2>
              <input
                type="text"
                value={comentarios.nombreUsuario}
                name="nombreUsuario"
                placeholder="Escribe tu nombre"
                onChange={(e) =>
                  setComentarios({
                    ...comentarios,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <br />

              <textarea
                name="comentario"
                value={comentarios.comentario}
                cols="30"
                rows="7"
                placeholder="Que piensas de este Anime"
                onChange={(e) =>
                  setComentarios({
                    ...comentarios,
                    [e.target.name]: e.target.value,
                  })
                }
              ></textarea>
              <br />
              <button>Comentar</button>
            </form>
          </FormularioComentarios>

          {comentariosDb.length !== 0 && (
            <ContenedorComentarios>
              {comentariosDb.map((comentario) => (
                <div className="comentario">
                  <div className="imagen-nombre">
                    <img src={imagenUsuario} alt={imagenUsuario} />
                    <h3>{comentario.nombreUsuario}</h3>
                  </div>
                  <div className="contenido-comentario">
                    <h4>{comentario.comentario}</h4>
                    <p>
                      Publicado hace:{" "}
                      {formatDistanceToNow(new Date(comentario.creado), {
                        locale: es,
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </ContenedorComentarios>
          )}
        </>
      )}
    </>
  );
};

export default VerAnime;

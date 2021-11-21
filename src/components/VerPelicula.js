/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import UseInformacionPeliculas from "../hooks/useInformacionPeliculas";
import Styled from "@emotion/styled";
import imagenUsuario from "../usuario.svg";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { db } from "../firebaseConfig";

const CardFlex = Styled.div`

    border-radius: 5px;
    background-color: rgba(29, 28, 28, 0.979);
    padding: 0.5rem 0.5rem 1rem 0.5rem;


    img{
        width: 100%;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 40% 60%;
        margin: 1rem 4rem;
        padding: 1rem;
        img{
        width: 100%;
        height: 600px;

    }
    }

    

    
`;
const CardFlexContenido = Styled.div`
    
    padding: 1rem 3rem;

    @media (min-width: 768px){
        padding: 1rem 6rem;
    }

    h2{
        font-size: 4rem;
        margin: 1rem;
        
    }

    span{
        font-size: 2.5rem;
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
const ContenedorReproductor = Styled.div`

    padding: 1rem;

    @media (min-width: 768px) {
        padding: 5rem;
        align-items: center;
        text-align: center;
    }
    

    iframe{
        width: 100%;
        height: 20rem;

        @media (min-width: 768px){
            width: 700px;
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

const VerPelicula = ({ match, history }) => {
  const [datosPelicula, guardarDatosPelicula] = useState({});
  const [peliculas, setPeliculas] = useState([]);

  // const { peliculas } = UseInformacionPeliculas();

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
      setPeliculas(resultado);
    }
  }, []);

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

  /* verifica los comentarios  */
  useEffect(() => {
    if (
      comentariosDbTodos.length > 0 &&
      peliculas.length > 0 &&
      datosPelicula.length !== 0
    ) {
      const resultado = comentariosDbTodos.filter(
        (dato) => dato.nombre === datosPelicula[0].nombre
      );

      setComentariosDb(resultado);
    }
  }, [datosPelicula, comentariosDbTodos]);

  /* verificar me gusta */
  useEffect(() => {
    if (
      votosGusta.length > 0 &&
      peliculas.length > 0 &&
      datosPelicula.length !== 0
    ) {
      const resultado = votosGusta.filter(
        (dato) => dato.nombre === datosPelicula[0].nombre
      );

      setVotosGustaActual(resultado);
    }
  }, [votosGusta, consultarDb]);

  /* verificar no me gusta */
  useEffect(() => {
    if (
      votosNoGusta.length > 0 &&
      peliculas.length > 0 &&
      datosPelicula.length !== 0
    ) {
      const resultado = votosNoGusta.filter(
        (dato) => dato.nombre === datosPelicula[0].nombre
      );

      setVotosNoGustaActual(resultado);
    }
  }, [votosNoGusta, consultarDb]);

  //traer todos los votos me gusta
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("votosGustaPeliculas").onSnapshot(manejarSnapshot);
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
      db.collection("votosNoGustaPeliculas").onSnapshot(manejarSnapshot);
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

  //traer todos los comentarios
  useEffect(() => {
    const obtenerProductos = () => {
      db.collection("comentariosPeliculas")
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
  }, [consultarDb]);

  useEffect(() => {
    if (peliculas.length > 0 && datosPelicula.length !== 0) {
      const resultado = peliculas.filter(
        (pelicula) => pelicula.nombre === datosPelicula[0].nombre
      );

      setComentarios({
        ...comentarios,
        nombre: resultado[0].nombre,
      });
    }
  }, [datosPelicula]);

  useEffect(() => {
    const revisarPelicula = () => {
      const prueba = peliculas.filter(
        (pelicula) => pelicula.id === Number(match.params.id)
      );

      guardarDatosPelicula(prueba);
    };

    revisarPelicula();
  }, [peliculas, match.params]);

  const volverSeleccion = () => {
    history.push("/");
  };

  const enviarComentario = async (e) => {
    e.preventDefault();

    if (comentarios.nombreUsuario !== "" && comentarios.comentario !== "") {
      await db.collection("comentariosPeliculas").add(comentarios);

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
        .collection("votosGustaPeliculas")
        .doc(verificacion[0].id);

      setYaVotaste(true);

      return editarVotos.update({
        votos: verificacion[0].votos + 1,
      });
    } else {
      const votosgusta = {
        nombre: nombre,
        votos: 1,
      };

      if (!yaVotaste) {
        await db.collection("votosGustaPeliculas").add(votosgusta);

        setYaVotaste(true);
      }
    }

    setYaVotaste(true);

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
        .collection("votosNoGustaPeliculas")
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
        await db.collection("votosNoGustaPeliculas").add(votosNoGusta);

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
      {datosPelicula.length !== 0 && peliculas.length !== 0 && (
        <>
          <CardFlex>
            <div className="contenedorImagen">
              <img src={datosPelicula[0].imagen} alt="" />
            </div>
            <CardFlexContenido>
              <h2>{datosPelicula[0].nombre}</h2>
              <h4>
                {" "}
                <span>Categoria:</span> {datosPelicula[0].categoria}
              </h4>
              <p>{datosPelicula[0].descripcion}</p>
              <ContenidoVotos>
                <div>
                  <i
                    className="fas fa-thumbs-up"
                    onClick={() => gusta(datosPelicula[0].nombre)}
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
                    onClick={() => noGusta(datosPelicula[0].nombre)}
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

          <ContenedorReproductor>
            <iframe
              src={datosPelicula[0].url}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              scrolling="no"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              width="700"
              height="430"
            ></iframe>
          </ContenedorReproductor>

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
                placeholder="Que piensas de esta pelicula"
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

export default VerPelicula;

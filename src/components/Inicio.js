import React, { useEffect, useState } from "react";
import Styled from "@emotion/styled";
import useInformacionPeliculas from "../hooks/useInformacionPeliculas";
import useInformacionSeries from "../hooks/useInformacionSeries";
import Carrusel from "./Carrusel";
import { db } from "../firebaseConfig";

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
        margin: 0 1rem 0 0;
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

const Inicio = ({ history }) => {
  const estrenos = [
    {
      id: 131,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2JG46f4JtCJTUf2z9UbiL9qusOP.jpg",
      nombre: "La calle del terror, Parte 1: 1994 (2021)",
      descripcion:
        "En 1994, un grupo de adolescentes descubre que los terribles sucesos que han asolado su ciudad durante generaciones están conectados y que pueden ser los próximos objetivos.",
      categoria: "Terror, Misterio",
      url: "https://jawcloud.co/embed-zsx6ptkib24j.html",
    },
    {
      id: 130,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v1XE3dtqd9zsEET0EMkxBgXYP6T.jpg",
      nombre: "Viuda negra (2021)",
      descripcion:
        "Natasha Romanoff, alias Viuda Negra, se enfrenta a las partes más oscuras de su historia cuando surge una peligrosa conspiración con vínculos con su pasado. Perseguida por una fuerza que no se detendrá ante nada para acabar con ella, Natasha debe enfrentarse a su historia como espía y a las relaciones rotas que dejó a su paso mucho antes de convertirse en una Vengadora.",
      categoria: "Accion, Aventura, Suspenso",
      url: "https://jawcloud.co/embed-dsh76vrxaco3.html",
    },
    {
      id: 129,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vgpzkh96GnlRxUYZuOpdZT78T2Q.jpg",
      nombre: "Spiral: Saw (2021)",
      descripcion:
        "El detective descarado Ezekiel 'Zeke' Banks, y su compañero novato, se hacen cargo de una espeluznante investigación sobre varios asesinatos espansosos. Zeke, involuntariamente, se vera atrapado en el morboso juego del asesino.",
      categoria: "Suspenso, Misterio, Terror",
      url: "https://jawcloud.co/embed-97eb63pq4ykb.html",
    },
    {
      id: 128,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iNOCVFyrsykGqT48JNotgFF9XCf.jpg",
      nombre: "Un lugar tranquilo 2 (2021)",
      descripcion:
        "Tras los fatales acontecimientos sucedidos en la primera parte, la familia Abbot debe enfrentarse a los peligros del mundo exterior mientras luchan en silencio por sobrevivir. Forzados a aventurarse en lo desconocido, pronto se dan cuenta de que las criaturas que cazan orientadas por el sonido no son la única amenaza que acecha más allá del camino de arena. Secuela de la exitosa producción 'Un lugar tranquilo' (A Quiet Place, 2018).",
      categoria: "Suspenso, Ciencia ficcion, Terror",
      url: "https://jawcloud.co/embed-jf8deqcxiimh.html",
    },
    {
      id: 127,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y1Tk1LUwS3nRlugiXnag6Bu1ToG.jpg",
      nombre: "Día de redención (2021)",
      descripcion:
        "Acaba de regresar a casa, y la esposa del condecorado capitán de infantería de marina estadounidense Brad Paxton (Gary Dourdan), Kate, es secuestrada por un grupo terrorista mientras trabajaba en Marruecos. Se ve obligado a volver a la acción para una operación atrevida y mortal para salvar a la mujer que ama.",
      categoria: "Suspenso Accion",
      url: "https://streamtape.com/e/0Jm6ApYKA6Fm2v",
    },
    {
      id: 126,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/85J1DwZowIlKFOF7jllgCD3iHhx.jpg",
      nombre: "Jefe en pañales 2 (2021)",
      descripcion:
        "Los hermanos Templeton se han convertido en adultos y se han alejado el uno del otro, pero un nuevo jefe bebé con un enfoque de vanguardia está a punto de unirlos nuevamente e inspirar un nuevo negocio familiar.",
      categoria: "Animación, Comedia, Aventura, Familia",
      url: "https://streamtape.com/e/Mo3RYQmp2RH0kK",
    },
    {
      id: 125,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hBcdtoe3Vu8MacviGjkJRd0U1BG.jpg",
      nombre: "La guerra del mañana (2021)",
      descripcion:
        "Un día el mundo se paraliza cuando un grupo de viajeros en el tiempo se transporta desde el año 2051 para entregar un mensaje urgente: La humanidad está perdiendo la guerra mundial contra una especie alienígena letal. La única esperanza de supervivencia es que los soldados y los ciudadanos del presente sean transportados al futuro y se unan a la lucha. Entre los reclutados está el profesor de instituto y padre de familia Dan Forester (Chris Pratt) quien, decidido a salvar el mundo por su hija, se une a una brillante científica (Yvonne Strahovski) y a su padre (J.K. Simmons) en una búsqueda desesperada por reescribir el destino del planeta.",
      categoria: "Accion, Ciencia ficcion",
      url: "https://streamtape.com/e/g1j4AreKK0Iq0WM",
    },
    {
      id: 124,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nMeMxDRxQN9JlvAadduPDdkpxjh.jpg",
      nombre: "En un barrio de Nueva York (2021)",
      descripcion:
        "Adaptación del musical de Broadway de Lin-Manuel Miranda en el que el propietario de una bodega duda sobre si cerrar su negocio y retirarse a la República Dominicana tras heredar la fortuna de su abuela.",
      categoria: "Drama, Musica, Romance",
      url: "https://streamtape.com/e/KklRLrdAwgc01G6",
    },
    {
      id: 123,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ghMQALCyytc6W0wlOlMIKiMSRKV.jpg",
      nombre: "Expediente Warren: Obligado por el demonio (2021)",
      descripcion:
        "Los investigadores paranormales Ed y Lorraine Warren se encuentran con lo que se convertiría en uno de los casos más sensacionales de sus archivos. La lucha por el alma de un niño los lleva más allá de todo lo que habían visto antes, para marcar la primera vez en la historia de los Estados Unidos que un sospechoso de asesinato reclamaría posesión demoníaca como defensa.",
      categoria: "Terror, Misterio, Suspenso",
      url: "https://www.fembed.com/v/42xylsz64lm06w0",
    },
    {
      id: 122,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pr06RihHOGE3waZQx5fs2WYUdwr.jpg",
      nombre: "Luca (2021)",
      descripcion:
        "Ambientada en un precioso pueblo costero de la Riviera italiana, narra la historia sobre el paso a la edad adulta de un chico que vive un verano inolvidable lleno de helados, pasta e infinitos paseos en scooter. Luca comparte estas aventuras con su nuevo mejor amigo, pero toda la diversión se ve amenazada por un secreto muy profundo: él es un monstruo marino de un mundo que yace bajo la superficie del agua.",
      categoria: "Animacion, Comedia, Familia, Fantasia",
      url: "https://www.fembed.com/v/2rplqa207kx-g8n",
    },
    {
      id: 121,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a0R1Ybj3m4M4ZeztizD7F6fmPCE.jpg",
      nombre: "Chaos Walking (2021)",
      descripcion:
        "Todd Hewitt es el último chico de Prentisstown, una pequeña comunidad cuya peculiaridad (aparte del hecho de que no hay mujeres) es que todos escuchan los pensamientos ajenos, lo que es definido como Ruido, un ruido que nunca cesa. Todd está contento porque sólo falta un mes para que sea su decimotercer cumpleaños y por fin, se convierta en hombre. Pero entonces, en uno de sus paseos por el bosque con su fiel perro, encuentra algo inesperado que cambiará su mundo para siempre: el silencio. O como lo define Todd: un agujero en el ruido.",
      categoria: "Ciencia ficcion, Accion, Aventura, Suspense",
      url: "https://streamtape.com/e/4oPo4M0mxWhK31k",
    },
    {
      id: 120,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5LZUYPox2Ui59OzvnR06W2sqVXs.jpg",
      nombre: "Samurái X: El fin (2021)",
      descripcion:
        "Himura Kenshin (Sato Takeru) es un espadachín legendario. Después de la Restauración Meiji, dejó de matar con la espada. Intenta vivir una vida pacífica con Kamiya Kaoru, quien dirige una escuela de esgrima en la aldea. Las cosas cambian. El restaurante Akabeko, que es el lugar favorito para comer de Kenshin, está destruido. Kenshin encuentra una nota escrita “Junchu” allí. 1 2",
      categoria: "Accion, Drama",
      url: "https://streamtape.com/e/y7gxRJvZb8C1Lvp",
    },
    {
      id: 119,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mptEtOkw906BJuD9rRUKG5sr5E9.jpg",
      nombre: "Spirit - Indomable (2021)",
      descripcion:
        "La vida de Lucky Prescott cambia para siempre cuando se muda de su casa en la gran ciudad a un pequeño pueblo fronterizo en el que entabla amistad con un caballo salvaje llamado Spirit.",
      categoria: "Animacion, Aventura, Familia, Western",
      url: "https://streamtape.com/e/3PoBL1Q1RDsdkw3",
    },
    {
      id: 118,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vqfdiWzcMJjcFzm9YJO29TeH39M.jpg",
      nombre: "Ser padre (2021)",
      descripcion:
        "Un viudo convertido en papá lidia con las dudas, los miedos, el dolor y los pañales sucios mientras trata de criar a su hija solo. Inspirada en una historia real.",
      categoria: "Drama, Familia, Comedia",
      url: "https://streamtape.com/e/D90Yv73z4GIk2eV",
    },
    {
      id: 117,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qb28nkLZV0v6yJZZRpJYl0LE35N.jpg",
      nombre: "Cruella (2021)",
      descripcion:
        "Ambientada en el Londres de los años 70, en plena revolución del punk rock, muestra a una joven estafadora llamada Estella, una chica inteligente y creativa, decidida a convertirse en una exitosa diseñadora de moda, que se asocia con un par de ladrones para sobrevivir en las calles de la capital británica. Pero cuando su talento para la moda llama la atención de la legendaria diseñadora, la Baronesa von Hellman, Estella cambia el rumbo de su vida hasta que una serie de acontecimientos y revelaciones que harán que Estella asuma su lado malvado y se convierta en la estridente, moderna y vengativa Cruella de Vil.",
      categoria: "Comedia, Crimen",
      url: "https://streamtape.com/e/2kOV4RGVKVuZba8",
    },
    {
      id: 116,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3A2owG58gqx8fzRWhVOMAO6lbWq.jpg",
      nombre: "Sin remordimientos (2021)",
      descripcion:
        "Un ex Navy SEAL convertido en agente de la CIA busca venganza después de que su novia es asesinada por un narcotraficante de Baltimore.",
      categoria: "Accion, Suspense, Belica",
      url: "https://streamtape.com/e/L3LMDKp2kytvkd",
    },
    {
      id: 115,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4h1Uc13QPjHTTUX0bikICWUxTSV.jpg",
      nombre: "Ejército de los muertos (2021)",
      descripcion:
        "Un grupo de mercenarios decide llevar a cabo el mayor atraco que jamás se haya realizado en la ciudad de Las Vegas justo después de que se produzca una epidemia de muertos vivientes. Para ello tendrán que adentrarse en una zona de cuarentena, con los riesgos que ello conlleva.",
      categoria: "Accion, Crimen, Ciencia ficcion, Terror, Suspense",
      url: "https://streamtape.com/e/Y7ROjepBJQTvxV9",
    },
    {
      id: 114,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/B3Xz48iyIh9ejffVtfCxwzTO7n.jpg",
      nombre: "Agencia Secreta de Control Mágico (2021)",
      descripcion:
        "La Agencia del Control de Magia envía a sus dos mejores agentes, Hansel y Gretel, a luchar contra la bruja de la Casa del Pan de Jengibre.",
      categoria: "Animacion, Comedia, Fantasia",
      url: "https://streamtape.com/e/e2z9DZdqJJSYBjm",
    },
    {
      id: 113,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ieLwzPsmYmmSfy34eIIOfWu6zo.jpg",
      nombre: "Oxígeno (2021)",
      descripcion:
        "Una mujer despierta en una unidad criogénica médica. No recuerda quién es ni cómo ha terminado encerrada en una caja no más grande que un ataúd. Mientras se queda sin oxígeno, debe reconstruir sus recuerdos para escapar de esa pesadilla.",
      categoria: "Ciencia ficcion, Suspenso, Drama",
      url: "https://streamtape.com/e/oGeMJaRrdJFJ2pD",
    },
    {
      id: 112,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/htNLpDWkaCYtkjjiFlfV2VBICUx.jpg",
      nombre: "La mujer en la ventana (2021)",
      descripcion:
        "La Dra. Anna Fox, que sufre de agorafobia, pasa sus días encerrada en su casa de Nueva York, bebiendo vino mientras ve viejas películas y espía a sus vecinos. Un día, mientras mira por la ventana, ve algo que sucede enfrente de su casa, en el hogar de los Russell, una familia a la que todo el barrio toma por ejemplar.",
      categoria: "Misterio, Crimen, Suspenso",
      url: "https://streamtape.com/e/pY2k8aG80lcrvLX",
    },
    {
      id: 111,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tu6kz9Ejm7wljiO58waAuwn1miV.jpg",
      nombre: "Aquellos que desean mi muerte (2021)",
      descripcion:
        "Un adolescente testigo de un asesinato es perseguido por dos asesinos gemelos a través de las tierras salvajes de Montana. Aunque cuenta con un experto de la supervivencia para evitar que los secuaces le den caza, un incendio cercano pronto amenaza con robar la vida de todos los implicados.",
      categoria: "Suspense, Drama, Accion, Misterio",
      url: "https://streamtape.com/e/DZYOZgowAbCAgl",
    },
    {
      id: 110,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2ytgYjDokdpkdRhbgdCVeWC7vJj.jpg",
      nombre: "22 contra la Tierra (2021)",
      descripcion:
        "22 desafía las reglas de El Gran Origen y se niega a ir a la Tierra. Para conseguirlo recluta a una pandilla de cinco almas nuevas en su intento de rebelión. Sin embargo, los resultados de las actividades de su séquito son totalmente inesperados y paradójicamente, la trama subversiva de 22 acabará en una revelación sorprendente sobre el significado de la vida.",
      categoria: "Familia, Animacion, Comedia",
      url: "https://streamtape.com/e/WgOLYpGeYxtb2j8",
    },
    {
      id: 109,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w1eq7A9NArBbwZP9YYVJEZ2pvY.jpg",
      nombre: "Los Mitchell contra las máquinas (2021)",
      descripcion:
        "Katie Mitchell, una adolescente creativa y poco convencional, es aceptada en la escuela de cine de sus sueños, pero sus planes para volar a la universidad se ven truncados cuando su padre Rick, amante de la naturaleza, decide que toda la familia reunida acompañe a Katie en su viaje a la facultad y así hacer algo juntos una última vez. A Katie y a Rick se une el resto de la familia formada por la extremadamente optimista madre de Katie, Linda, su estrafalario hermano pequeño Aaron, y Monchi, el encantador y rechoncho carlino mascota de la familia, para este último viaje familiar.",
      categoria:
        "Animacion, Aventura, Comedia, Familia, Ciencia ficcion, Accion",
      url: "https://streamtape.com/e/49vZBrMRMKtKPd6",
    },
    {
      id: 108,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ncnZa574KFkSRrwPpxbyRoIrteW.jpg",
      nombre: "El protector (2021)",
      descripcion:
        "Un ranchero en la frontera de Arizona se convierte en el improbable defensor de un joven mexicano que huye desesperadamente de los asesinos del cartel que lo han perseguido hasta Estados Unidos.",
      categoria: "Accion, Suspenso, Crime",
      url: "https://streamtape.com/e/qr7QGY4Zp0Tzd96",
    },
    {
      id: 107,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5wEKcx7g3YRocecq18MwZd4dTyd.jpg",
      nombre: "Polizón (2021)",
      descripcion:
        "Durante una misión a Marte, un polizón provoca sin querer daños graves en los sistemas de soporte vital de la nave. Ante la escasez de recursos y un final potencialmente nefasto, la tripulación debe tomar una decisión imposible",
      categoria: "Ciencia ficcion, Drama, Suspenso",
      url: "https://streamtape.com/e/zGAO2QwdA2HYY9D",
    },
    {
      id: 106,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t2GbiMJfO8txoihdJC8RsfK1ds7.jpg",
      nombre: "Mortal Kombat (2021)",
      descripcion:
        "Un boxeador fracasado descubre un secreto familiar que lo lleva a un torneo místico llamado Mortal Kombat donde se encuentra con un grupo de guerreros que luchan hasta la muerte para salvar los reinos del malvado hechicero Shang Tsung.",
      categoria: "Accion, Fantasia, Aventura",
      url: "https://streamtape.com/e/Oqr2dDVa1pHZlY4",
    },
    {
      id: 105,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ddO5a3tMPpQutSDQO1bESgLWadB.jpg",
      nombre: "Nadie (2021)",
      descripcion:
        "Hutch Mansell, un padre de familia que aguanta con resignación y sin defenderse los golpes de la vida. Un don nadie. Una noche, cuando dos ladrones entran en su casa, Hutch decide no actuar y no trata de defenderse ni al él mismo ni a su familia, convencido de que solo así evitará una escalada de violencia. Tras el ataque, su hija adolescente Blake no oculta su decepción, y su esposa Becca se aleja todavía más.",
      categoria: "Accion, Crimen, Drama",
      url: "https://streamtape.com/e/Gvjq7MWPzOtlgk",
    },
    {
      id: 104,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bnuC6hu7AB5dYW26A3o6NNLlIlE.jpg",
      nombre: "Godzilla vs. Kong (2021)",
      descripcion:
        "Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.",
      categoria: "Fantasia, Aventura, Accion",
      url: "https://streamtape.com/e/yrL36wrA3GT1rrq",
    },
    {
      id: 103,
      imagen:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e9r4aLl7OAXdGK49u5oEjlbHKA3.jpg",
      nombre: "Patrulla Trueno (2021)",
      descripcion:
        "En un mundo en el que los supervillanos son algo común, dos amigas de la infancia distanciadas se reúnen después de que una de ellas idee un tratamiento que les da superpoderes para proteger su ciudad.",
      categoria: "Accion, Aventura, Comedia",
      url: "https://streamtape.com/e/2aWx0V0zgQiKVD",
    },
  ];

  const [datosPelicula, guardarDatosPelicula] = useState({});
  const [datosSerie, guardarDatosSerie] = useState({});

  const [verPelicula, guardarVerPelicula] = useState(false);
  const [verSerie, guardarVerSerie] = useState(false);

  const [peliculasDB, setPeliculasDB] = useState([]);
  const [seriesDB, setSeriesDB] = useState([]);

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

          <section>
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

          <section>
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

          <section>
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

          <section>
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

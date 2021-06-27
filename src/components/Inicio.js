import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import useInformacionPeliculas from '../hooks/useInformacionPeliculas'
import useInformacionSeries from '../hooks/useInformacionSeries'
import Carrusel from './Carrusel'
import shortid from 'shortid'
import Push from 'push.js'
import logo from '../logo3.png'

const TituloSeccion = Styled.h2`
    margin: 2rem;

    @media (min-width: 768px) {
        margin: 8rem 8rem 1rem 8rem;

    }
`

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
`


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
`

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
`


const Inicio = ({ history }) => {

    const estrenos = [
        {
            id: 105,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ddO5a3tMPpQutSDQO1bESgLWadB.jpg',
            nombre: "Nadie (2021)",
            descripcion: "Hutch Mansell, un padre de familia que aguanta con resignación y sin defenderse los golpes de la vida. Un don nadie. Una noche, cuando dos ladrones entran en su casa, Hutch decide no actuar y no trata de defenderse ni al él mismo ni a su familia, convencido de que solo así evitará una escalada de violencia. Tras el ataque, su hija adolescente Blake no oculta su decepción, y su esposa Becca se aleja todavía más.",
            categoria: 'Accion, Crimen, Drama',
            url: 'https://streamtape.com/e/Gvjq7MWPzOtlgk'
        },
        {
            id: 104,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bnuC6hu7AB5dYW26A3o6NNLlIlE.jpg',
            nombre: "Godzilla vs. Kong (2021)",
            descripcion: "Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.",
            categoria: 'Fantasia, Aventura, Accion',
            url: 'https://streamtape.com/e/yrL36wrA3GT1rrq'
        },
        {
            id: 103,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e9r4aLl7OAXdGK49u5oEjlbHKA3.jpg',
            nombre: "Patrulla Trueno (2021)",
            descripcion: "En un mundo en el que los supervillanos son algo común, dos amigas de la infancia distanciadas se reúnen después de que una de ellas idee un tratamiento que les da superpoderes para proteger su ciudad.",
            categoria: 'Accion, Aventura, Comedia',
            url: 'https://streamtape.com/e/2aWx0V0zgQiKVD'
        },
        {
            id: 102,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rkuvJnamPl3xW9wKJsIS6qkmOCW.jpg',
            nombre: "La Liga de la Justicia de Zack Snyder (2021)",
            descripcion: "Akeem se entera de que tiene un hijo perdido hace mucho tiempo en los Estados Unidos y debe regresar a Estados Unidos para conocer al improbable heredero al trono de Zamunda. Una secuela de la comedia de 1988 'Coming to America'.",
            categoria: 'Accion, Aventura, Ciencia ficcion, Fantasia',
            url: 'https://streamtape.com/e/JbY8GR33ODUJ0e'
        },
        {
            id: 101,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jJFvY25lPaKlapYOeIH6N5aKcbh.jpg',
            nombre: "Un príncipe en Nueva York 2 (2021)",
            descripcion: "Akeem se entera de que tiene un hijo perdido hace mucho tiempo en los Estados Unidos y debe regresar a Estados Unidos para conocer al improbable heredero al trono de Zamunda. Una secuela de la comedia de 1988 'Coming to America'.",
            categoria: 'Comedia',
            url: 'https://evoload.io/e/bhuBdUURDeZ8Qn'
        },
        {
            id: 100,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yHpNgjEXzZ557YiZ2r3VrKid788.jpg',
            nombre: "Raya y el último dragón (2021)",
            descripcion: "Raya, una niña de gran espíritu aventurero, se embarca en la búsqueda del último dragón del mundo con el objetivo de devolver el equilibrio a Kumandra, un lejano y recóndito territorio habitado por una civilización milenaria.",
            categoria: 'Animacion, Aventura, Fantasia, Familia, Accion',
            url: 'https://evoload.io/e/FowxczM3E6MvhT'
        },
        {
            id: 99,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oz60oMLIyZfkww0y4AiZ5uTNRqL.jpg',
            nombre: "Centinela (2021)",
            descripcion: "Enviada a casa tras una traumática misión de combate, una soldado francesa de élite usa sus habilidades letales para dar caza al hombre que agredió a su hermana.",
            categoria: 'Suspenso, Accion, Drama',
            url: 'https://embed.mystream.to/iov6uhbnx6vc'
        },
        {
            id: 98,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg',
            nombre: "Cherry (2021)",
            descripcion: "Cuenta la historia real de Nico Walker, que volvió de la guerra de Iraq con un trastorno de estrés postraumático no diagnosticado que le llevó primero a hacerse adicto al opio y posteriormente a robar bancos.",
            categoria: 'Crimen, Drama',
            url: 'https://evoload.io/e/Hs4nkx8Oua2vXt'
        },
        {
            id: 97,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aLBo1Ca9PggcWY98ItW5ZkdxTuA.jpg',
            nombre: "Moxie (2021)",
            descripcion: "Harta del ambiente sexista y tóxico de su instituto, una tímida joven de 16 años encuentra la inspiración en el pasado rebelde de su madre y publica de forma anónima una revista que provoca una enfurecida revolución por toda la escuela.",
            categoria: 'Comedia, Drama, Musica',
            url: 'https://evoload.io/e/GEA1cGq70ypMYA'
        },
        {
            id: 96,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b2shaNA4F8zNIwoRYr33lPTiFfl.jpg',
            nombre: "Fear of Rain (2021)",
            descripcion: "Una adolescente que vive con esquizofrenia comienza a sospechar que su vecino ha secuestrado a un niño. Sus padres tratan desesperadamente de ayudarla a vivir una vida normal, sin exponer sus propios secretos trágicos, y la única persona que la cree es Caleb, un niño del que ni siquiera está segura de que exista.",
            categoria: 'Suspense, Terror, Drama',
            url: 'https://evoload.io/e/TyFQVvzfZhmihm'
        },
        {
            id: 95,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Af2I5eT1HnLLkXQilwCmE3kkV8z.jpg',
            nombre: "The Glorias (2020)",
            descripcion: "Gloria Steinem fue una de las figuras iconicas del movimiento revolucionario por la igualdad, destacando desde su primera experiencia de activismo social entre las mujeres de la India, pasando por su trabajo como periodista en la década de los 60, hasta la histórica Conferencia Nacional de la Mujer de 1977. Así, formó un camino que le permitió escuchar y conectarse profundamente con la gente, entendiendo su contexto y permitiéndole formar parte de un movimiento que cambiaría el mundo.",
            categoria: 'Drama',
            url: 'https://evoload.io/e/JbWZVanVYCDOy8'
        },
        {
            id: 94,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sSxy2Ej25XoekfO8bl8nNyohaI7.jpg',
            nombre: "The Right One (2021)",
            descripcion: "Sara, una novelista que lucha contra el bloqueo del escritor, necesita inspiración, y la encuentra cuando por casualidad conoce a Godfrey, un bicho raro que cambia constantemente de personalidad y alter egos para hacer frente a su pasado y evitar la realidad. Justo cuando Godfrey comienza a abrirse con Sara, descubre que ella lo ha estado usando como inspiración para su próxima novela, y desaparece de su vida. ¿Sara acaba de perder al hombre de sus sueños o podrá encontrarlo y arreglar las cosas?",
            categoria: 'Comedia, Romance',
            url: 'https://evoload.io/e/PNBfSSqe5zoiQo'
        },
        {
            id: 93,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lKcVQet0SGL7zhsce6bdl3NwxRD.jpg',
            nombre: "Amor al cuadrado (2021)",
            descripcion: "Un periodista famoso y mujeriego duda de las decisiones que ha tomado en la vida cuando se enamora de una modelo misteriosa que lleva una doble vida.",
            categoria: 'Comedia, Romance',
            url: 'https://evoload.io/e/xbfMBcEs4SOYWd'
        },
        {
            id: 92,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6FXBb3yolXRgUiUmnMe5rOL86GV.jpg',
            nombre: "Descuida, yo te cuido (2021)",
            descripcion: "Marla Grayson (Rosamund Pike) no tiene escrúpulos a la hora de beneficiarse de los demás. Después de haberse aprovechado de docenas de jubilados como tutora legal, ella y su compañera Fran (Eiza González) ven a Jennifer Peterson (Dianne Wiest) como la nueva víctima: una gallina de los huevos de oro a la que pueden desplumar fácilmente. Pero mientras intentan llevar a cabo su plan, Marla y Fran descubren que la señora Peterson no es lo que creían, y que sus actos han entorpecido la labor de un importante criminal (Peter Dinklage)",
            categoria: 'Comedia, Crimen, Suspense',
            url: 'https://evoload.io/e/z8eNiYrkvpZgJb'
        },
        {
            id: 91,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5uMWKEmegf5aTJnp1u98JF4QerP.jpg',
            nombre: "Los Croods: Una nueva era (2020)",
            descripcion: "Después de salir de su cueva, los Croods se encuentran con su mayor amenaza desde que se fueron: otra familia llamada Betterman, quienes afirman y demuestran ser mejores y evolucionados. Grug empieza a sospechar de los padres de Betterman, Phil y Hope, ya que planean en secreto separar a su hija Eep con su amado novio Guy para asegurarse de que su hija Dawn tenga un compañero amoroso e inteligente que la proteja",
            categoria: 'Familia, Fantasia, Animacion, Comedia',
            url: 'https://evoload.io/e/O5bYUzKbY6YjgZ'
        },
        {
            id: 90,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jOMK2YFKtzXGTm0tedsurDj5pFh.jpg',
            nombre: "¡Scooby-Doo! La Espada y Scooby (2021)",
            descripcion: "Una hechicera malvada transporta a la pandilla a la era de los caballeros caballerosos, los magos lanzadores de hechizos y los dragones que escupen fuego.",
            categoria: 'Animación, Comedia, Familia, Misterio, Aventura',
            url: 'https://evoload.io/e/0yJpvpROdgsUgA'
        },
        {
            id: 89,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/orzPlWUbf0S5HeWmpP3TeHvduwn.jpg',
            nombre: "Tom y Jerry (2021)",
            descripcion: "Tom el gato y Jerry el ratón son expulsados de su casa y se trasladan a un elegante hotel de Nueva York, donde una empleada descuidada llamada Kayla perderá su trabajo si no puede desalojar a Jerry antes de una boda de clase alta en el hotel. ¿Su solución? Contratar a Tom para deshacerse del molesto ratón.",
            categoria: 'Comedia, Familia, Aventura',
            url: 'https://streamtape.com/e/OWeLBk7xb2sZQeo'
        },
    ]


    const [datosPelicula, guardarDatosPelicula] = useState({})
    const [datosSerie, guardarDatosSerie] = useState({})

    const [verPelicula, guardarVerPelicula] = useState(false)
    const [verSerie, guardarVerSerie] = useState(false)

    const [todasPeliculas, guardarTodasPeliculas] = useState()

    const { peliculas } = useInformacionPeliculas()
    const { series } = useInformacionSeries()

    const peliculaSeleccionada = pelicula => {

        guardarDatosPelicula(pelicula)
        guardarDatosSerie({})

        guardarVerPelicula(true)
        guardarVerSerie(false)


        history.push(`/ver-pelicula/${pelicula.nombre}/${pelicula.id}`)

    }

    const serieSeleccionada = serie => {

        guardarDatosPelicula({})
        guardarDatosSerie(serie)

        guardarVerPelicula(false)
        guardarVerSerie(true)

        history.push(`/ver-serie/${serie.nombre}/${serie.id}`)

    }

    /* const queMostrar = () => {
        if (verPelicula || datosPelicula.length > 0) {
            return (
                <VerPelicula
                    datosPelicula={datosPelicula}
                    guardarDatosPelicula={guardarDatosPelicula}
                    guardarVerPelicula={guardarVerPelicula}
                />
            )
        }

        if (verSerie || datosSerie.length > 0) {
            return (
                <VerSerie
                    datosSerie={datosSerie}
                    guardarDatosSerie={guardarDatosSerie}
                    guardarVerSerie={guardarVerSerie}
                />
            )
        }
    } */

    return (
        <>
            {!verPelicula && !verSerie
                ? <>

                    <Carrusel
                        catalogo={estrenos}
                    />

                    <section>
                        <TituloSeccion>Peliculas</TituloSeccion>

                        <Contenedor>

                            {
                                peliculas.map(pelicula =>
                                    <Card onClick={() => peliculaSeleccionada(pelicula)}>
                                        <CardImage >
                                            <img src={pelicula.imagen} alt={pelicula.nombre} />
                                        </CardImage>
                                        <h3>{pelicula.nombre}</h3>

                                    </Card>
                                )
                            }

                        </Contenedor>
                    </section>

                    <section>
                        <TituloSeccion>Series</TituloSeccion>

                        <Contenedor>
                            {
                                series.map(serie =>
                                    <Card onClick={() => serieSeleccionada(serie)}>
                                        <CardImage >
                                            <img src={serie.imagen} alt={serie.nombre} />
                                        </CardImage>
                                        <h3>{serie.nombre}</h3>

                                    </Card>
                                )
                            }
                        </Contenedor>
                    </section>
                </>

                : null
            }
        </>
    );
}

export default Inicio;
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
            id: 116,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3A2owG58gqx8fzRWhVOMAO6lbWq.jpg',
            nombre: "Sin remordimientos (2021)",
            descripcion: "Un ex Navy SEAL convertido en agente de la CIA busca venganza después de que su novia es asesinada por un narcotraficante de Baltimore.",
            categoria: 'Accion, Suspense, Belica',
            url: 'https://streamtape.com/e/L3LMDKp2kytvkd'
        },
        {
            id: 115,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4h1Uc13QPjHTTUX0bikICWUxTSV.jpg',
            nombre: "Ejército de los muertos (2021)",
            descripcion: "Un grupo de mercenarios decide llevar a cabo el mayor atraco que jamás se haya realizado en la ciudad de Las Vegas justo después de que se produzca una epidemia de muertos vivientes. Para ello tendrán que adentrarse en una zona de cuarentena, con los riesgos que ello conlleva.",
            categoria: 'Accion, Crimen, Ciencia ficcion, Terror, Suspense',
            url: 'https://streamtape.com/e/Y7ROjepBJQTvxV9'
        },
        {
            id: 114,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/B3Xz48iyIh9ejffVtfCxwzTO7n.jpg',
            nombre: "Agencia Secreta de Control Mágico (2021)",
            descripcion: "La Agencia del Control de Magia envía a sus dos mejores agentes, Hansel y Gretel, a luchar contra la bruja de la Casa del Pan de Jengibre.",
            categoria: 'Animacion, Comedia, Fantasia',
            url: 'https://streamtape.com/e/e2z9DZdqJJSYBjm'
        },
        {
            id: 113,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ieLwzPsmYmmSfy34eIIOfWu6zo.jpg',
            nombre: "Oxígeno (2021)",
            descripcion: "Una mujer despierta en una unidad criogénica médica. No recuerda quién es ni cómo ha terminado encerrada en una caja no más grande que un ataúd. Mientras se queda sin oxígeno, debe reconstruir sus recuerdos para escapar de esa pesadilla.",
            categoria: 'Ciencia ficcion, Suspenso, Drama',
            url: 'https://streamtape.com/e/oGeMJaRrdJFJ2pD'
        },
        {
            id: 112,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/htNLpDWkaCYtkjjiFlfV2VBICUx.jpg',
            nombre: "La mujer en la ventana (2021)",
            descripcion: "La Dra. Anna Fox, que sufre de agorafobia, pasa sus días encerrada en su casa de Nueva York, bebiendo vino mientras ve viejas películas y espía a sus vecinos. Un día, mientras mira por la ventana, ve algo que sucede enfrente de su casa, en el hogar de los Russell, una familia a la que todo el barrio toma por ejemplar.",
            categoria: 'Misterio, Crimen, Suspenso',
            url: 'https://streamtape.com/e/pY2k8aG80lcrvLX'
        },
        {
            id: 111,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tu6kz9Ejm7wljiO58waAuwn1miV.jpg',
            nombre: "Aquellos que desean mi muerte (2021)",
            descripcion: "Un adolescente testigo de un asesinato es perseguido por dos asesinos gemelos a través de las tierras salvajes de Montana. Aunque cuenta con un experto de la supervivencia para evitar que los secuaces le den caza, un incendio cercano pronto amenaza con robar la vida de todos los implicados.",
            categoria: 'Suspense, Drama, Accion, Misterio',
            url: 'https://streamtape.com/e/DZYOZgowAbCAgl'
        },
        {
            id: 110,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2ytgYjDokdpkdRhbgdCVeWC7vJj.jpg',
            nombre: "22 contra la Tierra (2021)",
            descripcion: "22 desafía las reglas de El Gran Origen y se niega a ir a la Tierra. Para conseguirlo recluta a una pandilla de cinco almas nuevas en su intento de rebelión. Sin embargo, los resultados de las actividades de su séquito son totalmente inesperados y paradójicamente, la trama subversiva de 22 acabará en una revelación sorprendente sobre el significado de la vida.",
            categoria: 'Familia, Animacion, Comedia',
            url: 'https://streamtape.com/e/WgOLYpGeYxtb2j8'
        },
        {
            id: 109,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w1eq7A9NArBbwZP9YYVJEZ2pvY.jpg',
            nombre: "Los Mitchell contra las máquinas (2021)",
            descripcion: "Katie Mitchell, una adolescente creativa y poco convencional, es aceptada en la escuela de cine de sus sueños, pero sus planes para volar a la universidad se ven truncados cuando su padre Rick, amante de la naturaleza, decide que toda la familia reunida acompañe a Katie en su viaje a la facultad y así hacer algo juntos una última vez. A Katie y a Rick se une el resto de la familia formada por la extremadamente optimista madre de Katie, Linda, su estrafalario hermano pequeño Aaron, y Monchi, el encantador y rechoncho carlino mascota de la familia, para este último viaje familiar.",
            categoria: 'Animacion, Aventura, Comedia, Familia, Ciencia ficcion, Accion',
            url: 'https://streamtape.com/e/49vZBrMRMKtKPd6'
        },
        {
            id: 108,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ncnZa574KFkSRrwPpxbyRoIrteW.jpg',
            nombre: "El protector (2021)",
            descripcion: "Un ranchero en la frontera de Arizona se convierte en el improbable defensor de un joven mexicano que huye desesperadamente de los asesinos del cartel que lo han perseguido hasta Estados Unidos.",
            categoria: 'Accion, Suspenso, Crime',
            url: 'https://streamtape.com/e/qr7QGY4Zp0Tzd96'
        },
        {
            id: 107,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5wEKcx7g3YRocecq18MwZd4dTyd.jpg',
            nombre: "Polizón (2021)",
            descripcion: "Durante una misión a Marte, un polizón provoca sin querer daños graves en los sistemas de soporte vital de la nave. Ante la escasez de recursos y un final potencialmente nefasto, la tripulación debe tomar una decisión imposible",
            categoria: 'Ciencia ficcion, Drama, Suspenso',
            url: 'https://streamtape.com/e/zGAO2QwdA2HYY9D'
        },
        {
            id: 106,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t2GbiMJfO8txoihdJC8RsfK1ds7.jpg',
            nombre: "Mortal Kombat (2021)",
            descripcion: "Un boxeador fracasado descubre un secreto familiar que lo lleva a un torneo místico llamado Mortal Kombat donde se encuentra con un grupo de guerreros que luchan hasta la muerte para salvar los reinos del malvado hechicero Shang Tsung.",
            categoria: 'Accion, Fantasia, Aventura',
            url: 'https://streamtape.com/e/Oqr2dDVa1pHZlY4'
        },
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
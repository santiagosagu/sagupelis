import React, { useState, useEffect } from 'react';
import Styled from '@emotion/styled'
import useInformacionSeries from '../hooks/useInformacionSeries'
import useInformacionPeliculas from '../hooks/useInformacionPeliculas'
import VerPelicula from './VerPelicula'
import VerSerie from './VerSerie'

const Contenedor = Styled.div`
    margin: 4rem 1rem;
    align-items: center;
    text-align: center;

    @media ( min-width: 768px ) {
        margin: 4rem;
    }
`

const Campo = Styled.input`
    background-color:  rgb(19, 18, 18);
    border: none;
    border-bottom: 1px solid #fff;
    width: 100%;
    font-size: 1.6rem;
    color: #fff;
    text-align: center;

    @media ( min-width: 768px ) {
        width: 60rem;
        font-size: 2rem;
    }
`

const Boton = Styled.input`
    color: #fff;
    background-color: #53555a;
    padding: 1rem;
    opacity: 3;
    text-align: center;
    border-radius: 1rem;
    border: none;
    margin: 1rem 0;
    font-size: 2rem;
    width: 100%;

    :hover {
        cursor: pointer;
    }

    @media ( min-width: 768px ) {
        width: 20rem;
        margin: 2rem;
        padding: 1.5rem 2rem;

        :hover {
            background-color: #53556a;
        }
    }
`

const Resultado = Styled.div`

    margin-bottom: 6rem;

    h2{
        text-align: center;
        margin: 2rem 4rem;
        text-transform: capitalize;
    }
`

const ContenedorResultado = Styled.div`

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
    


`

const Card = Styled.div`
    margin-right: 1.5rem;

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
`

const Buscar = ({ history }) => {

    const [datosPelicula, guardarDatosPelicula] = useState({})
    const [datosSerie, guardarDatosSerie] = useState({})

    const [verPelicula, guardarVerPelicula] = useState(false)
    const [verSerie, guardarVerSerie] = useState(false)

    const [busquedatexto, guardarBusquedaTexto] = useState({
        busqueda: ''
    })

    const [resultadoBusquedaPelicula, guardarResultadoBusquedaPelicula] = useState([])
    const [resultadoBusquedaSerie, guardarResultadoBusquedaSerie] = useState([])

    const { peliculas } = useInformacionPeliculas()
    const { series } = useInformacionSeries()

    useEffect(() => {
        const buscador = () => {
            const busqueda = busquedatexto.busqueda.toLocaleLowerCase()

            if (busquedatexto.busqueda.length > 0) {
                const filtro = peliculas.filter(pelicula => {
                    return (
                        pelicula.nombre.toLowerCase().includes(busqueda) ||
                        /* pelicula.descripcion.toLowerCase().includes(busqueda) || */
                        pelicula.categoria.toLowerCase().includes(busqueda)
                    )
                })

                guardarResultadoBusquedaPelicula(filtro)
            } else {
                guardarResultadoBusquedaPelicula({})
            }

            if (busquedatexto.busqueda.length > 0) {
                const filtro = series.filter(serie => {
                    return (
                        serie.nombre.toLowerCase().includes(busqueda) ||
                        /* serie.descripcion.toLowerCase().includes(busqueda) || */
                        serie.categoria.toLowerCase().includes(busqueda)
                    )
                })

                guardarResultadoBusquedaSerie(filtro)
            } else {
                guardarResultadoBusquedaSerie({})
            }



        }

        buscador()
    }, [busquedatexto])

    const realizarBusqueda = (e) => {
        e.preventDefault()
    }

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

    const queMostrar = () => {
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
    }

    return (
        <>
            { !verPelicula && !verSerie
                ? <div>
                    <Contenedor>
                        <form
                            onSubmit={realizarBusqueda}
                        >
                            <Campo
                                type="text"
                                name="busqueda"
                                placeholder="Escribe el Nombre, Categoria o Año que buscas"
                                onChange={e => guardarBusquedaTexto({ [e.target.name]: e.target.value })}
                            />
                            <br />
                            {/* <Boton type="submit" value="Buscar" /> */}
                        </form>
                    </Contenedor>

                    {/* contenedor resultado peliculas */}

                    {resultadoBusquedaPelicula.length > 0

                        ? <Resultado>
                            <h2>Resultado Peliculas</h2>
                            <ContenedorResultado>

                                {
                                    resultadoBusquedaPelicula.map(pelicula =>
                                        <Card onClick={() => peliculaSeleccionada(pelicula)}>
                                            <CardImage >
                                                <img src={pelicula.imagen} alt={pelicula.nombre} />
                                            </CardImage>
                                            <h3>{pelicula.nombre}</h3>

                                        </Card>
                                    )
                                }
                            </ContenedorResultado>
                        </Resultado>
                        : null

                    }


                    {/* contenedor resultado series */}

                    {resultadoBusquedaSerie.length > 0

                        ? <Resultado>
                            <h2>Resultado Series</h2>
                            <ContenedorResultado>
                                {
                                    resultadoBusquedaSerie.map(serie =>
                                        <Card onClick={() => serieSeleccionada(serie)}>
                                            <CardImage >
                                                <img src={serie.imagen} alt={serie.nombre} />
                                            </CardImage>
                                            <h3>{serie.nombre}</h3>

                                        </Card>
                                    )
                                }
                            </ContenedorResultado>

                        </Resultado>
                        : null

                    }
                </div>

                    : queMostrar()
            }






        </>
    );
}

export default Buscar;


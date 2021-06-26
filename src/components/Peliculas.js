import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import useInformacionPeliculas from '../hooks/useInformacionPeliculas'



const Titulo = Styled.h2`
    margin: 2rem;

    @media (min-width: 768px) {
        margin: 2rem 8rem;
    }
`

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

const Peliculas = ({ history }) => {

    const [datosPelicula, guardarDatosPelicula] = useState({})
    const [datosSerie, guardarDatosSerie] = useState({})

    const [verPelicula, guardarVerPelicula] = useState(false)
    const [verSerie, guardarVerSerie] = useState(false)

    const { peliculas } = useInformacionPeliculas()

    useEffect(() => {
        const verificarDatos = () => {

            if (!datosPelicula) {

                guardarVerPelicula(false)
            }
        }

        verificarDatos()

    }, [datosPelicula])


    const peliculaSeleccionada = pelicula => {

        guardarDatosPelicula(pelicula)
        guardarDatosSerie({})

        guardarVerPelicula(true)
        guardarVerSerie(false)


        history.push(`/ver-pelicula/${pelicula.nombre}/${pelicula.id}`)

    }

    useEffect(() => {
        const buscador = () => {
            const busqueda = 'accion'

            const filtro = peliculas.filter(pelicula => {
                return (
                    pelicula.nombre.toLowerCase().includes(busqueda) ||
                    pelicula.descripcion.toLowerCase().includes(busqueda) ||
                    pelicula.categoria.toLowerCase().includes(busqueda)
                )
            })

        }

        buscador()
    }, [])

    return (
        <>
            { !verPelicula && !verSerie

                ?
                <>
                    <Titulo>Todas las Peliculas</Titulo>

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
                </>

                : null

            }

        </>

    );
}

export default Peliculas;
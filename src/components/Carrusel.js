import React from 'react'
import Slider from 'infinite-react-carousel'
import Styled from '@emotion/styled'

const Contenedor = Styled.div`

    width: 100%;


    @media(min-width: 768px){
        max-width: 1200px;
        align-items: center;
        margin: 0 auto;
        text-align: center;
    }

    h2 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 5rem;
    }
`


const Img = Styled.img`



@media (max-width: 700px) {
    width: 100%;
    margin: 0;
    height: 500px;
}

@media(min-width: 768px){
        margin: 2rem 2rem 0.5rem 2rem;
        width: 50%;
        height: 600px;
    }

    
`

const Carrusel = ({ catalogo }) => {

    console.log(catalogo)

    return (
        <>


            <Contenedor>
                <Slider autoplay='true' autoplaySpeed='4000'> 

                    {
                        catalogo.map(pelicula =>

                            <>
                                

                                <div>
                                    <Img src={pelicula.imagen} alt={pelicula.nombre} />
                                    <h2>{pelicula.nombre}</h2>
                                </div>

                                

                            </>
                        )
                    }

                </Slider>
            </Contenedor>



        </>
    );
}

export default Carrusel;
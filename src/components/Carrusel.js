import React from "react";
import Styled from "@emotion/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Contenedor = Styled.div`

    width: 100%;


    @media(min-width: 768px){
      display: flex;
      justify-content: center;

      h2 {
          font-size: 3rem;
          text-align: center;
          margin: 0;
      }
    }
`;
const ContenedorCarrusel = Styled.div`

  @media(min-width: 768px){
    width: 600px;

  }
`;

const Img = Styled.img`

@media (max-width: 700px) {
    width: 100%;
    margin: 0;
    height: 500px;
}

@media(min-width: 768px){
        width: 100%;
        height: 750px;
        border-radius: 1rem;
    }

    
`;

const Carrusel = ({ catalogo }) => {
  console.log(catalogo);

  return (
    <>
      <Contenedor>
        <ContenedorCarrusel>
          {catalogo.length > 0 && (
            <Carousel
              autoPlay
              infiniteLoop
              centerSlidePercentage={10}
              width="100%"
              thumbWidth={30}
              dynamicHeight
              emulateTouch
              showThumbs={false}
              renderIndicator={false}
              showStatus={false}
            >
              {catalogo.map((pelicula) => (
                <div>
                  <Img src={pelicula.imagen} alt={pelicula.nombre} />
                </div>
              ))}
            </Carousel>
          )}
        </ContenedorCarrusel>
      </Contenedor>
    </>
  );
};

export default Carrusel;

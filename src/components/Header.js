import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import Logo from '../logo3.png'



const Contenedor = styled.div`

    margin: 0 auto;
    

    @media (min-width: 768px){
        margin: 0 8rem;
        display: flex;
    }

    

    a{
        text-decoration:none;
        color: #cfcece;
    }

    a:hover{
        color: #fff;
    }

    i{
        font-size: 3rem;
    }
`

const Imagen = styled.img`
    margin: 1.5rem 0;
    width: 18rem;
`

const Movil = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;

    @media (min-width: 768px) {
        i{
            display: none;
        }
    }
`

const ContenedorEnlaces = styled.div`
    text-align: center;
`

const Enlaces = styled.ul`

    display: none;

    @media (min-width: 768px){
        display: flex;
        justify-content: space-around;
        margin-left: 5rem;
    } 

    

    li{
        margin: 1rem 2rem;
        list-style: none;
        font-size: 2.5rem;
        
        

        
    }
`

const EnlacesMovil = styled.ul`

    padding-inline-start: 0;

    @media (min-width: 768px){
        display: flex;
        justify-content: space-around;
        margin-left: 5rem;
        
    } 


    li{
        margin: 1rem 2rem;
        list-style: none;
        font-size: 2.5rem;
        
    }
`

const Header = () => {

    const [navegacion, guardarNavegacion] = useState(false)

    const desplegar = () => {

        if (navegacion) {
            guardarNavegacion(false)
        } else {
            guardarNavegacion(true)
        }

    }

    return (
        <>

            <Contenedor>

                <Movil>
                    
                    
                    <Link to='/'><Imagen src={Logo} alt="logo" /></Link>


                    <i className="fas fa-angle-double-down" onClick={() => desplegar() }></i>

                    {/* Tener encuenta hacer la lagica del menu */}

                    {/* <i class="fas fa-angle-double-up"></i> */}
                </Movil>

                

                <ContenedorEnlaces>
                    <Enlaces>
                        <li><Link to='/peliculas'>Peliculas</Link></li>
                        <li><Link to='/series'>Series</Link></li>
                        <li><Link to='/buscar'>Buscar</Link></li>
                        <li><a href="https://chat.whatsapp.com/BqW1G72ZQVR1rgL2yXFx12" target="_blank" rel="noopener noreferrer">Grupo de Pedidos</a></li>

                    </Enlaces>

                    { navegacion 
                        ? <EnlacesMovil>
                            <li><Link to='/peliculas'>Peliculas</Link></li>
                            <li><Link to='/series'>Series</Link></li>
                            <li><Link to='/buscar'>Buscar</Link></li>
                            <li><a href="https://chat.whatsapp.com/BqW1G72ZQVR1rgL2yXFx12" target="_blank" rel="noopener noreferrer">Grupo de Pedidos</a></li>
                        </EnlacesMovil>
                        
                        : null


                    }
                </ContenedorEnlaces>
            </Contenedor>
        </>

    );
}

export default Header;
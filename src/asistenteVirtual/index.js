import React, { createContext } from "react";
import { animateScroll as scroll } from "react-scroll";

import Artyom from "artyom.js";

export const AsistenteVirtualContext = createContext();

const AsistenteVirtual = (props) => {
  let Jarvis = "";

  window.onload = function () {
    Jarvis = new Artyom();

    if (Jarvis.recognizingSupported()) {
      // Artyom can process commands
      console.log("soy soportado");

      Jarvis.addCommands([
        //* interaccion
        {
          indexes: ["Hola"],
          action: function (i) {
            Jarvis.sayRandom([
              "hola señor",
              "que gusto verte de nuevo",
              "hola, tenemos un grandioso contenido para ti",
            ]);
          },
        },
        {
          indexes: ["quién eres"],
          action: function (i) {
            Jarvis.say(
              "Soy tu asistente virtual creada para ayudarte a navegar por sagupelis"
            );
          },
        },
        {
          indexes: ["Léeme la descripción de la película"],
          action: function (i) {
            Jarvis.say(
              document.getElementById("descripcion-pelicula").textContent
            );
          },
        },
        {
          indexes: ["Léeme la descripción de la serie"],
          action: function (i) {
            Jarvis.say(
              document.getElementById("descripcion-serie").textContent
            );
          },
        },
        {
          indexes: ["Léeme la descripción del anime"],
          action: function (i) {
            Jarvis.say(
              document.getElementById("descripcion-anime").textContent
            );
          },
        },
        //* Rutas
        {
          indexes: ["Llévame al inicio"],
          action: function (i) {
            Jarvis.say("navegando al inicio");
            document.getElementById("link-escritorio-inicio").click();
          },
        },

        {
          indexes: ["Llévame a películas"],
          action: function (i) {
            Jarvis.say("este es todo nuestro catalogo de peliculas");
            document.getElementById("link-escritorio-peliculas").click();
          },
        },
        {
          indexes: ["Llévame a series"],
          action: function (i) {
            Jarvis.say("este es todo nuestro catalogo de series");
            document.getElementById("link-escritorio-series").click();
          },
        },
        {
          indexes: ["Llévame a animes"],
          action: function (i) {
            Jarvis.say("este es todo nuestro catalogo de animes");
            document.getElementById("link-escritorio-animes").click();
          },
        },
        {
          indexes: ["Llévame a buscar"],
          action: function (i) {
            Jarvis.say(
              "aqui puedes buscar la película, serie o anime que desees"
            );
            document.getElementById("link-escritorio-buscar").click();
          },
        },
        {
          indexes: ["Llévame a facebook"],
          action: function (i) {
            Jarvis.say("Esta es nuestra pagina oficial de facebook");
            document.getElementById("link-escritorio-facebook").click();
          },
        },
        //* desplazamiento
        {
          indexes: ["abajo"],
          action: function (i) {
            Jarvis.say("bajando");
            scroll.scrollMore(500);
          },
        },
        {
          indexes: ["arriba"],
          action: function (i) {
            Jarvis.say("Subiendo");
            scroll.scrollMore(-500);
          },
        },
        //* comandos inteligentes
        {
          smart: true,
          indexes: ["Ver película *"],
          action: function (i, wildcard) {
            document
              .getElementsByClassName("ver-pelicula")
              [Number(wildcard)].click();
            Jarvis.say(`llendo a pelicula ${wildcard}`);
          },
        },
        {
          smart: true,
          indexes: ["Ver serie *"],
          action: function (i, wildcard) {
            document
              .getElementsByClassName("ver-serie")
              [Number(wildcard)].click();

            Jarvis.say(`llendo a serie ${wildcard}`);
          },
        },
        {
          smart: true,
          indexes: ["Ver anime *"],
          action: function (i, wildcard) {
            document
              .getElementsByClassName("ver-anime")
              [Number(wildcard)].click();
            Jarvis.say(`llendo a anime ${wildcard}`);
          },
        },
        {
          indexes: ["espera"],
          action: function (i) {
            Jarvis.dontObey();
            Jarvis.say(
              "De acuerdo estare esperando, para llamarme solo di mi nombre y la palabra escucha"
            );
          },
        },
        {
          indexes: ["para"],
          action: function (i) {
            Jarvis.dontObey();
            Jarvis.say("Esta bien señor");
          },
        },
      ]);

      // if (Jarvis.isSpeaking()) {
      //   console.log("Artyom is speaking something");
      // } else {
      //   console.log("Artyom is not speaking anything");
      // }

      Jarvis.initialize({
        lang: "es-ES",
        debug: true,
        continuous: true,
        listen: true,
        name: "Carla",
        obeyKeyword: "Carla escucha",
      })
        .then(function () {
          console.log("Artyom has been correctly initialized");
          console.log(
            "The following array shouldn't be empty",
            Jarvis.getVoices()
          );
        })
        .catch(function () {
          console.error("An error occurred during the initialization");
        });
    } else {
      Jarvis = "";
    }
  };

  return (
    <AsistenteVirtualContext.Provider
      value={{
        // annyang,
        Jarvis,
      }}
    >
      {props.children}
    </AsistenteVirtualContext.Provider>
  );
};

export default AsistenteVirtual;

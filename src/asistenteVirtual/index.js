import React, { createContext } from "react";
import annyang from "annyang";
import { comands } from "./useComands";
import { animateScroll as scroll } from "react-scroll";

import Artyom from "artyom.js";

export const AsistenteVirtualContext = createContext();

const AsistenteVirtual = (props) => {
  // if (annyang) {
  //   annyang.addCallback(
  //     "resultMatch",
  //     function (userSaid, commandText, phrases) {
  //       console.log(userSaid); // sample output: 'hello'
  //       console.log(commandText); // sample output: 'hello (there)'
  //       console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
  //     }
  //   );

  //   const comands = {
  //     hola: () => {
  //       console.log("hola como te llamas");

  //       annyang.addCallback("resultMatch", function (userSaid) {
  //         if (userSaid === "santi") {
  //           alert("hola santi");
  //           console.log("entre");
  //         }
  //       });
  //     },
  //     "llevame a todas las peliculas": () => {
  //       console.log("llendo a peliculas");
  //     },
  //   };

  //   annyang.addCommands(comands);

  //   annyang.setLanguage("es-CO");

  //   annyang.start({ autoRestart: true, continuous: false });
  // }

  // Jarvis.say("Hola Santi");

  let Jarvis = "";

  window.onload = function () {
    Jarvis = new Artyom();

    if (Jarvis.recognizingSupported()) {
      // Artyom can process commands
      console.log("soy soportado");

      Jarvis.addCommands([
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
        {
          indexes: ["espera"],
          action: function (i, wildcard) {
            Jarvis.dontObey();
            Jarvis.say(
              "De acuerdo estare esperando, para llamarme solo di mi nombre y la palabra escucha"
            );

            console.log(wildcard);
          },
        },
      ]);

      // Jarvis.initialize({
      //   lang: "es-ES",
      //   debug: true, // Show what recognizes in the Console
      //   listen: true, // Start listening after this
      //   speed: 0.9, // Talk a little bit slow
      //   mode: "normal", // This parameter is not required as it will be normal by default
      //   autoRestart: true,
      //   // continuous: true,
      // });

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

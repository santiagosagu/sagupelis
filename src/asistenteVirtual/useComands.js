import annyang from "annyang";

if (annyang) {
  annyang.addCallback("resultMatch", function (userSaid, commandText, phrases) {
    if (userSaid === "santi") {
      alert("hola santi");
    }

    console.log(userSaid); // sample output: 'hello'
    console.log(commandText); // sample output: 'hello (there)'
    console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
  });
}

export const comands = {
  // hola: () => {
  //   console.log("hola como te llamas");

  //   annyang.addCallback("resultMatch", function (userSaid) {
  //     if (userSaid === "santi") {
  //       alert("hola santi");
  //       console.log("entre");
  //     }
  //   });
  // },
  "llevame a todas las peliculas": () => {
    console.log("llendo a peliculas");
  },
};

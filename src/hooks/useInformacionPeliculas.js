

const useInformacionPeliculas = () => {


    const peliculas = [
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
        {
            id: 88,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dHH1TvTUJT6P4n8qgFYrYpAZPdt.jpg',
            nombre: "El Halloween de Hubie (2020)",
            descripcion: "Pese a su devoción por el pueblo de Salem, Hubie Dubois (Sandler) reconoce que la noche de Halloween no es precisamente la más atractiva para los jóvenes desde hace unos años. En esta ocasión, no obstante, algo distinto está a punto de suceder, y sólo él podrá salvar esta mágica noche.",
            categoria: 'Comedia, Fantasia, Misterio, Terror',
            url: 'https://streamtape.com/e/qWb8MV1Q1vsAyG'
        },
        {
            id: 87,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2vjephttoBH1ujOZcsqWlftLbhg.jpg',
            nombre: "Mosul (2020)",
            descripcion: "Cuando ISIS tomó su ciudad, un grupo de hombres lucharon contra ellos para recuperarla. Basada en hechos reales, esta es la historia del equipo SWAT de Nínive, que libró una operación de guerrilla contra ISIS en una lucha desesperada por salvar su ciudad natal de Mosul.",
            categoria: 'Documental',
            url: 'https://streamtape.com/e/We8V0XeZe0Hb97J'
        },
        {
            id: 86,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hPfCHs77qlsCTvrILolIbh94tv5.jpg',
            nombre: "Generación Y (2020)",
            descripcion: "Basándose en una historia real, cinco graduados universitarios deciden que la mejor manera de vengarse de la economía injusta y vivir la vida que siempre han querido es robar a los más ricos de Chicago y entregarse a sí mismos.",
            categoria: 'Crimen, Drama, Accion',
            url: 'https://streamtape.com/e/eAdAArjm39uYM1Q'
        },
        {
            id: 85,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hmeP0Fd7TipMllhOdFeSimrLTCs.jpg',
            nombre: "Belleza Negra (2020)",
            descripcion: "Una adolescente profundamente afligida por haber perdido a sus padres comienza a tener un vínculo muy especial con un caballo que ha sido alejado de su familia.",
            categoria: 'Drama',
            url: 'https://streamtape.com/e/W8ZDBjOqjefbVXl'
        },
        {
            id: 84,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s1y92244iBlKW04rEnaEK8i8tPY.jpg',
            nombre: "Las brujas (de Roald Dahl) (2020)",
            descripcion: "Un pequeño huérfano a finales de 1967, se va a vivir con su querida abuela a Demopolis, un pueblo de Alabama. El niño y su abuela tienen extraños encuentros con algunas brujas por lo que deciden mudarse a un hotel de lujo en la costa. Por desgracia, llegan exactamente al mismo tiempo que la Gran Bruja que ha reunido a sus compinches de todo el planeta -que van de incógnito- para llevar a cabo sus horribles planes.",
            categoria: 'Familia, Fantasia, Aventura, Comedia, Terror',
            url: 'https://streamtape.com/e/grxx7lDy8kFBor'
        },
        {
            id: 83,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2Nfv9Y1DkwOZ1LnVqcHOdY59NfG.jpg',
            nombre: "Becky (2020)",
            descripcion: "Becky, una joven adolescente, pasa un fin de semana en un lago junto a su padre, Jeff, con el que no tiene una gran relación. Lo que parecían unos días perfectos para intentar reconectar entre ellos, se convierten en una verdadera pesadilla cuando un grupo de convictos fugitivos, liderados por Dominick, invaden la casa del lago.",
            categoria: 'Terror, Crimen, Suspenso',
            url: 'https://streamtape.com/e/r9Kbo7KAwdIbBdx'
        },
        {
            id: 82,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yIzTCHXJp5UKi4izt9DtlWksaBz.jpg',
            nombre: "El juicio de los 7 de Chicago (2020)",
            descripcion: "En 1969 se celebró uno de los juicios más populares de la Historia de Estados Unidos, en el que siete individuos fueron juzgados tras ser acusados de conspirar en contra de la seguridad nacional. Este hecho traería una serie de conflictos sociales (manifestaciones, movimientos ciudadanos) que pasarían a la posteridad en una época de grandes cambios en todos los niveles del pueblo norteamericano.",
            categoria: 'Drama, Historia, Suspenso',
            url: 'https://streamtape.com/e/bZKvlZRB9OsPz2e'
        },
        {
            id: 81,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2xVUMCDpn58JwY3zdWFmTZwu37f.jpg',
            nombre: "El príncipe olvidado (2020)",
            descripcion: "Los extraordinarios cuentos que cada noche cuenta un padre a su hija cobran vida en un mundo paralelo que solo les pertenece a ellos: la hija como princesa, el padre como príncipe. Así será hasta el momento en que la hija comience la escuela secundaria y llegue para ella el fin de la infancia. De la misma forma que el padre tendrá que aceptar que su hija está destinada a crecer y mudarse de casa, el príncipe tendrá que enfrentar su aventura más épica encontrando su destino en un mundo al que ya no pertenece",
            categoria: 'Fantasia, Aventura, Comedia',
            url: 'https://evoload.io/e/P1Rg4MEsK1q4gE'
        },
        {
            id: 80,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nLjfYXZ5XZX1gEopCGIrmqQq54A.jpg',
            nombre: "Sputnik (2020)",
            descripcion: "URSS, 1983. El cosmonauta héroe soviético Vladimir Veshnyakov trae una criatura alienígena a la tierra ... en su propio cuerpo. En el laboratorio secreto de la ciudad del régimen, la neurofisióloga Tatyana Klimova intenta salvar al astronauta del monstruo, descubriendo que está experimentando un interés más que profesional en su paciente.",
            categoria: 'Ciencia ficcion, Drama, Terror',
            url: 'https://evoload.io/e/5bSASaESBEBTD7'
        },
        {
            id: 79,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qW1V0lNs7LSM8VFVjyFslrk7NbK.jpg',
            nombre: "Noticias del gran mundo (2020)",
            descripcion: "Cinco años después del fin de la Guerra Civil estadounidense, el capitán Jefferson Kyle Kidd, veterano no de una, sino de tres guerras, va de ciudad en ciudad narrando noticias, hablando de presidentes y reinas, de luchas gloriosas, devastadoras catástrofes y apasionantes aventuras que tienen lugar en cualquier rincón del mundo. Un día, en las llanuras de Texas, el capitán conoce a Johanna, una niña de diez años que fue secuestrada seis años atrás por la tribu Kiowa, y que durante este tiempo fue educada como uno de ellos. Johanna, en contra de su voluntad, debe irse a vivir a casa de sus tíos, un lugar hostil y desconocido para ella. El capitán Kidd acepta entregar a la niña a sus tutores legales. En el viaje, ambos recorrerán cientos de kilómetros a través de una inhóspita naturaleza, y deberán enfrentarse a enormes dificultades, humanas y naturales, en búsqueda de un lugar al que puedan llamar “hogar”",
            categoria: 'Accion, Aventura, Drama, Western',
            url: 'https://evoload.io/e/QQDh51e4GooaxE'
        },
        {
            id: 78,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ehesNeYjfTkkJgIYbKKrWcqY2fA.jpg',
            nombre: "Flora y Ulises (2021)",
            descripcion: "Flora, fan de los comics, salva a una ardilla cuyos poderes traen esperanza y alegría a su familia",
            categoria: 'Familia, Aventura, Comedia, Fantasia',
            url: 'https://streamtape.com/e/VovZRbrD2qFKrJ0'
        },
        {
            id: 77,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6OeGqp18oZucUGziMIRNhLouZ75.jpg',
            nombre: "The Dalton Gang (2020)",
            descripcion: "Cuando su hermano Frank es asesinado por un forajido, los hermanos Bob Dalton, Emmett Dalton y Gray Dalton se unen al departamento del sheriff local. Cuando son engañados por la ley, recurren al crimen, robando trenes y cualquier otra cosa que puedan robar en el transcurso de dos años a principios de la década de 1890. Tratando de superar a Jesse James, intentan robar dos bancos a la vez en octubre de 1892, y las cosas se ponen feas",
            categoria: 'Western',
            url: 'https://evoload.io/e/v2vIziiDBf5eVz'
        },
        {
            id: 76,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x6TTdrTeBVDKVCf9FUERmwNty7W.jpg',
            nombre: "Barrenderos espaciales (2021)",
            descripcion: "En 2092, la tripulación de una nave basurero espacial llama Victory descubre un robot humanoide llamado Dorothy, un arma de destrucción masiva, y se ven envueltos en un negocio de alto riesgo.",
            categoria: 'Drama, Fantasia, Ciencia ficcion',
            url: 'https://streamtape.com/e/OVwAwljyVlTGgP'
        },
        {
            id: 75,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg',
            nombre: "Punto rojo (2021)",
            descripcion: "Cuando Nadja queda embarazada, tanto ella como su pareja intentan reconducir su relación viajando al norte de Suecia para practicar montañismo. Sin embargo, su escapada romántica no tarda en convertirse en una auténtica pesadilla.",
            categoria: 'Drama, Suspenso',
            url: 'https://streamtape.com/e/oeKp3ovGVACJ6Xw'
        },
        {
            id: 74,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iIgr75GoqFxe1X5Wz9siOODGe9u.jpg',
            nombre: "Judas y el Mesías Negro (2021)",
            descripcion: "Bill O'Neal se infiltra en las Panteras Negras según el agente del FBI Mitchell y J. Edgar Hoover. A medida que el presidente de Black Panther, Fred Hampton, asciende y se enamora de un compañero revolucionario en el camino, una batalla se paga por el alma de O'Neal.",
            categoria: 'Drama, Historia',
            url: 'https://streamtape.com/e/rKBozwgDAzTbQ9W'
        },
        {
            id: 73,
            imagen: 'https://i2.wp.com/teaser-trailer.com/wp-content/uploads/The-Outpost-movie-teaser-poster.jpg?ssl=1',
            nombre: "The outpost (2020)",
            descripcion: "Narra la historia real de una de las batallas más duras que tuvo lugar durante la guerra de Afganistán. Un pequeño equipo de 53 soldados estadounidenses tuvo que enfrentarse contra más de 400 combatientes talibanes durante la operación llamada “Libertad duradera”... Adaptación del best seller escrito por el corresponsal de guerra Jake Tapper",
            categoria: 'Belica, Drama, Historia, Accion',
            url: 'https://streamtape.com/e/zL2oBWQ90VtQAY'
        },
        {
            id: 72,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7KXzKUDFEVqaIq8lUL022yN54rE.jpg',
            nombre: "The Way Back (2020)",
            descripcion: "Una antigua estrella del baloncesto caída en desgracia y sumido en el terrible mundo de las adicciones trata de volver al sendero correcto como entrenador de un equipo de instituto cuya mayor peculiaridad es estar compuesto por un variopinto grupo de estudiantes.",
            categoria: 'Drama',
            url: 'https://embed.mystream.to/hw1olioiunlw'
        },
        {
            id: 71,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pc8FAwCN0QfNE6Gr5qR77kSw3c1.jpg',
            nombre: "Nightlife (2020)",
            descripcion: "Milo es un barman que vive una vida de fiestas y noches interminables. Cierto día, una serie de coincidencias lo llevan a conocer a Sunny, la mujer de sus sueños, y ambos acuerdan una cita. Pero la noche que tenía todo para ser romántica se convierte en un caos cuando el amigo de Milo, Renzo, aparece de la nada con todo el submundo de Berlín a sus espaldas.",
            categoria: 'Comedia, Romance',
            url: 'https://embed.mystream.to/m1tf8vnpo7eq'
        },
        {
            id: 70,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9UQxxaJMZODEIh5zh7sm0ag75EY.jpg',
            nombre: "En guerra con mi abuelo (2020)",
            descripcion: "El joven Peter se ve obligado a abandonar su habitación cuando su abuelo Ed, recientemente enviudado, se muda a su casa. Con la ayuda de sus amigos, Peter declara la guerra a su abuelo para hacerle abandonar la habitación, pero Ed es un testarudo y no va a ponérselo nada fácil.",
            categoria: 'Comedia, Familia, Drama',
            url: 'https://embed.mystream.to/b64r3vuvxleu'
        },
        {
            id: 69,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/doVSPLbgGGPjjosHlqskBZj5DMY.jpg',
            nombre: "Conspiración Wander (2020)",
            descripcion: "Después de ser contratado para investigar una muerte sospechosa en la pequeña ciudad de Wander, un investigador privado mentalmente inestable se convence de que el caso está relacionado con el mismo 'encubrimiento de conspiración' que causó la muerte de su hija.",
            categoria: 'Suspense, Crimen, Misterio',
            url: 'https://embed.mystream.to/u5inblvx94wg'
        },
        {
            id: 68,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h7dZpJDORYs5c56dydbrLFkEXpE.jpg',
            nombre: "Host (2020)",
            descripcion: "Seis amigos realizan una sesión espiritista por Zoom durante la cuarentena, lo que les lleva a vivir una serie de aterradoras experiencias. Cuando un espíritu maligno invade sus casas, comienzan a preguntarse qué es lo que pueden hacer para sobrevivir a la noche.",
            categoria: 'Terror, Misterio',
            url: 'https://embed.mystream.to/bdqajyzff8k6'
        },
        {
            id: 67,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg',
            nombre: "Monster Hunter: la cacería comienza (2020)",
            descripcion: "Tras nuestro mundo hay otro: un mundo de monstruos peligrosos y poderosos que gobiernan sus dominios con una ferocidad mortal. Cuando la teniente Artemis (Milla Jovovovich) y sus leales soldados son transportados de nuestro mundo al nuevo mundo, la imperturbable teniente recibe el golpe de su vida. En su desesperada batalla por sobrevivir contra enormes enemigos con poderes increíbles y ataques imparables y repugnantes, Artemis se unirá a un hombre misterioso que ha encontrado la forma de defenderse.",
            categoria: 'Fantasia, Accion, Aventura',
            url: 'https://www.fembed.com/v/q3qmjte8ekk16e8'
        },
        {
            id: 66,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pZXDnoW3cAvsM5GPI7zNLwnlDff.jpg',
            nombre: "El club secreto de los no herederos al trono (2020)",
            descripcion: "Conocemos a Sam, una princesa nacida en segundo lugar. No es la típica princesa y no encaja en ese mundo. Cuando su madre, la reina, la envía a clases de verano en un internado, Sam averigua que es una tapadera: ella y los demás alumnos descubren que tienen superpoderes y que están ahí para entrenar y entrar a formar parte del club secreto de los no herederos al trono. ¿Serán capaces de aprender a usar sus poderes para salvar sus reinos?",
            categoria: 'Accion, Aventura, Comedia, Fantasia',
            url: 'https://embed.mystream.to/cjrusy80bwz2'
        },
        {
            id: 65,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hSpm2mMbkd0hLTRWBz0zolnLAyK.jpg',
            nombre: "Bronx (2020)",
            descripcion: "Un policía leal, en el punto de mira de agentes corruptos y de belicosas bandas de Marsella, debe proteger a su brigada. Y se ocupará personalmente de la situación.",
            categoria: 'Suspense, Accion, Drama, Crimen',
            url: 'https://embed.mystream.to/hbr7qu1ir9v6'
        },
        {
            id: 64,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tKvg9mUAZM9PqoSe1BKCK65XlU1.jpg',
            nombre: "Este cuerpo me sienta de muerte (2020)",
            descripcion: "Tras intercambiar su cuerpo con un asesino en serie (Vince Vaughn), una joven estudiante (Kathryn Newton) descubre que tiene menos de 24 horas antes de que el cambio sea permanente.",
            categoria: 'Terror, Suspense, Comedia, Fantasia',
            url: 'https://embed.mystream.to/2rh5yj4tvwba'
        },
        {
            id: 63,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kB1jM3vsbkWBxLo4esCDvgrsZVj.jpg',
            nombre: "Voces (2020)",
            descripcion: "Daniel (Rodolfo Sancho) y Sara (Belén Fabra) son un matrimonio con un hijo de 9 años, Eric (Lucas Blas), que acaban de trasladarse a un nuevo hogar. Sin embargo, no saben que esa propiedad es conocida en el vecindario como 'la casa de las voces'. Eric es el primero en percatarse de los extraños sonidos que se ocultan tras cada puerta y que intentan comunicarse con la familia. Pese a que al principio Daniel y Sara creen que se trata de un producto de la imaginación de su hijo, poco a poco comienzan a percibir también esos sucesos paranormales, convirtiéndolos en una realidad. Este largometraje de terror, que trata el poder sugestivo de las psicofonías, está dirigida por Ángel Gómez.",
            categoria: 'Drama, Terror, Suspense',
            url: 'https://embed.mystream.to/3opwje84406f'
        },
        {
            id: 62,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cLDPLia17AwMqSaRHccyAlInkch.jpg',
            nombre: "Heavenquest: A Pilgrim's Progress (2020)",
            descripcion: "Inspirado en la novela de 1678 The Pilgrim's Progress y una precuela imaginaria de los escritos originales de Bunyan. Un hombre real llamado Vangel se ve obligado a emprender un viaje contra su voluntad cuando es arrestado repentina y misteriosamente. Herido y perdido después de escapar de los hombres del rey oscuro, Vangel comienza a tener extraños sueños y visiones de una misteriosa mujer vestida de blanco que lo llama desde el territorio desconocido del Norte. Armado con un libro llamado 'El Registro de los Antiguos' que recibe de un sabio llamado Elder, Vangel se embarca en una aventura que lo lleva a través de una cadena montañosa traicionera, desiertos interminables, el Lago de las Dudas y el Bosque Sin Retorno. En el camino, los compañeros de viaje comparten sobre un legendario buen rey y su hijo en el norte si puede llegar con vida.",
            categoria: 'Aventura, Fantasia, Accion',
            url: 'https://evoload.io/e/ph2rEwT5ya48Xr'
        },
        {
            id: 61,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qmCAciCurvDWZJY8wo3lvo9S9b2.jpg',
            nombre: 'No Gogó do Paulinho (2020)',
            descripcion: 'Paulinho Gogó narra sus historias en un banco del parque para diferentes oyentes, mientras espera la llegada de su amado Nega Juju.',
            categoria: 'Comedia',
            url: 'https://evoload.io/e/Fw2zQKl9u6wBh7'
        },
        {
            id: 60,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/svwb7yGCbjHppmwhsdJbDH0xhUI.jpg',
            nombre: 'Malcolm & Marie (2021)',
            descripcion: 'El director de cine Malcolm y su novia Marie esperan en casa las críticas de la película que acaban de estrenar. La noche da un giro inesperado cuando empiezan a salir a la luz aspectos de su relación que ponen a prueba su amor.',
            categoria: 'Romance, Drama',
            url: 'https://evoload.io/e/RTgNCYqs1tNRfZ'
        },
        {
            id: 59,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6K22JB6fZZLBuM0knfl8rs9Zoxg.jpg',
            nombre: 'Amor garantizado (2020)',
            descripcion: 'Saltan chispas cuando una abogada acepta el caso de un cliente encantador. Este va a demandar a una web de citas que garantiza a sus clientes que van a encontrar el amor.',
            categoria: 'Romance, Comedia',
            url: 'https://pelisflix.io/?trembed=0&trid=6005&trtype=1'
        },
        {
            id: 58,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a8DMtkQBCA44tDNxapqsF99M6K0.jpg',
            nombre: 'El magnífico Iván (2020)',
            descripcion: 'Ivan es un gorila de espalda plateada de 400 libras que comparte un hábitat comunal en un centro comercial suburbano con Stella el elefante, Bob el perro y varios otros animales. Tiene pocos recuerdos de la jungla donde fue capturado, pero cuando llega una cría de elefante llamada Ruby, toca algo profundo dentro de él. Ruby se separó recientemente de su familia en la naturaleza, lo que le hace cuestionar su vida, de dónde viene y dónde quiere estar en última instancia.',
            categoria: 'Familia, Comedia, Drama',
            url: 'https://pelisflix.io/?trembed=0&trid=5846&trtype=1'
        },
        {
            id: 57,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xArY32KBAWUjr1J9P1ZJyxtX4Of.jpg',
            nombre: 'Safety: La última línea de defensa (2020)',
            descripcion: '"Safety" es una película basada en la inspiradora historia de Ray McElrathbey, antiguo "safety" de la Universidad de Clemson, un joven que se enfrentó a todo tipo de dificultades y cuya dedicación y persistencia le permitieron superar numerosas adversidades. Con ayuda de sus compañeros de equipo y de la comunidad de Clemson, logró triunfar en el campo, a la vez que criaba y cuidaba de Fahmarr, su hermano de once años.',
            categoria: 'Ciencia ficcion, Drama, Romance',
            url: 'https://streamtape.com/e/MXLkyYr3KVtmppm'
        },
        {
            id: 56,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zz9Fa9gDEasVXRgHw3rvFb8Rtpa.jpg',
            nombre: 'Felicidad (2021)',
            descripcion: 'Una historia de amor alucinante que sigue a Greg quien, después de divorciarse recientemente y luego ser despedido, conoce a la misteriosa Isabel, una mujer que vive en las calles y está convencida de que el mundo contaminado y roto que los rodea es solo una simulación por computadora. Dudoso al principio, Greg finalmente descubre que puede haber algo de verdad en la salvaje conspiración de Isabel.',
            categoria: 'Ciencia ficcion, Drama, Romance',
            url: 'https://pelisflix.io/?trembed=0&trid=7274&trtype=1'
        },
        {
            id: 55,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jbYvBVXbNW3eVZqKNB4FxMpSvci.jpg',
            nombre: 'El cadáver (2020)',
            descripcion: 'Película que nos sitúa en un peculiar Hotel, en un futuro post apocalíptico. En dicho establecimiento se ofrecen cenas con espectáculo, mientras afuera el planeta entero pasa hambre. Una familia pobre, consigue unas entradas para pasar una noche allí, pero su sueño se convertirá en pesadilla cuando descubren que son parte del siniestro juego que los anfitriones proponen.',
            categoria: 'Drama, Terror, Suspense',
            url: 'https://pelisflix.io/?trembed=0&trid=6584&trtype=1'
        },
        {
            id: 54,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i7An8UravfzqaU7SuumaWEVRqVU.jpg',
            nombre: 'The Prom (2020)',
            descripcion: 'Un grupo de estrellas de teatro hilarantemente obsesionadas con sí mismas se adentra en un pequeño pueblo conservador de Indiana en apoyo de una chica de secundaria que quiere llevar a su novia al baile de graduación.',
            categoria: 'Comedia, Musica, Romance',
            url: 'https://embed.mystream.to/m93nben9gy55'
        },
        {
            id: 53,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mn78STmcTtCafuUztN446I4rh5G.jpg',
            nombre: 'The Reason (2020)',
            descripcion: 'La película, basada en el libro de William Sirls, sigue a un pastor de un pueblo pequeño, su esposa y su hijo enfermo mientras un hombre misterioso es enviado para darles esperanza. Sirls adaptó su libro para la pantalla, escribiendo el guión con Aviv Rubinstein y Richard Clark Jr.',
            categoria: 'Drama',
            url: 'https://embed.mystream.to/nr5ixe1fl1ob'
        },
        {
            id: 52,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kSao24kSl83kcKUxRPyk2ktla0o.jpg',
            nombre: 'Conversaciones (2020)',
            descripcion: '10 fantásticas y oscuras conversaciones nos cuentan la historia de una familia mexicana a través de las relaciones y conflictos de dos hermanos.',
            categoria: 'Comedia, Drama, Misterio',
            url: 'https://embed.mystream.to/uivevwjwwdx0'
        },
        {
            id: 51,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b5XfICAvUe8beWExBz97i0Qw4Qh.jpg',
            nombre: 'Work It: Al ritmo de los sueños (2020)',
            descripcion: 'La brillante pero torpe Quinn tiene 18 años y está decidida a convertirse en una bailarina competitiva para entrar en Duke. Protagonizada por Sabrina Carpenter.',
            categoria: 'Comedia, Musica',
            url: 'https://pelisflix.io/?trembed=0&trid=5829&trtype=1'
        },
        {
            id: 50,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fqVsDQoCASgTMKjHgBKqwfljVfS.jpg',
            nombre: 'Todos mis amigos están muertos (2020)',
            descripcion: 'Durante la fiesta de Nochevieja de un grupo de amigos, una serie de eventos locos saca secretos, rompe corazones y conduce a un final impactante.',
            categoria: 'Comedia, Drama, Suspense',
            url: 'https://embed.mystream.to/5nt53kciyy7q'
        },
        {
            id: 49,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg',
            nombre: 'Clouds (2020)',
            descripcion: 'En esta inspiradora historia basada en hechos reales, el joven músico Zach Sobiech descubre que su cáncer se ha extendido y que le quedan pocos meses de vida. A pesar de eso, decide cumplir su sueño de grabar un álbum, sin saber que pronto se convertirá en un fenómeno viral. Al final, la música le da un nuevo sentido a la vida de Zach y le ayuda a despedirse de todos... con una canción que acabará escuchándose en todo el mundo.',
            categoria: 'Musica, Drama, Romance',
            url: 'https://embed.mystream.to/8e2985cp1x0k'
        },
        {
            id: 48,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Rc4mm0spGZ0wDGU2mCYV6wPZ7a.jpg',
            nombre: 'High School Musical: El Musical: Especial Fiestas (2020)',
            descripcion: 'Episodio especial navideño protagonizado por el reparto de High School Musical: El musical: La serie (2019). Un show cargado de temas navideños, de Hanukkah y Año Nuevo, en que el que además compartirán con todos anécdotas de vacaciones memorables de su infancia, mejores regalos, tradiciones favoritas, fotos familiares y propósitos de Año Nuevo.',
            categoria: 'Musica, Comedia, Drama',
            url: 'https://embed.mystream.to/cdjmjx1ms4kq'
        },
        {
            id: 47,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg',
            nombre: 'Jiu Jitsu (2020)',
            descripcion: 'Cada seis años, una antigua orden de luchadores de jiu-jitsu une fuerzas para luchar contra una feroz raza de invasores alienígenas. Pero cuando un célebre héroe de guerra cae derrotado, el destino del planeta y la humanidad está en juego.',
            categoria: 'Fantasia, Accion, Ciencia ficcion',
            url: 'https://evoload.io/e/tiLKYjVrO3glSH'
        },
        {
            id: 46,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dOb7bALn1uZZ7XYX1NT5Xfe9kbE.jpg',
            nombre: 'Pequeños detalles (2021)',
            descripcion: 'Deke, un ayudante del sheriff del condado de Kern quemado, CA se une a Baxter, un detective experto en LASD, para atrapar a un asesino en serie. El olfato de Deke para las "pequeñas cosas" resulta inquietantemente preciso, pero su voluntad de eludir las reglas envuelve a Baxter en un dilema desgarrador. Mientras tanto, Deke debe luchar con un oscuro secreto de su pasado.',
            categoria: 'Crimen, Suspenso',
            url: 'https://embed.mystream.to/pkr31b1zuh2h'
        },
        {
            id: 45,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jSQm5N889mt4rudOYfYBUFapdYN.jpg',
            nombre: 'Bajocero (2021)',
            descripcion: 'Invierno. Bajo cero. Noche cerrada. En mitad de una carretera despoblada, un furgón blindado es asaltado durante un traslado de presos. Alguien busca a uno de los presos y no parará hasta sacarlo. Su plan no tiene fisuras, no le importan las consecuencias, nada le va a detener. Pero Martín, el conductor del furgón, consigue atrincherarse dentro del cubículo blindado con los reclusos, convirtiéndose en su único obstáculo. Obligado a entenderse con sus enemigos naturales, Martín tratará de sobrevivir y cumplir con su deber en una larga noche de pesadilla que acabará haciendo que ponga en duda todos sus principios.',
            categoria: 'Accion, Crimen, Suspenso',
            url: 'https://embed.mystream.to/dod9ruey224r'
        },
        {
            id: 44,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tTWl37oAYRXS3D5mEHmjveXXyrN.jpg',
            nombre: 'Ohana: El tesoro de Hawái (2021)',
            descripcion: 'Mientras veranean en la isla de Oahu, dos hermanos de Brooklyn descubren un diario con la ubicación de un tesoro. Este hallazgo es el comienzo de una aventura épica, en la que hacen nuevos amigos y conectan con sus raíces hawaianas.',
            categoria: 'Accion, Aventura, Comedia, Familia',
            url: 'https://jetload.net/p/JvahCABvRT6m'
        },
        {
            id: 43,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg',
            nombre: 'Palmer(2021)',
            descripcion: 'Tras 12 años en prisión, el exjugador de fútbol Palmer vuelve a casa para rehacer su vida. Mientras se adapta a su nueva realidad, entabla una amistad con un niño abandonado, pero su pasado le persigue y amenaza con destruir su nueva familia.',
            categoria: 'Drama',
            url: 'https://uqload.com/embed-cabzxrjffeud.html'
        },
        {
            id: 42,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aZgw36jwqby3sxT7jU8to8Sq9Di.jpg',
            nombre: 'Tony Parker: La última canasta (2021)',
            descripcion: '¿Alguna vez te has preguntado de dónde provienen tu pasión, tus sueños y tus intereses? ¿Qué es lo que te hace ser... tú? Viaja desde las calles de Nueva York a los reinos cósmicos para descubrir las respuestas a las preguntas más importantes de la vida.',
            categoria: 'Documental',
            url: 'https://embed.mystream.to/63zmlmolui3e'
        },
        {
            id: 41,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jl8rZYy7JmbWlBlvDCfwvDmGO0g.jpg',
            nombre: 'Soul (2020)',
            descripcion: '¿Alguna vez te has preguntado de dónde provienen tu pasión, tus sueños y tus intereses? ¿Qué es lo que te hace ser... tú? Viaja desde las calles de Nueva York a los reinos cósmicos para descubrir las respuestas a las preguntas más importantes de la vida.',
            categoria: 'Familia, Animacion, Comedia, Drama, Musica, Fantasia',
            url: 'https://evoload.io/e/oWsRKuTOaIzugp'
        },
        {
            id: 40,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5iXe5B2AUl0RQFoQlVymdrJOx7w.jpg',
            nombre: 'Mulan (2020)',
            descripcion: 'El emperador de China emite un decreto para reclutar a un varón por cada familia que deberá servir en el ejército imperial para defender al país de los invasores del norte. Hua Mulán, se presenta para evitar que su anciano padre sea llamado a filas. Se hace pasar por un hombre. Mulan deberá apelar a su fuerza interior y sacar a la luz todo su potencial.',
            categoria: 'Aventura, Fantasia',
            url: 'https://embed.mystream.to/kra9dcsh3t9i'
        },
        {
            id: 39,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uTcJAxIV8BzNXuvcViBSibQSBid.jpg',
            nombre: 'Soy tu mujer (2020)',
            descripcion: 'En este drama criminal ambientado en la década de los 70, una mujer se ve obligada a emprender un viaje peligroso con su bebé después de que su marido traicione a sus socios.',
            categoria: 'Drama, Crimen',
            url: 'https://embed.mystream.to/kg9f7f8de6g8'
        },
        {
            id: 38,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yVUIAKV1uGO4YzPWxweSing55gl.jpg',
            nombre: 'El Ascensor (2021)',
            descripcion: 'Ana y Sito quedan atrapados en un elevador en donde el tiempo es una más de las tantas cosas que se han detenido. Ellos quedarán condenados a revivir una y otra vez los mismos eventos por lo que tendrán que trabajar juntos para salir de ahí al mismo tiempo que tendrán que resolver sus problemas de pareja.',
            categoria: 'Ciencia ficcion, Romance, Comedia',
            url: 'https://embed.mystream.to/dmoiuzqhft1l'
        },
        {
            id: 37,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xLbuMxKORru3oTlItLBWpI5WJxR.jpg',
            nombre: 'Butchers (2021)',
            descripcion: 'Una familia de carniceros sádicos vive en las profundidades del campo. Desde el final del invierno hasta los días caninos del verano, cualquiera que se cruce en su camino es carne muerta.',
            categoria: 'Terror',
            url: 'https://embed.mystream.to/dor59g9qx6yg'
        },
        {
            id: 36,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zrrVDbl02FKuGoinanB0Y1aBr5W.jpg',
            nombre: 'Amor de calendario (2020)',
            descripcion: 'Sloane y Jackson odian las vacaciones, porque les obliga a pasar tiempo con sus respectivas familias y a tener que participar en comidas a las que no les apetece ir. Cuando ambos se conocen, deciden hacer todo lo posible por disfrutar de su tiempo libre de cualquier otra manera.',
            categoria: 'Comedia, Romance',
            url: 'https://embed.mystream.to/ungogr2nompl'
        },
        {
            id: 35,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rfIOzedY6LFzdWTeNnIkmxAiLCg.jpg',
            nombre: 'Una noche en Miami… (2020)',
            descripcion: 'Tras la derrota de Cassius Clay de Sonny Liston en 1964, el boxeador se reúne con Malcolm X, Sam Cooke y Jim Brown para cambiar el curso de la historia en el segregado Sur.',
            categoria: 'Drama',
            url: 'https://embed.mystream.to/d6c1rtyghlk3'
        },
        {
            id: 34,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nyu5ze6jlO2BksTu0npMK1NxO3l.jpg',
            nombre: 'No matarás (2020)',
            descripcion: 'Dani, un buen chico que durante los últimos años de su vida se ha dedicado exclusivamente a cuidar de su padre enfermo, decide retomar su vida tras la muerte de éste. Justo cuando ha decidido emprender un largo viaje, conoce a Mila, una chica tan inquietante y sensual como inestable, que convertirá esa noche en una auténtica pesadilla. Las consecuencias de este encuentro llevarán a Dani hasta tal extremo, que se planteará cosas que jamás habría podido imaginar.',
            categoria: 'Suspense, Drama',
            url: 'https://embed.mystream.to/i3gelkmdig0m'
        },
        {
            id: 33,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g1XIrwagaEBrF3gPGu9etsDQRQH.jpg',
            nombre: 'The Empty Man: El Mensajero del Último Día (2020)',
            descripcion: 'Un adolescente que padece esquizofrenia paranoide espera que su nuevo tratamiento con un medicamento experimental le permita llevar una vida normal tanto en el instituto como fuera de él.',
            categoria: 'Drama, Romance',
            url: 'https://embed.mystream.to/ad4rgjeps99n'
        },
        {
            id: 32,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukUS2Qh4SxrwYdSk0fvDsI61dqB.jpg',
            nombre: 'The Empty Man: El Mensajero del Último Día (2020)',
            descripcion: 'Después de que un grupo de adolescentes de una pequeña ciudad del medio oeste comienza a desaparecer misteriosamente, los lugareños creen que es obra de una leyenda urbana conocida como "El hombre vacío", por lo que un policía retirado investiga y lucha por dar sentido a las historias, descubre un grupo secreto y sus intentos de convocar a una entidad mística y horrible, y pronto su vida, y las vidas de sus seres cercanos, correrán grave peligro.',
            categoria: 'Terror, Crimen, Drama',
            url: 'https://embed.mystream.to/4m2zdjjk2b78'
        },
        {
            id: 31,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bFjhHlHjiWouLmJWxGMHGn1MQKX.jpg',
            nombre: 'Big Time Adolescence (2020)',
            descripcion: 'Una virgen de 16 años con una deficiencia de la hormona del crecimiento se corrompe lentamente por su héroe, que abandonó la universidad sin rumbo.',
            categoria: 'Comedia',
            url: 'https://embed.mystream.to/zb3fgblswk16'
        },
        {
            id: 30,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3178oOJKKPDeQ2legWQvMPpllv.jpg',
            nombre: 'Sound of Metal (2020)',
            descripcion: 'El baterista de metal Ruben comienza a perder la audición. Cuando un médico le dice que su condición empeorará, cree que su carrera y su vida han terminado. Su novia Lou lleva al ex adicto a un centro de rehabilitación para sordos con la esperanza de que esto evite una recaída y lo ayude a adaptarse a su nueva vida. Después de ser bienvenido y aceptado tal como es, Ruben debe elegir entre su nueva normalidad y la vida que una vez conoció.',
            categoria: 'Drama, Musica',
            url: 'https://embed.mystream.to/qeyd7p86exv5'
        },
        {
            id: 29,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/OgUfLlhfBFx5BPK6LzBWFvBW1w.jpg',
            nombre: 'Fragmentos de una mujer (2020)',
            descripcion: 'La vida de Martha y Sean Carson, una pareja de Boston, cambia radicalmente tras perder a su hijo durante un parto casero por una negligencia cometida por una matrona a la que posteriormente denuncian ante los tribunales. Comienza entonces un largo vía crucis para Martha, que además de tener que superar el dolor por la pérdida de su hijo tiene que hacer frente a una compleja relación con su marido y a su madre, una mujer dominante por naturaleza.',
            categoria: 'Drama',
            url: 'https://jetload.net/p/u6pLmnL4Y739'
        },
        {
            id: 28,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3PuSDZTLK38t2q0Gs4nEQ4c8ote.jpg',
            nombre: 'Tigre Blanco (2021)',
            descripcion: 'Narra el ascenso épico y cargado de humor oscuro de un aldeano pobre a empresario exitoso en la India moderna. Astuto y ambicioso, nuestro joven héroe se abre camino para convertirse en chofer de Ashok (Rao) y Pinky (Chopra-Jonas), que acaban de regresar de Estados Unidos. La sociedad ha entrenado a Balram para ser una sola cosa, un sirviente, por lo que se vuelve indispensable para sus ricos amos. Pero después de una noche de traición, se da cuenta de los extremos corruptos a los que llegarán para atraparlo y salvarse ellos. A punto de perderlo todo, Balram se rebela contra un sistema manipulado y desigual para levantarse y convertirse en un nuevo tipo de amo.',
            categoria: 'Crimen, Drama',
            url: 'https://jetload.net/p/rLKN3VSKpkKT'
        },
        {
            id: 27,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tsHZ0C7qRpwUntoUuyVHFmTlME3.jpg',
            nombre: 'Una sirena en París (2020)',
            descripcion: 'Un hombre rescata a una sirena en París y lentamente se enamora de ella',
            categoria: 'Romance, Fantasia, Drama',
            url: 'https://jetload.net/p/soG9VfIrd1bW'
        },
        {
            id: 26,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6Q5cfHddcKyC4KBKOzZeQ5hI55N.jpg',
            nombre: 'La increíble historia de la Isla de las Rosas (2020)',
            descripcion: 'En 1968, el ingeniero Giorgio Rosa estableció el estado independiente llamado "La Isla de las Rosas" frente a la costa de Rimini, construido sobre una plataforma fuera de las aguas territoriales, con el esperanto como idioma oficial. Las autoridades italianas no se lo tomaron bien porque la micronación se vio como un expediente para no pagar impuestos sobre los ingresos obtenidos gracias a la llegada de numerosos turistas y curiosos.',
            categoria: 'Comedia, Drama, Aventura',
            url: 'https://jetload.net/p/SWZzwksITBQv'
        },
        {
            id: 25,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iojBA7oQ5xI0ZKsfj6TxtnMwexH.jpg',
            nombre: 'Vanguard (2020)',
            descripcion: 'Vanguard, una compañía de guardaespaldas, es la última esperanza de supervivencia para un contable que es perseguido por la organización de mercenarios más peligrosa del planeta.',
            categoria: 'Accion, Aventura, Crimen',
            url: 'https://jetload.net/p/34Z30AwNt6Yq'
        },
        {
            id: 24,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xGDbQI7Gtgurt9W5ez6Tim2lpS2.jpg',
            nombre: 'Toda una vida en un año (2020)',
            descripcion: 'Un joven de 17 años descubre que su novia se está muriendo, por lo que se propone darle una vida entera, en el último año que se fue.',
            categoria: 'Drama, Romance',
            url: 'https://jetload.net/p/ZZXZHOr2MyzZ'
        },
        {
            id: 23,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sGrKbiw3Xw5uyQyVWUcfiT7I04P.jpg',
            nombre: 'La Asistente (2020)',
            descripcion: 'Sigue un día en la vida de Jane (Julia Garner), una recién graduada universitaria y productora de cine aspirante, que recientemente consiguió el trabajo de sus sueños como asistente junior de un poderoso magnate del entretenimiento. Su día es muy similar al de cualquier otro asistente: preparar café, cambiar el papel en la fotocopiadora, ordenar el almuerzo, organizar viajes, tomar mensajes telefónicos, contratar un nuevo empleado. Pero a medida que Jane sigue su rutina diaria, ella es cada vez más consciente del abuso que colorea insidiosamente cada aspecto de su día de trabajo, una acumulación de degradaciones contra las cuales Jane decide adoptar una posición, solo para descubrir la verdadera profundidad del sistema en el que ha entrado.',
            categoria: 'Drama',
            url: 'https://jetload.net/p/Y0VNtH3JEq4y'
        },
        {
            id: 22,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Atd7UaGgwOhcyHggqchYLqSJ6VO.jpg',
            nombre: 'Mank (2020)',
            descripcion: 'El guionista Herman J. Mankiewicz trabaja en el tumultuoso desarrollo de la película "Ciudadano Kane", de Orson Welles, en los 40.',
            categoria: 'Drama, Historia',
            url: 'https://jetload.net/p/Hr6Fk5EzmusV'
        },
        {
            id: 21,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ltlKaXvIHMTOgxqVbZSGUqcExuN.jpg',
            nombre: 'Greenland: El último refugio (2020)',
            descripcion: 'Cuando el mundo es consciente de que el asteroide más grande de la historia va a impactar en la Tierra y aniquilar todo rastro de vida, los gobiernos de todo el mundo realizan un sorteo en el cual los afortunados podrán sobrevivir en refugios secretos. Esta decisión desata un caos a nivel mundial. Muchos tendrán que emprender un peligroso viaje donde se enfrentarán a los más imponentes peligros de la naturaleza, lo que les obligará a encontrar la manera de mantenerse unidos mientras encuentran la forma de sobrevivir.',
            categoria: 'suspenso',
            url: 'https://jetload.net/p/YBJX9zv6DIUy'
        },
        {
            id: 20,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tpOwE6xsWnu4lKeKbKW0R3iClM.jpg',
            nombre: 'You Should Have Left (2020)',
            descripcion: 'En un esfuerzo por reparar su relación, una pareja reserva unas vacaciones en el campo para ellos y su hija. Lo que comienza como un retiro perfecto comienza a desmoronarse a medida que uno pierde el control de la realidad y una fuerza siniestra intenta desgarrarlos.',
            categoria: 'Terror, Misterio, Drama, Suspense',
            url: 'https://jetload.net/p/5P7Vo9kpJvnz'
        },
        {
            id: 19,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oKb2rqSaAjp1EQoTw1Z5D3ShCxm.jpg',
            nombre: 'La vida que queríamos (2020)',
            descripcion: 'Una pareja que se enfrenta a problemas de fertilidad ve cómo su matrimonio se pone a prueba en unas vacaciones en un centro turístico de Cerdeña.',
            categoria: 'Drama',
            url: 'https://jetload.net/p/zfjhZyDI5quk'
        },
        {
            id: 18,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8K0EpAAVI29ge1jJPys6SuqMq7R.jpg',
            nombre: 'Casa ajena (2020)',
            descripcion: 'Una pareja de refugiados de Sudán, un país arrasado por la guerra, trata de sobrevivir en un pequeño pueblo de Inglaterra hasta que descubren que allí les aguarda un peligroso mal.',
            categoria: 'Drama, Terror, Suspense',
            url: 'https://jetload.net/p/gFhUwqqJdKEm'
        },
        {
            id: 17,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zOQ8G8Ov8O1EzJgfWWQnowJeYlV.jpg',
            nombre: 'La corazonada (2020)',
            descripcion: 'Una novata y un detective investigan el asesinato de una chica de diecinueve años. La principal sospechosa es su mejor amiga.',
            categoria: 'Suspense, Crimen',
            url: 'https://jetload.net/p/I81uolJqWPt9'
        },
        {
            id: 16,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xdKJ6LdA65RFxjNYIL8fV89Tv0d.jpg',
            nombre: 'El robo del siglo (2020)',
            descripcion: 'Viernes 13 de enero de 2006. Los francotiradores del Grupo Halcón están a la espera de una orden. Miguel Sileo, el negociador, deja diluir las esperanzas de que Vitette, uno de los líderes de la banda de ladrones que entró a la sucursal del Banco Río de Acassuso de señales de vida. El grupo Halcón recibe la orden y entra: se encuentran con lo inesperado. Armas de juguete y una veintena de rehenes asustados los esperan dentro; no hay señales del grupo de ladrones. Mientras revisan a los rehenes para descubrir a los artífices del robo camuflados entre ellos, la policía va descubriendo que, más de la mitad de las cajas de seguridad fueron abiertas y vaciadas.',
            categoria: 'Comedia, Suspense, Crimen',
            url: 'https://jetload.net/p/9wfbfDIKRB45'
        },
        {
            id: 15,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eFURPjN59Gvmtq89s7GnsD3QIAl.jpg',
            nombre: 'No andaba muerto, estaba de parranda (2020)',
            descripcion: 'Juan Pablo, al enterarse que iba a morir, decidió robar a la mafia y gastarse hasta el último centavo en Europa junto a Javier, su único amigo. Así, estos humildes empleados se embarcan en una costosa y divertida travesía, con la complicidad de Mónica su compañera de trabajo. Rumba, peleas clandestinas y un sicario que los persigue, los hará vivir toda clase de aventuras en este disparatado viaje. Lo que nunca imaginaron es que tendrían que responder por el dinero gastado ya que Juan ¡No andaba muerto, sino que estaba de parranda!',
            categoria: 'Comedia',
            url: 'https://jetload.net/p/kyl0Lyc5qkBD'
        },       
        {
            id: 14,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ilMExVn5xyfIWAnqngqAB0OFsE5.jpg',
            nombre: 'Rapera a los 40 (2020)',
            descripcion: 'Una dramaturga de 40 años a la que todo le va mal decide probar suerte en el mundo del rap antes de aceptar su fracaso como artista.',
            categoria: 'Comedia, Drama',
            url: 'https://jetload.net/p/Q7AzU5xDuhOB'
        },
        {
            id: 13,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Kee2stO6c2JLgH2Q2ek67H7QTB.jpg',
            nombre: 'Un ladrón honesto (2020)',
            descripcion: 'Un atracador de bancos se entrega a la policía porque se ha enamorado y decide llevar una vida honrada. Cuando descubre que los federales son aún más corruptos que él, se verá obligado a utilizar todas sus artimañas de ex marine para limpiar su nombre.',
            categoria: 'Suspense, Accion, Crimen, Drama',
            url: 'https://jetload.net/p/fz2urhJ1yetd'
        },
        {
            id: 12,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sbDvrkRsZb4Ik8fg2bJfWZQsXw1.jpg',
            nombre: 'Lazos malditos (2020)',
            descripcion: 'Durante una visita a la madre de su prometido, una mujer debe combatir una misteriosa y perversa maldición que intenta apoderarse de su hija',
            categoria: 'Terror, Suspense, Drama',
            url: 'https://jetload.net/p/4sUkYsZO0kni'
        },
        {
            id: 11,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xe6tmgJvrfW341xsgWpW6iEbZUs.jpg',
            nombre: 'Behind the Line: Escape to Dunkirk (2020)',
            descripcion: 'Francia ocupada, 1940. Un comandante nazi descubre a uno de sus prisioneros, Danny es un campeón de boxeo. Lo obliga a luchar por el entretenimiento de su empresa. Pero los prisioneros de guerra se dan cuenta de que pueden usar estos concursos, como cobertura para una audaz fuga, antes de ser enviados a Alemania, donde escapar será casi imposible. Su destino y libertad pueden depender de cuánto tiempo pueda seguir luchando Danny.',
            categoria: 'Belica',
            url: 'https://jetload.net/p/dZdzKiMCFnJe'
        },
        {
            id: 10,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t5wmHLkHZxoFoAZxhLeP7ewBXe3.jpg',
            nombre: 'Zona de riesgo (2021)',
            descripcion: 'Un piloto de drones se une a un oficial androide para localizar un dispositivo que amenaza con acabar con la vida sobre el planeta. El dispositivo en cuestión se encuentra oculto en una zona altamente militarizada.',
            categoria: 'Suspense, Accion, Ciencia ficcion',
            url: 'https://jetload.net/p/Wqx1ZhKIAMOh'
        },
        {
            id: 9,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wJsIn1YJw4fVnxD19vP43MJWYW5.jpg',
            nombre: 'Tyler Rake (2020)',
            descripcion: 'Tyler Rake, un intrépido mercenario que ofrece sus servicios en el mercado negro, emprende una peligrosa misión cuando es contratado para rescatar al hijo secuestrado de un señor del crimen de Bombay.',
            categoria: 'Drama, Accion, Suspense',
            url: 'https://embed.mystream.to/khuovm9ankem'
        },
        {
            id: 8,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rtKLgZw67197OdPQGlryj4pAKW8.jpg',
            nombre: 'Gretel & Hansel (2020)',
            descripcion: 'Hace mucho tiempo, en un campo lejano de cuentos de hadas, una niña lleva a su hermano pequeño a un bosque oscuro en busca desesperada de comida y trabajo, solo para tropezar con un nexo de terror escalofriante.',
            categoria: 'Terror, Fantasia, Suspense',
            url: 'https://jetload.net/p/eGb1YeuJfJXK'
        },
        {
            id: 7,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w7s8CxIVvtAfNJQlTcYIWy7XpM2.jpg',
            nombre: 'El ritmo de la venganza (2020)',
            descripcion: 'Stephanie Patrick ha perdido a toda su familia en un accidente de avión. Muy afectada por los sucesos comienza a investigar el siniestro y descubre que no fue algo accidental. Para llegar al fondo del asunto, Stephanie decide adoptar la identidad de un asesino y así encontrar a los causantes de su desgracia.',
            categoria: 'Accion, Suspense',
            url: 'https://jetload.net/p/ZBFxlQ9hC9jH'
        },
        {
            id: 6,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg',
            nombre: 'Mujer Maravilla 1984 (2020)',
            descripcion: 'En 1984, en plena guerra fría, Diana Prince, conocida como Wonder Woman se enfrenta al empresario Maxwell Lord y a su antigua amiga Barbara Minerva / Cheetah, una villana que posee fuerza y agilidad sobrehumanas.',
            categoria: 'Fantasia, Accion, Aventura',
            url: 'https://jetload.net/p/xid7usBpXso9'
        },
        {
            id: 5,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bHke4PS5Whg0pz6dDWhzAmwvEr8.jpg',
            nombre: 'Cuenta pendiente (2020)',
            descripcion: 'David Cuevas es un hombre de familia que trabaja como recaudador de impuestos de los pandilleros de alto rango de Los Ángeles. Hace colecciones en toda la ciudad con su compañero Creeper asegurándose de que las personas paguen o vean represalias. Una vieja amenaza regresa a Los Ángeles que pone en peligro todo lo que David ama.',
            categoria: 'Accion, Crimen, Drama',
            url: 'https://jetload.net/p/056MYXOfXD6u'
        },
        {
            id: 4,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7eBUfOzrxrggLpTtF5X6G60j6Zb.jpg',
            nombre: 'Cut Throat City (2020)',
            descripcion: 'El huracán Katrina ha llegado a Nueva Orleans y ha acabado con todos los bienes que poseían la mayoría de sus ciudadanos. Entre los afectados, se encuentra un joven de raza negra cuya educación y formación no parece suficiente como para poder reponer todas las pérdidas. Desesperado, decide juntarse con sus tres amigos, hacerse gángsters y conseguir el dinero necesario para mantener a sus familias a salvo. Esta osadía no será pasada por alto por el Departamento de Policía de la ciudad, que tratará de detenerles lo antes posible.',
            categoria: 'Accion, Crimen, Drama, Suspense',
            url: 'https://jetload.net/p/BRkNgPcmSjoZ'
        },
        {
            id: 3,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nlu8YdfUNRrxonk1fvgr2jyXkBm.jpg',
            nombre: 'Juguetes de Terror (2020)',
            descripcion: 'Una gran familia se muda a una vieja casa polvorienta en los bosques nevados de Washington con la esperanza de que sea una escapada agradable para las vacaciones. Pero los niños pronto descubren un alijo de juguetes viejos que pertenecen a un espeluznante niño fantasma. A medida que comienzan a suceder cosas cada vez más extrañas, algunos niños comienzan a sentir que algo en la casa no está del todo bien ...',
            categoria: 'Terror',
            url: 'https://evoload.io/e/uXiVLSBdTkucGm'
        },
        {
            id: 2,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oh8XmxWlySHgGLlx8QOBmq9k72j.jpg',
            nombre: 'Tenet (2020)',
            descripcion: 'Armado solamente con una palabra, Tenet, el protagonista deberá luchar por la supervivencia del mundo entero y evitar la Tercera Guerra Mundial, en una historia de espionaje internacional. La misión se desplegará más allá del tiempo real. No son viajes en el tiempo, es inversión.',
            categoria: 'Accion, Crimen, Drama, Suspense',
            url: 'https://jetload.net/p/WGLdsdhEeYOF'
        },
        {
            id: 1,
            imagen: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d1QKiYtceF3GDtxvTFXFAqwwah9.jpg',
            nombre: 'Interstellar',
            descripcion: 'Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.',
            categoria: 'Aventura, Drama, Ciencia ficcion',
            url: 'https://jetload.net/p/g6iUNY4ALWM3'
        },
        
    ]
  

    return { peliculas }

}

export default useInformacionPeliculas
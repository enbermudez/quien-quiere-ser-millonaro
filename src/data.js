const data = {
  questions: [
    {
      level: 1,
      title: '¿Cuál es el nombre de mi primera mascota?',
      options: [
        {
          id: 1,
          value: 'Apollo',
          correct: false,
        },
        {
          id: 2,
          value: 'Tati',
          correct: true,
        },
        {
          id: 3,
          value: 'Pipo',
          correct: false,
        },
        {
          id: 4,
          value: 'Fiora',
          correct: false,
        }
      ]
    },
    {
      level: 1,
      title: '¿Cuál de las siguientes opciones no me gusta?',
      options: [
        {
          id: 1,
          value: 'Remolacha',
          correct: true,
        },
        {
          id: 2,
          value: 'Zanahoria',
          correct: false,
        },
        {
          id: 3,
          value: 'Tomate',
          correct: false,
        },
        {
          id: 4,
          value: 'Cebolla',
          correct: false,
        }
      ]
    },
    {
      level: 1,
      title: '¿Cuál es mi deporte favorito?',
      options: [
        {
          id: 1,
          value: 'Baloncesto',
          correct: false,
        },
        {
          id: 2,
          value: 'Tenis',
          correct: false,
        },
        {
          id: 3,
          value: 'Fútbol',
          correct: true,
        },
        {
          id: 4,
          value: 'Golf',
          correct: false,
        }
      ]
    },
    {
      level: 1,
      title: '¿Cuál es el nombre de mi mascota actual?',
      options: [
        {
          id: 1,
          value: 'Fiora',
          correct: true,
        },
        {
          id: 2,
          value: 'Pipo',
          correct: false,
        },
        {
          id: 3,
          value: 'Luna',
          correct: false,
        },
        {
          id: 4,
          value: 'Queen',
          correct: false,
        }
      ]
    },
    {
      level: 2,
      title: '¿Cuál es mi título universtario?',
      options: [
        {
          id: 1,
          value: 'Lic. en Programación',
          correct: false,
        },
        {
          id: 2,
          value: 'Lic. en Sistemas Informáticos',
          correct: false,
        },
        {
          id: 3,
          value: 'Ing. en Computación',
          correct: true,
        },
        {
          id: 4,
          value: 'Ing. en Algoritmos',
          correct: false,
        }
      ]
    },
    {
      level: 2,
      title: '¿Con cuál de las siguientes carreras inicié la universidad?',
      options: [
        {
          id: 1,
          value: 'Ing. Industrial',
          correct: true,
        },
        {
          id: 2,
          value: 'Lic. en Sistemas Informáticos',
          correct: false,
        },
        {
          id: 3,
          value: 'Diseño Gráfico',
          correct: false,
        },
        {
          id: 4,
          value: 'Mercadeo',
          correct: false,
        }
      ]
    },
    {
      level: 2,
      title: 'Sé de memoria el diálogo de un personaje de Los Increíbles. ¿Cuál?',
      options: [
        {
          id: 1,
          value: 'Mr. Increíble',
          correct: false,
        },
        {
          id: 2,
          value: 'Dash',
          correct: false,
        },
        {
          id: 3,
          value: 'Síndrome',
          correct: false,
        },
        {
          id: 4,
          value: 'Frozono',
          correct: true,
        }
      ]
    },
    {
      level: 2,
      title: '¿Cuál es mi bebida favorita?',
      options: [
        {
          id: 1,
          value: 'Smirnoff de Sandía',
          correct: false,
        },
        {
          id: 2,
          value: 'Cuba Libre',
          correct: true,
        },
        {
          id: 3,
          value: 'Fernet',
          correct: false,
        },
        {
          id: 4,
          value: 'Whisky',
          correct: false,
        }
      ]
    },
    {
      level: 3,
      title: '¿Cuál se las siguientes es mi alteración visual?',
      options: [
        {
          id: 1,
          value: 'Presbicia',
          correct: false,
        },
        {
          id: 2,
          value: 'Astigmatismo',
          correct: false,
        },
        {
          id: 3,
          value: 'Miopía',
          correct: false,
        },
        {
          id: 4,
          value: 'Daltonismo',
          correct: true,
        }
      ]
    },
    {
      level: 3,
      title: 'Le tengo miedo a:',
      options: [
        {
          id: 1,
          value: 'Oscuridad',
          correct: false,
        },
        {
          id: 2,
          value: 'Fantasmas',
          correct: false,
        },
        {
          id: 3,
          value: 'Alturas',
          correct: true,
        },
        {
          id: 4,
          value: 'Payasos',
          correct: false,
        }
      ]
    },
    {
      level: 3,
      title: '¿Cuál de las siguientes es una de mis fobias?',
      options: [
        {
          id: 1,
          value: 'Arcanofobia',
          correct: false,
        },
        {
          id: 2,
          value: 'Lepidopterofobia',
          correct: true,
        },
        {
          id: 3,
          value: 'Cinofobia',
          correct: false,
        },
        {
          id: 4,
          value: 'Hematofobia',
          correct: false,
        }
      ]
    },
    {
      level: 4,
      title: '¿Cuál es mi librería favorita de Javascript?',
      options: [
        {
          id: 1,
          value: 'React',
          correct: true,
        },
        {
          id: 2,
          value: 'Angular',
          correct: false,
        },
        {
          id: 3,
          value: 'VueJS',
          correct: false,
        },
        {
          id: 4,
          value: 'Laravel',
          correct: false,
        }
      ]
    },
    {
      level: 4,
      title: '¿En cuál país vivo actualmente?',
      options: [
        {
          id: 1,
          value: 'Argentina',
          correct: true,
        },
        {
          id: 2,
          value: 'Venezuela',
          correct: false,
        },
        {
          id: 3,
          value: 'Colombia',
          correct: false,
        },
        {
          id: 4,
          value: 'México',
          correct: false,
        }
      ]
    },
    {
      level: 4,
      title: '¿Cuál es mi segundo nombre es?',
      options: [
        {
          id: 1,
          value: 'José',
          correct: true,
        },
        {
          id: 2,
          value: 'Edgar',
          correct: false,
        },
        {
          id: 3,
          value: 'Matías',
          correct: false,
        },
        {
          id: 4,
          value: 'Bermudas',
          correct: false,
        }
      ]
    },
    {
      level: 5,
      title: '¿Cuál de las siguientes opciones no es uno de mis tatuajes?',
      options: [
        {
          id: 1,
          value: 'Gengar',
          correct: false,
        },
        {
          id: 2,
          value: 'Balanza',
          correct: true,
        },
        {
          id: 3,
          value: 'Marca del Forastero',
          correct: false,
        },
        {
          id: 4,
          value: 'Sombra de Muse',
          correct: false,
        }
      ]
    },
    {
      level: 5,
      title: '¿Qué le ocurrió a mis shorts de tucanes?',
      options: [
        {
          id: 1,
          value: 'Nunca los tuve',
          correct: false,
        },
        {
          id: 2,
          value: 'Se los llevó el viento',
          correct: true,
        },
        {
          id: 3,
          value: 'Los vendí',
          correct: false,
        },
        {
          id: 4,
          value: 'Me los robaron',
          correct: false,
        }
      ]
    },
    {
      level: 5,
      title: '¿Cuál es mi color favorito?',
      options: [
        {
          id: 1,
          value: 'Amarillo',
          correct: false,
        },
        {
          id: 2,
          value: 'Rosa',
          correct: true,
        },
        {
          id: 3,
          value: 'Violeta',
          correct: false,
        },
        {
          id: 4,
          value: 'Rojo',
          correct: false,
        }
      ]
    },
    {
      level: 6,
      title: '¿Cuál es mi grupo musical favorito?',
      options: [
        {
          id: 1,
          value: 'The Offspring',
          correct: false,
        },
        {
          id: 2,
          value: 'Dance Gavin Dance',
          correct: false,
        },
        {
          id: 3,
          value: 'Bring Me The Horizon',
          correct: false,
        },
        {
          id: 4,
          value: 'Muse',
          correct: true,
        }
      ]
    },
    {
      level: 6,
      title: '¿Cuál es mi saga de libros favorita?',
      options: [
        {
          id: 1,
          value: 'Mistborn',
          correct: true,
        },
        {
          id: 2,
          value: 'Harry Potter',
          correct: false,
        },
        {
          id: 3,
          value: 'Maze Runner',
          correct: false,
        },
        {
          id: 4,
          value: 'Divergente',
          correct: false,
        }
      ]
    },
    {
      level: 6,
      title: '¿Cuál es mi fecha de nacimiento?',
      options: [
        {
          id: 1,
          value: '18 de Febrero',
          correct: true,
        },
        {
          id: 2,
          value: '15 de Febrero',
          correct: false,
        },
        {
          id: 3,
          value: '10 de Febrero',
          correct: false,
        },
        {
          id: 4,
          value: '21 de Febrero',
          correct: false,
        }
      ]
    },
    {
      level: 7,
      title: '¿Cuál de estos no es/fue uno de mis apodos?',
      options: [
        {
          id: 1,
          value: 'Paquete',
          correct: false,
        },
        {
          id: 2,
          value: 'Coquivacoa',
          correct: false,
        },
        {
          id: 3,
          value: 'Pepe',
          correct: true,
        },
        {
          id: 4,
          value: 'Carmen Sandiego',
          correct: false,
        }
      ]
    },
    {
      level: 7,
      title: 'Un día fui a Mandarín...',
      options: [
        {
          id: 1,
          value: 'Borracho',
          correct: false,
        },
        {
          id: 2,
          value: 'Maquillado',
          correct: true,
        },
        {
          id: 3,
          value: 'Enfermo',
          correct: false,
        },
        {
          id: 4,
          value: 'Desnudo',
          correct: false,
        }
      ]
    },
    {
      level: 7,
      title: '¿A cuál de las siguientes operaciones me sometí?',
      options: [
        {
          id: 1,
          value: 'Herniorrafía',
          correct: false,
        },
        {
          id: 2,
          value: 'Apendicectomía',
          correct: true,
        },
        {
          id: 3,
          value: 'Lobotomía',
          correct: false,
        },
        {
          id: 4,
          value: 'Laparotomía',
          correct: false,
        }
      ]
    },
  ],
};

export default data;

//This is the first seed file to be executed:
//It fill the DB with 20 Users, 10 Guides and about 30 tours and link
//them in blocks of 2-4 for each guide

require('dotenv').config();


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Guide = require("../models/Guide");
const Tour = require("../models/Tour");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DB}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "pedro",
    password: bcrypt.hashSync("pedro", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Pedro",
    surname: "Hernández",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "maria",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "María",
    surname: "González",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "alex",
    password: bcrypt.hashSync("alex", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Alex",
    surname: "Siguenza",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "john",
    password: bcrypt.hashSync("john", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "John",
    surname: "Malapata",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "alexa",
    password: bcrypt.hashSync("alexa", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Alexa",
    surname: "Amazonia",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "ester",
    password: bcrypt.hashSync("ester", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Ester",
    surname: "Píscore",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "fran",
    password: bcrypt.hashSync("fran", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Fran",
    surname: "Thompson",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "hugo",
    password: bcrypt.hashSync("hugo", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Hugo",
    surname: "I el Grande",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "sonia",
    password: bcrypt.hashSync("sonia", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Sonia",
    surname: "Puentes",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "daniel",
    password: bcrypt.hashSync("daniel", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Daniel",
    surname: "Pulpeiro",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "ernesto",
    password: bcrypt.hashSync("ernesto", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Ernesto",
    surname: "Maniere",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "fernando",
    password: bcrypt.hashSync("fernando", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Fernando",
    surname: "Alvarez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "carmen",
    password: bcrypt.hashSync("carmen", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Carmen",
    surname: "Villaclara",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "martin",
    password: bcrypt.hashSync("martin", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Martin",
    surname: "Escorsese",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "julia",
    password: bcrypt.hashSync("julia", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Julia",
    surname: "Gomez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "antonio",
    password: bcrypt.hashSync("antonio", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Antonio",
    surname: "Rodriguez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "diana",
    password: bcrypt.hashSync("diana", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Diana",
    surname: "Villalba",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "sergio",
    password: bcrypt.hashSync("sergio", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Sergio",
    surname: "Marante",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "josemanuel",
    password: bcrypt.hashSync("josemanuel", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Jose Manuel",
    surname: "Jerez",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },
  {
    username: "giancarlo",
    password: bcrypt.hashSync("giancarlo", bcrypt.genSaltSync(bcryptSalt)),
    picture: 'https://i.stack.imgur.com/l60Hf.png',
    name: "Giancarlo",
    surname: "Giacometti",
    phone: 666334455,
    email: "themail.transporter@gmail.com",
    comments: []
  },


]

let guides = [
  {
    username: "javi",
    password: bcrypt.hashSync("javi", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Javier Morales",
      description: "Lorem fistrum ese hombree pupita caballo blanco caballo negroorl a peich. Condemor se calle ustée al ataquerl a wan la caidita.",
      img: "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 10],
    searchDisplays: 145,
    profileViews: 233,
    billing: [],
  },
  {username: "francisco",
  password: bcrypt.hashSync("francisco", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Francisco Navarro",
      description: "Ergadoo torpedo fistro. Va usté muy cargadoo está la cosa muy malar a gramenawer mamaar torpedo está la cosa muy malar ese pedazo",
      img: "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [4, 8, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {username: "dani",
  password: bcrypt.hashSync("dani", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Daniel Pulpeiro",
      description: "Aaaaaah po kass bee do bee do bee do aaaaaah poulet tikka masala hana dul sae poulet tikka masala jiji potatoooo bee do bee",
      img: "https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8, 5, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "lore",
    password: bcrypt.hashSync("lore", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Lorena Matalascabras",
      description: "Tank yuuu! uuuhhh hana dul sae aaaaaah tulaliloo uuuhhh jiji chasy hahaha para tú. Pepete daa butt tank yuuu! Aaaaaah. Wiiiii belloo! Poopayee uuuhhh butt butt baboiii la bodaaa. Jiji po kass uuuhhh chasy",
      img: "https://randomuser.me/api/portraits/women/95.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "German"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8, 5, 8, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "carlos",
    password: bcrypt.hashSync("carlos", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Carlos Deladisco",
      description: "Mamaar jarl mamaar la caidita. No te digo trigo por no llamarte Rodrigor hasta luego Lucas sexuarl no te digo trigo por no llamarte Rodrigor",
      img: "https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [9, 10],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "manu",
    password: bcrypt.hashSync("manu", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Manuel Illo",
      description: "Por la gloria de mi madre te va a hasé pupitaa de la pradera hasta luego Lucas no puedor diodeno hasta luego Lucas a peich la caidita.",
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY256_CR36,0,172,256_AL_.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English"]
    },
    toursCreated: [],
    comments: [],
    rates: [],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "laura",
    password: bcrypt.hashSync("laura", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Laura Hernández",
      description: "Ta tikka masala hahaha para tú baboiii butt. Tulaliloo underweaaar daa ti aamoo! Belloo! Jiji ti aamoo!",
      img: "https://randomuser.me/api/portraits/women/36.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "French", "Russian"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 7, 7, 8, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "maria",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Maria Sousterrain",
      description: "Condemor se calle ustée al ataquerl a wan la caidita. Pupita va usté muy cargadoo torpedo fistro. Va usté muy cargadoo",
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDc2M2NkMTctNmQ0MS00MjQxLWFkMGItNGY1Y2Y3NzYzZjg1XkEyXkFqcGdeQXVyNjAzMTgxNjY@._V1_UY256_CR74,0,172,256_AL_.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "French", "German"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "alfonso",
    password: bcrypt.hashSync("alfonso", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Alfonso Sinclair",
      description: "Daa po kass poopayee tank yuuu! Chasy tank yuuu! Tulaliloo hana dul sae jeje jiji tulaliloo belloo! Bee do bee do bee do tank yuuu! Jeje pepete aaaaaah uuuhhh aaaaaah. Bee do bee do bee do poulet",
      img: "https://randomuser.me/api/portraits/men/77.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 8, 6, 10, 6],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    username: "claire",
    password: bcrypt.hashSync("claire", bcrypt.genSaltSync(bcryptSalt)),
    info: {
      name: "Claire Underwood",
      description: "Jiji pepete bananaaaa bee do bee do bee do underweaaar pepete. Ti aamoo! baboiii tank yuuu!",
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWU2ZmUyOTctNjE0Zi00N2Q3LTk1ZmYtMzAxMDRmNmM3OTFhXkEyXkFqcGdeQXVyNjU1Nzk5NTE@._V1_UY256_CR13,0,172,256_AL_.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French", "Russian"]
    },
    toursCreated: [],
    comments: [],
    rates: [7, 10, 9, 8, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
]

let tours1 = [
  {
    img: "insertar imagen",
    title: "Malasaña Rockera",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Aventura", "Deporte", "Estilo de Vida", "Arte y Cultura", "Gastronomia", "Mar", "Naturaleza"],
    duration: 2,
    price: 25,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 8, 10]
  },
  {
    img: "insertar imagen",
    title: "Madrid y sus Poetas",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 4,
    price: 60,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 9, 10, 6, 7, 9]
  },
  {
    img: "insertar imagen",
    title: "Vinos y Quesos en el Barrio de Las Letras",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Gastronomia"],
    duration: 2,
    price: 20,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10]
  },
  {
    img: "insertar imagen",
    title: "La arquitectura moderna de Madrid",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 1,
    price: 15,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 10]
  },

]

let tours2 = [
  {
    img: "insertar imagen",
    title: "Los 7 Picos de la Sierra",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Aventura", "Deporte"],
    duration: 2,
    price: 25,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 10]
  },
  {
    img: "insertar imagen",
    title: "Locos por la IPA",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 4,
    price: 35,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 7, 8, 9]
  },
  {
    img: "insertar imagen",
    title: "Muffins por malasaña",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Gastronomia"],
    duration: 2,
    price: 23,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 8, 8, 9]
  },
]

let tours3 = [
  {
    img: "insertar imagen",
    title: "Rincones escondidos de Madrid",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 12,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 10]
  },
  {
    img: "insertar imagen",
    title: "Noche de Cantautores",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 4,
    price: 37,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 9, 5, 6, 10, 6, 7, 9]
  },
  {
    img: "insertar imagen",
    title: "Esculturas Ecuestres: Las historias desconocidas",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 7, 7, 7]
  },
  {
    img: "insertar imagen",
    title: "Escalada en la Sierra",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Aventura", "Deporte"],
    duration: 4,
    price: 36,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 10, 10, 10, 9]
  },

]

let tours4 = [
  {
    img: "insertar imagen",
    title: "Yoga en el retiro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Deporte", "Estilo de Vida"],
    duration: 2,
    price: 18,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9, 8, 10]
  },
  {
    img: "insertar imagen",
    title: "Descenso en Mountain Bike por la sierra",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Aventura", "Deporte"],
    duration: 2,
    price: 22,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 5, 6, 10, 6, 7, 9]
  },
  {
    img: "insertar imagen",
    title: "Magia al Aire Libre en el Retiro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Estilo de Vida", "Arte y Cultura"],
    duration: 1,
    price: 12,
    meetingPoint: "google address",
    comments: [],
    rates: [6, 9, 10, 7, 8, 7]
  },
]

let tours5 = [
  {
    img: "insertar imagen",
    title: "Freetour Centro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 0,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 5, 7, 8, 8, 10]
  },
  {
    img: "insertar imagen",
    title: "Freetour Nocturno por el casco Histórico",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 0,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 5, 6, 5, 5, 9, 10, 6, 7, 9]
  },
  {
    img: "insertar imagen",
    title: "Visita guiada al Reina Sofía",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [6,9,7,7,7,10]
  },
  {
    img: "insertar imagen",
    title: "Las esculturas contemporáneas de Madrid",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 18,
    meetingPoint: "google address",
    comments: [],
    rates: [7,8,6,7,8,5,10]
  },

]

let tours6 = [
  {
    img: "insertar imagen",
    title: "Taller de Cocina Vegana",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Estilo de Vida","Gastronomia"],
    duration: 2,
    price: 17,
    meetingPoint: "google address",
    comments: [],
    rates: [7,6,7,7,9,5,7,8,8,10]
  },
  {
    img: "insertar imagen",
    title: "Taller de Cocina Vegetariana",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Estilo de Vida","Gastronomia"],
    duration: 2,
    price: 19,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9, 10, 6, 7, 9]
  },
  {
    img: "insertar imagen",
    title: "Taller de repostería Vegana",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Gastronomia"],
    duration: 3,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [6,9,7,7,8,9,7,10]
  },
]

let tours7 = [
  {
    img: "insertar imagen",
    title: "Taller de Teatro: Descubre al actor que llevas dentro",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 3,
    price: 19,
    meetingPoint: "google address",
    comments: [],
    rates: [7,5,7,8,8,10]
  },
  {
    img: "insertar imagen",
    title: "Chaplin: Tiempos modernos y Coloquio",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 4,
    price: 13,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9, 10,10,10, 6, 7, 9]
  },
  {
    img: "insertar imagen",
    title: "Taller de Monólogos",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 2,
    price: 8,
    meetingPoint: "google address",
    comments: [],
    rates: [6,9,7,7,8,9,7,10,5,5]
  },
]

let tours8 = [
  {
    img: "insertar imagen",
    title: "Zumba Master",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Deporte","Estilo de Vida"],
    duration: 3,
    price: 19,
    meetingPoint: "google address",
    comments: [],
    rates: [7,5,7,8,9,8,4,8,10]
  },
  {
    img: "insertar imagen",
    title: "Ritmos Latinos en el Parque Eva Duarte",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Deporte","Arte y Cultura"],
    duration: 2,
    price: 10,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 8, 9,10, 6, 7, 9]
  },
  {
    img: "insertar imagen",
    title: "Danza del Vientre al Atardecer",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 1,
    price: 12,
    meetingPoint: "google address",
    comments: [],
    rates: [6,9,7,7,8,9,7,10,7,8,10,5,5]
  },
]

let tours9 = [
  {
    img: "insertar imagen",
    title: "Trekking en Rascafría",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Aventura", "Deporte","Naturaleza"],
    duration: 4,
    price: 35,
    meetingPoint: "google address",
    comments: [],
    rates: [7, 6, 9, 8, 10]
  },
  {
    img: "insertar imagen",
    title: "Taller de Hamburguesas Artesanales",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura", "Gastronomia"],
    duration: 1,
    price: 8,
    meetingPoint: "google address",
    comments: [],
    rates: [7,8,5,6,7,6,8,9]
  },
  {
    img: "insertar imagen",
    title: "Remember La Movida",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura"],
    duration: 4,
    price: 22,
    meetingPoint: "google address",
    comments: [],
    rates: [6,9,10,8,8,8,8,8,9]
  },
]

let tours10 = [
  {
    img: "insertar imagen",
    title: "Acampada astronómica",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Naturaleza"],
    duration: 6,
    price: 35,
    meetingPoint: "google address",
    comments: [],
    rates: [7,6,9,8,10,5,6,8,8]
  },
  {
    img: "insertar imagen",
    title: "Meditación en Los Morrillos",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Naturaleza", "Estilo de Vida"],
    duration: 3,
    price: 23,
    meetingPoint: "google address",
    comments: [],
    rates: [7,8,5]
  },
  {
    img: "insertar imagen",
    title: "Taller Danzas Étnicas",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Arte y Cultura","Naturaleza"],
    duration: 3,
    price: 16,
    meetingPoint: "google address",
    comments: [],
    rates: [6,9,10,8,9]
  },
  {
    img: "insertar imagen",
    title: "Recogida de Setas en la Sierra",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category: ["Naturaleza","Aventura"],
    duration: 4,
    price: 15,
    meetingPoint: "google address",
    comments: [],
    rates: [6,9,10,8,9,9,9,9]
  },
]

let allGuides = []

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    //mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })


Guide.deleteMany()
  .then(() => {
    return Guide.create(guides)
  })
  .then(guidesCreated => {
    console.log(`${guidesCreated.length} guides created with the following id:`);
    console.log(guidesCreated.map(u => u._id));
    guidesCreated.forEach((guide) => {
      allGuides.push(guide._id)
    })
  })
  .then(() => {
    Tour.deleteMany()
      .then(() => {
        return Tour.create(tours1)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[0] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[0],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours2)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[1] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[1],{$push: {toursCreated: tourCreated._id}}).then()
          .then()
        })
      })
      .then(() => {
        return Tour.create(tours3)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[2] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[2],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours4)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[3] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[3],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours5)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[4] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[4],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours6)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[5] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[5],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours7)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[6] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[6],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours8)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[7] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[7],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours9)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[8] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[8],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      .then(() => {
        return Tour.create(tours10)
      })
      .then(toursCreated => {
        console.log(`${toursCreated.length} tours created with the following id:`);
        console.log(toursCreated.map(u => u._id));
        toursCreated.forEach((tourCreated) => {
          Tour.findByIdAndUpdate(tourCreated._id, { owner: allGuides[9] }, { new: true }).then()
          Guide.findByIdAndUpdate(allGuides[9],{$push: {toursCreated: tourCreated._id}}).then()
        })
      })
      
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })


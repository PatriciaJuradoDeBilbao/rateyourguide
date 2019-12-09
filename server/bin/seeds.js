// Seeds file that remove all users and create 2 new users
require('dotenv').config();
// To execute this seed, run from the root of the project
// $ node bin/seeds.js

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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
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
    tourSessions: [],
    comments: []
  },

]

let guides = [
  {
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
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [7, 10],
    searchDisplays: 145,
    profileViews: 233,
    billing: [],
  },
  {
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
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [4, 8, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
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
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [7, 8, 5, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    info: {
      name: "Lorena Matalascabras",
      description: "Tank yuuu! uuuhhh hana dul sae aaaaaah tulaliloo uuuhhh jiji chasy hahaha para tú. Pepete daa butt tank yuuu! Aaaaaah. Wiiiii belloo! Poopayee uuuhhh butt butt baboiii la bodaaa. Jiji po kass uuuhhh chasy",
      img: "https://randomuser.me/api/portraits/women/95.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish","German"]
    },
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [7, 8, 5, 8, 6, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    info: {
      name: "Carlos Deladisco",
      description: "Mamaar jarl mamaar la caidita. No te digo trigo por no llamarte Rodrigor hasta luego Lucas sexuarl no te digo trigo por no llamarte Rodrigor",
      img: "https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["English","French"]
    },
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [9,10],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
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
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
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
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [7, 7, 7, 8, 9, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
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
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [7, 8],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
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
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [7, 8, 6, 10, 6],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
  {
    info: {
      name: "Claire Underwood",
      description: "Jiji pepete bananaaaa bee do bee do bee do underweaaar pepete. Ti aamoo! baboiii tank yuuu!",
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWU2ZmUyOTctNjE0Zi00N2Q3LTk1ZmYtMzAxMDRmNmM3OTFhXkEyXkFqcGdeQXVyNjU1Nzk5NTE@._V1_UY256_CR13,0,172,256_AL_.jpg",
      email: "themail.transporter@gmail.com",
      phone: 633445566,
      certification: "Not uploaded yet",
      city: "Madrid",
      languages: ["Spanish", "English", "French","Russian"]
    },
    tourSessions: [],
    toursCreated: [],
    comments: [],
    rates: [7, 10, 9, 8, 9],
    searchDisplays: 120,
    profileViews: 345,
    billing: [],
  },
]

let tours1= [
  {
    owner: "",
    img: "insertar imagen",
    title: "Malasaña Rockera",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category:["Aventura","Deporte","Estilo de Vida","Arte y Cultura","Gastronomia","Mar","Naturaleza"],
    duration: 2,
    price: 25, 
    meetingPoint: "google address", 
    comments: [],
    rates: [7,6,9,8,8,10]
  },
  {
    owner: "",
    img: "insertar imagen",
    title: "Madrid y sus Poetas",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category:["Arte y Cultura","Gastronomia"],
    duration: 4,
    price: 60, 
    meetingPoint: "google address", 
    comments: [],
    rates: [7,8,5,6,9,10,6,7,9]
  },
  {
    owner: "",
    img: "insertar imagen",
    title: "Vinos y Quesos en el Barrio de Las Letras",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category:["Gastronomia"],
    duration: 2,
    price: 20, 
    meetingPoint: "google address", 
    comments: [],
    rates: [6,9,10]
  },
  {
    owner: "",
    img: "insertar imagen",
    title: "La arquitectura moderna de Madrid",
    claim: "Imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero",
    description: "Donec imperdiet mollis condimentum. Nam nec mauris posuere, mattis nulla ut, vulputate libero. Sed ultricies lobortis bibendum. Fusce orci augue, aliquam nec accumsan id, ultrices vel sem. Cras feugiat convallis nibh in egestas. Etiam feugiat risus ante, sit amet fermentum magna pellentesque in. Sed in augue vulputate, gravida arcu quis, interdum massa. Quisque mollis euismod velit. Ut sagittis rhoncus tortor, iaculis bibendum orci dignissim eget. Curabitur volutpat, nisi sit amet condimentum sodales, nibh est finibus justo, ut placerat tortor turpis at felis. Phasellus massa diam, tempor eget sem ac, bibendum scelerisque erat. Aenean accumsan odio vel tortor facilisis, at pretium ex auctor.",
    category:["Arte y Cultura"],
    duration: 1,
    price: 15, 
    meetingPoint: "google address", 
    comments: [],
    rates: [7,8,5,10]
  },

]

let tours2= [
  
]

let tours3= [
  
]

let tours4= [
  
]

let tours5= [
  
]

let tours6= [
  
]

let tours7= [
  
]

let tours8= [
  
]

let tours9= [
  
]

let tours10= [
  
]







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
    mongoose.disconnect()
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
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})


Tour.deleteMany()
.then(() => {
  return Tour.create(tours1)
})
.then(toursCreated => {
  console.log(`${toursCreated.length} tours created with the following id:`);
  console.log(toursCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})



  // .then((toursCreated) => {
  //   toursCreated.forEach((tour)=>{
  //     Guide.find()
  //     return tour
  //   })
  //   .then((guidesFound)=>{
  //     let idGuide = guidesFound[0].id
  //     Tour.updateOne({_id:tour._id},{owner: idGuide})
  //   })
  //   .then(()=>{
  //     console.log("Milagro! Parece que todo ha ido bien")
  //   })
  // })
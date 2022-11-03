const BD = [  // Archivo JSON
    {
      name: "Victor Diaz",
      edad: 25,
      alive: true,
      email: "test@mail.com",
      password: "mencantalapizza",
    },
    {
      name: "Manuela Diaz",
      edad: 25,
      alive: true,
      email: "test@mail.com",
      password: "mencantalapizza",
    },
    {
      name: "Lorena Diaz",
      edad: 25,
      alive: true,
      email: "test@mail.com",
      password: "mencantalapizza",
    },
];

function login(){ // Función de ingreso 
    
 let email = document.getElementById("email").value
 let password= document.getElementById("password").value
 for(let user of BD){
    if(email === user.email){ 
        if (password === user.password){
            return alert("Sesión iniciada")
        }
    }
 }
 return alert("Ese usuario no existe")
}
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


function registro(){

  let newuser ={ 
    nombre: document.getElementById("Nombre").value,
    apellido: document.getElementById("Apellidos").value,
    edad: document.getElementById("Edad").value,
    cargo: document.getElementById("Cargo").value,
    documento: document.getElementById("Documento").value,
    RH: document.getElementById("RH").value,
    Telefono: document.getElementById("Telefono").value,
    Correo: document.getElementById("Correo").value,
    Contraseña: document.getElementById("Contraseña").value,
  } 
  
  for (let user of BD){
    if (newuser.nombre !== user.name){
      return alert("Usuario registrado")
    } if (newuser.Correo === user.email){
      return alert ("Usted ya está registrado")
    }
  }
}
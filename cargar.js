let tabla=[
    {nombre:'Pedro',apellido:'Gomez',direccion:'calle 8', cedula:'1223453678', telefono:'3456787431', email:'pedrogomez@hotmail.com', contraseña:'gomez5432', gruposanguineo:'A'},
    {nombre:'Juancho',apellido:'Perez',direccion:'calle 10', cedula:'2445678432', telefono:'1236543879', email:'juanchoperez@gmail.com', contraseña:'perez4672', gruposanguineo:'A'},
    {nombre:'Maria',apellido:'Gonzalez',direccion:'calle 7', cedula:'2337654890', telefono:'4106754823', email:'mariagonzalez@outlook.com', contraseña:'gonzales2146', gruposanguineo:'B'}
];
let cuerpotabla=document.getElementById('tabla-usuarios')
let i=1;
function listar(){
    let listado="";
    for (let i = 0; i < tabla.length; i++) {
        listado+=`<tr><th scope="row">${(i+1)}</th><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].direccion}</td><td>${tabla[i].cedula}</td><td>${tabla[i].telefono}</td><td>${tabla[i].email}</td><td>${tabla[i].contraseña}</td><td>${tabla[i].gruposanguineo}</td></tr>`

    }
    cuerpotabla.innerHTML=listado
}
function nuevo(){
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let direccion=document.getElementById('direccion').value;
    let cedula=document.getElementById('cedula').value;
    let telefono=document.getElementById('telefono').value;
    let email=document.getElementById('email').value;
    let contraseña=document.getElementById('contraseña').value;
    let gruposanguineo=document.getElementById('gruposanguineo').value;
    

    if (!nombre) {
        alert('Ingrese Nombre.')
        return
    }
    if (!apellido) {
        alert('Ingrese Apellido.')
        return
    }
    if (!direccion) {
        alert('Ingrese Dirección.')
        return
    }
    if (!cedula) {
        alert('Ingrese Cédula.')
        return
    }
    if (!telefono) {
        alert('Ingrese Teléfono.')
        return
    }
    if (!email) {
        alert('Ingrese Email.')
        return
    }
    if (!contraseña) {
        alert('Ingrese Contraseña.')
        return
    }
    if (!gruposanguineo) {
        alert('Ingrese Grupo Sanguineo.')
        return
    }

    cuerpotabla.innerHTML+=`<tr><th scope="row">${(i)}</th><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td><td>${cedula}</td><td>${telefono}</td><td>${email}</td><td>${contraseña}</td><td>${gruposanguineo}</td></tr>`
    i+=1
    let nuevo={nombre:nombre,apellido:apellido,direccion:direccion,cedula:cedula,telefono:telefono,email:email,contraseña:contraseña,gruposanguineo:gruposanguineo}
    tabla.push(nuevo)
    document.getElementById('nombre').value=''
    document.getElementById('apellido').value=''
    document.getElementById('direccion').value=''
    document.getElementById('cedula').value=''
    document.getElementById('telefono').value=''
    document.getElementById('email').value=''
    document.getElementById('contraseña').value=''
    document.getElementById('gruposanguineo').value=''
}
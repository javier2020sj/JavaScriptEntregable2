let alumnos = [
    {
        dni: "12345678",
        nombre: "Juan",
        apellido: "Pérez",
        edad: 20,
        curso: "Matemáticas"
    },
    {
        dni: "87654321",
        nombre: "María",
        apellido: "Gómez",
        edad: 22,
        curso: "Historia"
    },
    {
        dni: "11223344",
        nombre: "Carlos",
        apellido: "López",
        edad: 19,
        curso: "Ciencias Naturales"
    },
    {
        dni: "55667788",
        nombre: "Javier",
        apellido: "Reta",
        edad: 19,
        curso: "Historia"
    }
]

//Mostrar alumnos en la tabla
function mostrarAlumnos(listadoAlumnos) {
    let listaAlumnos = document.getElementById("tabla-alumnos");
    listaAlumnos.innerHTML = "";
    listadoAlumnos.forEach(alumno => {
        let tr = document.createElement("tr");
        let tdDni = document.createElement("td");
        tdDni.textContent = alumno.dni;
        tr.appendChild(tdDni);
        let tdNombre = document.createElement("td");
        tdNombre.textContent = `${alumno.apellido}, ${alumno.nombre}`;
        tr.appendChild(tdNombre);
        let tdEdad = document.createElement("td");
        tdEdad.textContent = alumno.edad;
        tr.appendChild(tdEdad);
        let tdCurso = document.createElement("td");
        tdCurso.textContent = alumno.curso;
        tr.appendChild(tdCurso);
        listaAlumnos.appendChild(tr);
        let tdAcciones = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.textContent = "X";
        btnEliminar.addEventListener("click", () => {
            alumnos = alumnos.filter(a => a.dni !== alumno.dni);
            mostrarAlumnos(alumnos);
        });
        tdAcciones.appendChild(btnEliminar);
        tr.appendChild(tdAcciones);
    });
}

//Filtrar alumnos por el txt
function filtrarAlumnos() {
    let filtro = document.getElementById("txtFiltro").value.toLowerCase();
    let alumnosFiltrados = alumnos.filter(alumno =>
        alumno.nombre.toLowerCase().includes(filtro) ||
        alumno.apellido.toLowerCase().includes(filtro));
    let listaAlumnos = document.getElementById("tabla-alumnos");
    mostrarAlumnos(alumnosFiltrados);

}
//boton agregar alumno
document.getElementById("btnAgregar").addEventListener("click", () => {
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let edad = parseInt(document.getElementById("txtEdad").value);
    let curso = document.getElementById("comboCurso").value;
    let dni=document.getElementById("txtDni").value;

    if (nombre && apellido && !isNaN(edad) && curso && dni) {
        alumnos.push({ dni,nombre, apellido, edad, curso });
        mostrarAlumnos(alumnos);
        document.getElementById("txtNombre").value = "";
        document.getElementById("txtApellido").value = "";
        document.getElementById("txtEdad").value = "";
        document.getElementById("txtDni").value = "";
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
});

//Ordenar por las cabeceras de la tabla
document.getElementById("thApellido").addEventListener("click", () => {
    alumnos.sort((a, b) => a.apellido.localeCompare(b.apellido));
    mostrarAlumnos(alumnos);
});

document.getElementById("thEdad").addEventListener("click", () => {
    alumnos.sort((a, b) => a.edad - b.edad);
    mostrarAlumnos(alumnos);
});

document.getElementById("thCurso").addEventListener("click", () => {
    alumnos.sort((a, b) => a.curso.localeCompare(b.curso));
    mostrarAlumnos(alumnos);
});  



//Filtro
document.getElementById("txtFiltro").addEventListener("input", filtrarAlumnos);
mostrarAlumnos(alumnos);
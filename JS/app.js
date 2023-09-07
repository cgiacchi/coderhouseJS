//CLASES Y CONSTRUCTORES CON DESCRIPCION DE LOS DEPARTAMENTOS

class Departamento {
  constructor(tipo, descripcion, precio, cantidadHuespedes) {
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidadHuespedes = cantidadHuespedes;
  }
}

const edificioSuites = [
  new Departamento("Suite Standard", "Depto doble con cama queen", 20000, 2),
  new Departamento("Suite Superior", "Depto doble con cama king", 22000, 2),
  new Departamento("Suite Deluxe", "Depto doble con cama queen y living", 24000, 2),
  new Departamento("Suite Familiar", "Depto cuadruple con cama king y 2 individuales", 26000, 4),
  new Departamento("Suite Duplex", "Depto quintuple en dos plantas con cama queen y 3 individuales", 28000, 5)
];

const edificioStudios = [
  new Departamento("Studio pb con patio", "Depto con cama individual", 14000, 1),
  new Departamento("Studio pb con cocina", "Depto con cama queen en planta baja", 16000, 2),
  new Departamento("Studio standard", "Depto doble con cama king", 18000, 2),
  new Departamento("Studio superior", "Depto doble con cama queen y living", 20000, 2),
  new Departamento("Studio triplex", "Depto cuadruple en 2 pisos y terraza con cama queen y dos individuales", 22000, 4)
];


//FORMULARIO DE BUSQUEDA

function buscarDepartamentosDisponibles() {
  const edificioSeleccionado = document.getElementById("edificio").value;
  const fechaIngreso = document.getElementById("fecha-ingreso").value;
  const fechaSalida = document.getElementById("fecha-salida").value;
  const cantidadHuespedes = parseInt(document.getElementById("huespedes").value);
  
  if (fechaIngreso === "" || fechaSalida === "") {
    alert("Por favor, selecciona las fechas de ingreso y salida.");
    return;
  }
  if (new Date(fechaIngreso) >= new Date(fechaSalida)) {
    alert("La fecha de ingreso debe ser anterior a la fecha de salida.");
    return;
  }

  const edificio = edificioSeleccionado === "suites" ? edificioSuites : edificioStudios;

  const resultados = edificio.filter(depto => {
    if (cantidadHuespedes >= 1 && cantidadHuespedes <= 2) {
      return depto.cantidadHuespedes >= 1 && depto.cantidadHuespedes <= 2;
    } else if (cantidadHuespedes >= 3 && cantidadHuespedes <= 5) {
      return depto.cantidadHuespedes >= 3 && depto.cantidadHuespedes <= 5;
    } else {
      return false;
    }
  });
  
  const resultadosDiv = document.getElementById("resultados");

  resultadosDiv.innerHTML = "";

  if (resultados.length === 0) {
    resultadosDiv.innerHTML += "<h2>Departamentos Disponibles:</h2>";
    resultadosDiv.innerHTML += "<p>No hay departamentos disponibles para las fechas y cantidad de huéspedes seleccionados.</p>";
  } else {
    resultadosDiv.innerHTML += "<h2>Departamentos Disponibles:</h2>";
    resultados.map((depto, index) => {
      resultadosDiv.innerHTML += 
      `<div>
          <h3>${depto.tipo}</h3>
          <p class="estiloParrafo">${depto.descripcion}</p>
          <p class="estiloParrafo"> Precio por noche: $${depto.precio}</p>
          <button onclick="reservarDepartamento(${index})" class="btn btn-primary btn-reservar">Reservar Departamento</button>
        </div>`;
    });
  }
}

//JSON Y STORAGE 
function reservarDepartamento(index) {
  const alertReservado = document.getElementById("alert-success");
  const alertNoReservado = document.getElementById("alert-dark");

  if (index !== undefined) {
    const departamento = edificioSuites.concat(edificioStudios)[index];
    localStorage.setItem("departamentoSeleccionado", JSON.stringify(departamento));

    const modalBody = document.getElementById("modal-success-body");
    modalBody.innerHTML = `<p>Departamento ${departamento.tipo} reservado con éxito.</p>`;

    const successModal = new bootstrap.Modal(document.getElementById("modal-success"));
    successModal.show();
    alertNoReservado.innerHTML = "";
    } 
    else {
    alertReservado.innerHTML = ""; 
  }
}
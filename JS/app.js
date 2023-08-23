alert("Bienvenido a Merlot Suites & Studios. Un lugar exclusivo donde podrás vivir una experiencia única!");

class Departamento {
  constructor(tipo, descripcion, precio) {
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.precio = precio;
  }
};

const edificioSuites = [
  new Departamento("suite standard", "depto doble con cama queen", 20000),
  new Departamento("suite superior", "depto doble con cama king", 22000),
  new Departamento("suite deluxe", "depto doble con cama queen y living", 24000),
  new Departamento("suite familiar", "depto cuadruple con cama king y dos individuales", 26000),
  new Departamento("suite duplex", "depto quintuple en dos plantas con cama queen y tres individuales", 28000)
];

const edificioStudios = [
  new Departamento("studio pb con patio", "depto con cama individual", 14000),
  new Departamento("studio pb con cocina", "depto con cama queen en planta baja", 16000),
  new Departamento("studio standard", "depto doble con cama king", 18000),
  new Departamento("studio superior", "depto doble con cama queen y living", 20000),
  new Departamento("studio triplex", "depto cuadruple en 2 pisos y terraza con cama queen y dos individuales", 22000)
];


const edificio = prompt("Dónde te gustaría hospedarte? Responde Suites o Studios").toLowerCase();
if (edificio !== "suites" && edificio !== "studios") {
  alert("Debes ingresar un nombre de edificio válido (Suites o Studios)");
} else {
  const fechaIngreso = parseInt(prompt("Por favor, ingresa la fecha de ingreso (formato: dd/mm/yyyy):"));
  const fechaSalida = parseInt(prompt("Por favor, ingresa la fecha de salida (formato: dd/mm/yyyy):"));
  const cantidadHuespedes = parseInt(prompt("Por favor, ingresa la cantidad de huéspedes:"));

  if (cantidadHuespedes < 1 || cantidadHuespedes > 5) {
    alert("Lo sentimos! No contamos con apartamentos para tantos huéspedes.");
  } else {
    let apartamentosDisponibles = [];
    let cantidadDias = parseInt(calcularCantidadDias(fechaIngreso, fechaSalida));
    console.log(parseInt(cantidadDias));

    if (edificio === "suites") {
      if (cantidadHuespedes >= 1 && cantidadHuespedes <= 2) {
        apartamentosDisponibles = edificioSuites.slice(0, 3);
      } else if (cantidadHuespedes >= 3 && cantidadHuespedes <= 5) {
        apartamentosDisponibles = edificioSuites.slice(3,6);
      }
    } else if (edificio === "studios") {
      if (cantidadHuespedes === 1) {
        apartamentosDisponibles = [edificioStudios[0]];
      } else if (cantidadHuespedes >= 2 && cantidadHuespedes <= 5) {
        apartamentosDisponibles = edificioStudios.slice(1, 4);
      }
      if (cantidadHuespedes >= 3 && cantidadHuespedes <= 4) {
        apartamentosDisponibles = [edificioStudios[4]];
      }
    }
    

    const apartamentosSeleccionados = apartamentosDisponibles.map(depto => `${depto.tipo}`).join("\n");

    alert(`Los departamentos disponibles en Syrah ${edificio} por ${cantidadDias} días y ${cantidadHuespedes} huéspedes son:\n${apartamentosSeleccionados}`);

    const deseaMasInformacion = prompt("¿Deseas más información sobre algún departamento? Responde Si o No").toLowerCase();

    if (deseaMasInformacion === "si") {
      const tipoDepartamento = prompt("Ingresa el tipo de departamento que te interesa:");
      const departamentoSeleccionado = apartamentosDisponibles.find(depto => depto.tipo === tipoDepartamento);

      if (departamentoSeleccionado) {
        alert(`Detalles del departamento:\nTipo: ${departamentoSeleccionado.tipo}\nDescripción: ${departamentoSeleccionado.descripcion}\nPrecio: ${departamentoSeleccionado.precio}`);
      } else {
        alert("No se encontró información para el tipo de departamento ingresado.");
      }
    }
  }
}

function calcularCantidadDias(fechaIngreso, fechaSalida) {
  const fechaIngresoObj = new Date(fechaIngreso);
  const fechaSalidaObj = new Date(fechaSalida);
  const cantidadMilisegundosEnUnDia = 86400000;
  const cantidadDias = Math.floor((fechaSalidaObj - fechaIngresoObj) / cantidadMilisegundosEnUnDia);
  return cantidadDias;
}
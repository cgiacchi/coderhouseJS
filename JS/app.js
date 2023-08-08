alert(`Bienvenido a Merlot Suites & Studios. Un lugar exclusivo donde podrás vivir una experiencia única!`);

function infoHospedaje() {
    let edificio = prompt(`Dónde te gustaría hospedarte? Responde Suites o Studios`).toLowerCase();
    while(edificio !== `suites` && edificio !== `studios`) {
        alert(`Debes ingresar un nombre de edificio válido (Suites o Studios).`);
        return infoHospedaje();
    }
    let huespedes = parseInt(prompt(`Indicanos la cantidad de huespedes (mínimo 1, máximo 5)`));

    if (huespedes < 1 || huespedes > 5) {
        alert(`Lo sentimos! No contamos con apartamentos para tantos huespedes.`);
        return infoHospedaje();
    }
    if (edificio === `suites` && huespedes >= 1 && huespedes <= 2){
      alert(`Merlot suites se encuentra en Palermo Hollywood. Ofrecemos piscina al aire libre en la terraza, servicios de conserjería y conexión wifi gratuita. Tenemos disponibles 3 tipos de apartamentos, Suite standard, Suite Superior y Suite Deluxe. Comunícate con nosotros para más información!`);
    } else if (edificio === `suites` && huespedes >= 3 && huespedes <= 5){
      alert(`Merlot suites se encuentra en Palermo Hollywood. Ofrecemos piscina al aire libre en la terraza, servicios de conserjería y conexión wifi gratuita. Tenemos disponibles 2 tipos de apartamentos, Suite Familiar y  Suite Duplex. Comunícate con nosotros para más información!`);
    }else if(edificio === `studios` && huespedes >= 1 && huespedes <= 2) {
      alert(`Merlot Studios se encuentra en Palermo Soho. Este complejo de apartamentos ofrece un jardin y piscina al aire libre, servicios de conserjería, conexión wifi gratuita y un circuito de spa. Tenemos disponibles 4 tipos de apartamentos, Studio PB con patio, Studio PB con cocina, Studio Standard y Studio Superior. Comunícate con nosotros para más información!`);
    } else if(edificio === `studios` && huespedes >= 3 && huespedes <= 5) {
      alert(`Merlot Studios se encuentra en Palermo Soho. Este complejo de apartamentos ofrece un jardin y piscina al aire libre, servicios de conserjería, conexión wifi gratuita y un circuito de spa. Tenemos disponible 1 tipo de apartamento, el Studio Triplex. Comunícate con nosotros para más información!`);
    }
}
infoHospedaje();

function tarifas() {
    let precioSuiteStandard = 20000;
    let precio = 0;
    let depto = prompt(`Ingrese el tipo de departamento para conocer el precio:`).toLowerCase();

    switch (depto) {
      case `suite standard`:
        precio = precioSuiteStandard;
        break;
      case `suite superior`:
        precio = precioSuiteStandard * 1.1; 
        break;
      case `suite deluxe`:
        precio = precioSuiteStandard * 1.2;
        break;
      case `suite familiar`:
        precio = precioSuiteStandard * 1.3; 
        break;
      case `suite duplex`:
        precio = precioSuiteStandard * 1.4; 
        break;
      case `studio pb con patio`:
        precio = precioSuiteStandard* 0.6; 
        break;
      case `studio standard`:
        precio = precioSuiteStandard * 0.8 ;
        break;
      case `studio superior`:
        precio = precioSuiteStandard; 
        break;
      case `studio triplex`:
        precio = precioSuiteStandard * 1.1; 
        break;
      default:
        alert(`El tipo de departamento ingresado no es válido.`);
        return;
    }
  
    alert(`El precio para el departamento ` + depto + ` es $` + precio.toFixed(2));
  }

tarifas();
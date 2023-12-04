function actualizarReloj() {
  var fecha = new Date();

  var diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  var meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  var diaSemana = diasSemana[fecha.getDay()];
  var dia = fecha.getDate();
  var mes = meses[fecha.getMonth()];
  var anio = fecha.getFullYear();

  var fechaFormateada = diaSemana + " " + dia + " de " + mes + " del " + anio;

  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var ampm = horas >= 12 ? "PM" : "AM";

  horas = horas % 12;
  horas = horas ? horas : 12;
  minutos = minutos < 10 ? "0" + minutos : minutos;

  var horaFormateada = horas + ":" + minutos + " " + ampm;

  document.getElementById("reloj").innerHTML =
    fechaFormateada + "<br>" + horaFormateada;

  setTimeout(actualizarReloj, 1000);
}

window.onload = function () {
  actualizarReloj();
};
document.addEventListener("DOMContentLoaded", function () {
  const tareaInput = document.getElementById("tarea");
  const agregarBtn = document.getElementById("agregar");
  const listaTareas = document.getElementById("listaTareas");

  agregarBtn.addEventListener("click", function () {
    const tarea = tareaInput.value.trim();

    if (tarea !== "") {
      agregarTarea(tarea);
      tareaInput.value = "";
      tareaInput.focus();
    }
  });

  function agregarTarea(tarea) {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${tarea}
      <button type="button" class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;
    listaTareas.appendChild(li);
  }

  window.eliminarTarea = function (elemento) {
    const tareaItem = elemento.parentNode;
    listaTareas.removeChild(tareaItem);
  };
});

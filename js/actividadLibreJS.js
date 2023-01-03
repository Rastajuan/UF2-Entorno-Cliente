//Asignamos al campo del formulario 'valorSalida' el 'value' introducido en 'valorEntrada' y lo transofrmamos en minusculas con la funcion toLowerCase()
function convertirMinusculas() {
  document.formulario.valorSalida.value =
    document.formulario.valorEntrada.value.toLowerCase();
}

//Asignamos al campo del formulario 'valorSalida' el 'value' introducido en 'valorEntrada' y lo transofrmamos en mayusculas con la funcion toUpperCase()
function convertirMayusculas() {
  document.formulario.valorSalida.value =
    document.formulario.valorEntrada.value.toUpperCase();
}
//Pedimos al usuario que introduzca un texto y lo guardamos en la variable miTxt mediante la funcion prompt().Con la funcion createElement() creamos un elemento de tipo párrafo <p> y lo guardamos en la variable miParrafo. Con la funcion appendChild() añadimos el elemento párrafo . Con la funcion document.getElementById() obtenemos el elemento con el id "crearParrafo" y con la propiedad textContent le asignamos el valor de la variable miParrafo.
function crearParrafo() {
  let miTxt = prompt("Introduce un texto:");
  const miParrafo = document.createElement("p");
  miParrafo.textContent = `Estos es un párrafo nuevo creado con el contenido introducido:\n ${miTxt}`;
  document.getElementById("crearParrafo").appendChild(miParrafo);
}

//Seleccionamos los elementos del html con la funcion document.getElementById() y le asignamos los valores con innerHTML
function verValoresScreen() {
  document.getElementById("altura").innerHTML =
    "El alto de su pantalla es de:" + screen.height + "px";
  document.getElementById("anchura").innerHTML =
    "El ancho de su pantalla es de :" + screen.width + " px";
  document.getElementById("color").innerHTML =
    "Su pantalla soporta color de " + window.screen.colorDepth + " bit";
}

//Creamos la variable nuevaVentana y le asignamos la funcion open() con los parametros de la url y el nombre de la ventana. Con la funcion close() cerramos la ventana. Mediante document.write() escribimos en la ventana nueva los elementos html que queramos.
function nuevaVentana() {
  var nuevaVentana;
  nuevaVentana = window.open(
    "",
    "segundaPag",
    `toolbar=yes,location=yes,menubar=no,resizable=yes,width=500,height=500`
  );
  nuevaVentana.document.write(
    "<HTML><HEAD><TITLE>Nueva Ventana</TITLE></HEAD>\n"
  );
  nuevaVentana.document.write("<BODY><form>\n");
  nuevaVentana.document.write(
    "<p>ESTA ES UNA VENTANA CREADA CON JAVASCRIPT</p>\n",
    "<p>ES TOTALMENTE FUNCIONAL, PUEDES CAMBIAR SU TAMAÑO Y MOVERLA POR EL ESCRITORIO...INTENTALO</p>\n"
  );
  nuevaVentana.document.write(
    "<input type='button' " + "value='Cerrar Ventana' onClick='window.close();'>\n"
  );
  nuevaVentana.document.write("</form>\n");
  nuevaVentana.document.write("</BODY></HTML>\n");
  nuevaVentana.document.close();
}

//!Funcion para renderizar formulario en el modal
const formulario = document.getElementById("rootForm");
const modalForm = document.getElementById('crearPeliModal');
formulario.classList.add('styleForm');

function createForm() {
    const headerForm = document.createElement('div');
    headerForm.innerHTML = `
<div class="modal-header">
<h5 class="modal-title text-center" id="exampleModalLabel">Nuevo Usuario</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
 `
    const bodyForm = document.createElement('div');
    bodyForm.innerHTML = `
<div class="modal-body">
<label>Nombre:</label>
<input type=text id=nombreInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>Apellidos:</label>
<input type=text id=apellidosInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>Correo:</label>
<input type=text id=correoInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>Telefono:</label>
<input type=text id=telefonoInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>DNI:</label>
<input type=text id=dniInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>IBAN:</label>
<input type=text id=ibanInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>Switf:</label>
<input type=text id=swiftInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>Nombre Usuario:</label>
<input type=text id=nombreUserInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>Fecha Nacimiento:</label>
<input type=text id=fechaInput class=campos required onkeyup=this.style.color='green' class=estilo-input >
<br>
<label>Genero:</label>
<select id="generoInput" name="opciones" class=campos required>
  <option value="1">Hombre</option>
  <option value="2">Mujer</option>
  <option value="3">Otros</option>
</select>
<br>
<div class="custom-control custom-switch form-group form-check">
  <input type="checkbox" class="custom-control-input required" id="publicadaInput">
  <label class="custom-control-label" for="publicadaInput">Aceptar Uso de Datos</label>
</div>
</div>
`
    const footerForm = document.createElement('div');
    footerForm.innerHTML = `<div class="modal-footer">
    <button  type="reset" class="btn btn-primary colorButton">Limpiar</button>
 <button  type="submit" class="btn btn-primary colorButton" onClick="hizoSubmit()">Crear</button>
</div>
`
    formulario.appendChild(headerForm);
    formulario.appendChild(bodyForm);
    formulario.appendChild(footerForm);

    formulario.addEventListener('onclick', e =>
    //* Efecto para los input
    {
        if (e.target.classList.contains('estilo-input')) {
            console.log(e.target)
            e.target.style.borderColor = 'yellow';
        }

    })
}

createForm();

function hizoSubmit() {
    const nombreUser = document.getElementById('nombreInput').value;
    const apellidosUser = document.getElementById('apellidosInput').value;
    const correoUser = document.getElementById('correoInput').value;
    const telefonoUser = document.getElementById("telefonoInput");
    const dniUser = document.getElementById('dniInput').value;
    const ibanUser = document.getElementById('ibanInput').value;
    const switfUser = document.getElementById('switfInput').value;
    const nombreAlias = document.getElementById('nombreUserInput').value;
    const fechaUser = document.getElementById('fechaInput').value;
    const generoUser = selectGenero.options[selectGenero.selectedIndex].text;
    const inputCheck = document.getElementById('publicadaInput');

    if (nombreUser == "" || apellidosUser == "" || correoUser == ""
        || telefonoUser == "" || dniUser == "" || ibanUser == ""
        || switfUser == "" || nombreAlias || fechaUser == ""
        || generoUser == "" || inputCheck == "") {
    } else {
        alert("Formulario Completado");
    }
}
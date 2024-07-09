
function ingresar(){
    window.location.href = "bienvenido.html";
}

function guardar(){
    let nombre = document.getElementById('txtnombre').value;
    let appaterno = document.getElementById('txtappaterno').value;
    let apmaterno = document.getElementById('txtapmaterno').value;
    let nacimiento = document.getElementById('txtnacimiento').value;
    let generoM = document.getElementById('gridRadios1');
    let carrera = document.getElementById('txtcarrera').value;
    
    let genero = '';
    if (generoM.checked) {
        genero = 'Masculino';
    } else {
        genero = 'Femenino';
    }

    if (nombre == '' || appaterno == '' || apmaterno == '' || nacimiento == '' || carrera == '') {

        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        errorM.innerHTML =
        '<div class="alert alert-danger alert-dismissible fade show" role="alert" style=""><strong>Credenciales no validas</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        error.append(errorM);

    }
    

    let datos = {
        nombre: nombre,
        appaterno: appaterno,
        apmaterno: apmaterno,
        nacimiento: nacimiento,
        genero: genero,
        carrera: carrera
    };

    }

    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })


function go(){
    Swal.fire({
        title: 'Error',
        text: 'Por favor complete los campos vacios,aprete continuar.',
        icon: 'error',
        confirmButtonText: 'Continuar'
        
    });
}
document.getElementById('btn').onclick = function(){
    go();
}
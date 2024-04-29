
var form = document.getElementById('clienteForm');

form.addEventListener('submit', function(event) {

    event.preventDefault();
    alert('Dados enviados com sucesso!');
    form.reset();
});

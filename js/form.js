function handleSubmit(event) {
  event.preventDefault(); //block para não fica recarregando a pagina no formulario 

  const modal = document.getElementById('static-modal');
  modal.classList.remove('hidden');
}



function sendwhatsapp() {
  
    var telefone = "8399419187";
    var nome = document.getElementById("first_name").value;
    var sobrenome = document.getElementById("last_name").value;
    var idade = document.getElementById("age").value;
    var descricao = document.getElementById("description").value;

    var mensagem = "Olá, meu nome é *" + nome + " " + sobrenome + "*, tenho *" + idade + "* anos e entro em contato com vocês, devido que " + descricao;

    window.open("https://api.whatsapp.com/send?phone=55" + telefone + "&text=" + encodeURIComponent(mensagem), "_blank").focus();
  }
function handleSubmit(event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Exibe o modal
  const modal = document.getElementById('static-modal');
  modal.classList.remove('hidden');

  // Adicione qualquer lógica adicional aqui, como redirecionamento para o WhatsApp
}



function sendwhatsapp() {
  
    var telefone = "83993930599";
    var nome = document.getElementById("first_name").value;
    var sobrenome = document.getElementById("last_name").value;
    var idade = document.getElementById("age").value;
    var descricao = document.getElementById("description").value;

    var mensagem = "Olá, meu nome é *" + nome + " " + sobrenome + "*, tenho *" + idade + "* anos e entro em contato com vocês, devido que " + descricao;

    window.open("https://api.whatsapp.com/send?phone=55" + telefone + "&text=" + encodeURIComponent(mensagem), "_blank").focus();
  }
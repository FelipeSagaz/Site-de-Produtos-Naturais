function otbemDados(form){

	var dados = {
		nome: form.nome.value,
		email: form.email.value,
		mensagem: form.mensagem.value,
	}
	return dados;
}

function validaDados(dados){
	var erros = [];

	if(dados.nome.length == 0) erros.push ("O nome não pode ser em branco");
	if(dados.email.length == 0) erros.push ("O e-mail não pode ser em branco");
	if(dados.mensagem.length == 0) erros.push ("A mensagem não pode ser em branco");

	return erros;
}

function exibeMensagensDeErro(erros){
		var ul = document.querySelector("#mensagem-erro");
		ul.innerHTML = "";
		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
}

var botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-envia");
  var dados = otbemDados(form);
  var erros = validaDados(dados);

  if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}

  form.reset();
  var ulErro = document.querySelector("#mensagem-erro");
	ulErro.innerHTML = "";
  alert("A mensagem foi enviada, entraremos em contato em breve!");

});

  let tarefas = [];

  function adicionarTarefa() {
  //essa variavel armazena a mensagem de sucesso
  
  let inputTarefa = document.getElementById("inputTarefa");
  let mensagem = document.getElementById("mensagem");
  //trim() remove os espaços em branco no inicio e no final da string
  let tarefa = inputTarefa.value.trim();
 
  //essa condicional verifica se o campo de tarefa esta vazio, se estiver, exibe uma mensagem de erro e retorna para a função, caso contrario, exibe a mensagem de sucesso e adiciona a tarefa a lista de tarefas
  if (tarefa == "" || tarefa == " ") {
  let mensagemerro = "Por favor, insira uma tarefa!";
  
  let mensagem = document.getElementById("mensagem");
  
  mensagem.textContent = mensagemerro;
  mensagem.style.color = "red";
  
  return;
}else {
  var mensagemsucesso = "Tarefa adicionada com sucesso!";
  mensagem.style.color = "green";
  mensagem.textContent = mensagemsucesso;
  
  tarefas.push(tarefa);
  RenderTarefas();
  inputTarefa.value = "";
}}
function RenderTarefas() {
  const listatarefa = document.getElementById("listatarefa");

  listatarefa.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
  let novaTarefa = document.createElement("li");  
  novaTarefa.textContent = tarefas[i];
  
  let botaoExcluir = document.createElement("button");
  botaoExcluir.className = "remover";
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.onclick = () => removerTarefa(i);


  let botaoEditar = document.createElement("button");
  botaoEditar.className = "editar";
  botaoEditar.textContent = "Editar";
  botaoEditar.onclick = () => editarTarefa(i);


  novaTarefa.appendChild(botaoExcluir);
  novaTarefa.appendChild(botaoEditar);
  listatarefa.appendChild(novaTarefa);
  let botao_lista = document.getElementById("botao_lista");
  }
    if (tarefas.length > 0) {
    botao_lista.style.display = "block";
}
  else {  
  botao_lista.style.display = "none";
}
}
  function removerTarefa(i) {
    tarefas.splice (i, 1)
    RenderTarefas();
  }
 function editarTarefa(i) {
  var tarefaEditada = prompt("Edite a tarefa:", tarefas[i]);
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada;
    RenderTarefas();
  }
}

function limparLista() {
  tarefas.length = 0;
  RenderTarefas();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Lista de tarefas limpa!";
  mensagem.style.color = "purple";
} 
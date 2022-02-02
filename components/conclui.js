const BotaoConcluir = () => {
  const button = document.createElement("button");

  button.classList.add("check-button");

  button.innerText = "Concluir";

  button.addEventListener('click', concluirTarefa);

  return button;
}

const concluirTarefa = (event) => {
  const botaoConcluir = event.target;

  const tarefaCompleta = botaoConcluir.parentElement;

  tarefaCompleta.classList.toggle("done");
}

export default BotaoConcluir;
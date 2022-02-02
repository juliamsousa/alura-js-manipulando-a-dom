const BotaoDeletar = () => {
  const botao = document.createElement('button');

  botao.innerText = "Apagar";

  botao.addEventListener ('click', apagarTarefa);

  return botao;
}

const apagarTarefa = (event) => {
  const botaoApagar = event.target;

  const tarefaApagada = botaoApagar.parentElement;

  tarefaApagada.remove();
}

export default BotaoDeletar;
// colocamos nosso codigo em uma func de execucao imediata
// com isso nossa regra de negocio n fica exposta
(()=> {
  const formButton = document.querySelector('[data-form-button]');

  const criarTarefa = (event)=> {
    event.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const task = document.createElement("li");
    const content = `<p class="content"> ${valor} </p>`

    task.classList.add("task");
    task.innerHTML = content;

    task.appendChild(BotaoConcluir());
    task.appendChild(BotaoDeletar());

    list.append(task);

    input.value = "";
  }

  formButton.addEventListener ('click', criarTarefa);

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

}) ();
// colocamos nosso codigo em uma func de execucao imediata
// com isso nossa regra de negocio n fica exposta
// (()=> {

import BotaoConcluir from "./components/conclui";
import BotaoDeletar from "./components/deleta";

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

// }) ();
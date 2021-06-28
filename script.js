const formButton = document.querySelector('[data-form-button]');

const criarTarefa = (event)=> {
  event.preventDefault();

  const input = document.querySelector('[data-form-input]');
  const valor = input.value;
}
formButton.addEventListener ('click', criarTarefa);
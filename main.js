const agenda = document.getElementById('agenda-atividade');
const atividades = [];
const numeros = [];

let linhas = '';

agenda.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome');
  const inputNumeroAtividade = document.getElementById('telefone');

  if(atividades.includes(inputNomeAtividade.value)) {
  } else {
    atividades.push(inputNomeAtividade.value);
    numeros.push(parseFloat(inputNumeroAtividade.value));
  
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNumeroAtividade.value}</td>`;
    linha += '</tr>';
  
    linhas += linha;  
  }

  inputNomeAtividade.value = '';
  inputNumeroAtividade.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

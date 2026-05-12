
const dadosIniciais = [
    { nome: "Mineração Extrema", quantidade: 120 },
    { nome: "Escolta", quantidade: 80 },
    { nome: "Extração", quantidade: 95 },
    { nome: "Sabotagem", quantidade: 60 },
    { nome: "Refinaria", quantidade: 110 },
    { nome: "Industrial", quantidade: 72 },
    { nome: "Pesquisa", quantidade: 40 },
    { nome: "Sobrevivência", quantidade: 130 }
];

let registros = JSON.parse(localStorage.getItem("registrosDRG")) || dadosIniciais;

function renderizarRegistros() {
    const lista = document.getElementById("lista-registros");
    lista.innerHTML = "";

    for (let i = 0; i < registros.length; i++) {
        lista.innerHTML += `
            <div class="registro filtro-item">
                <h2>${registros[i].nome}</h2>
                <p>Quantidade: ${registros[i].quantidade}</p>
            </div>
        `;
    }
}

function adicionarRegistro() {
    const nomeInput = document.getElementById("nomeMissao");
    const quantidadeInput = document.getElementById("quantidade");

    const nome = nomeInput.value;
    const quantidade = quantidadeInput.value;

    if (nome === "" || quantidade === "") {
        alert("Preencha todos os campos!");
        return;
    }

 
    registros.push({
        nome: nome,
        quantidade: Number(quantidade)
    });

    localStorage.setItem("registrosDRG", JSON.stringify(registros));

    renderizarRegistros();

    nomeInput.value = "";
    quantidadeInput.value = "";
}

renderizarRegistros();
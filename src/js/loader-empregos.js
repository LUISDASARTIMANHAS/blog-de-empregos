
const autoEmpregos = document.getElementById("autoEmpregos");
const fonte = "../src/js/"
const database = [
    {
        "empresa": "technology S.A",
        "setor": "auxiliar de servicos gerais",
        "requisitos": "informática básica, disponibilidade de horário",
        "salario": 1200,
        "previewImg": ""
    },
    {
        "empresa": "Tech importados",
        "setor": "operador de caixa",
        "requisitos": "",
        "salario": 2000
    },
    {
        "empresa": "technology S.A",
        "setor": "auxiliar de manutenção",
        "requisitos": "",
        "salario": 1300
    }
]

for (let i = 0; i < database.length; i++) {
    const emprego = database[i];
    const empresa = emprego.empresa;
    const setor = emprego.setor;
    const requisitos = emprego.requisitos;
    const salario = emprego.salario;
    const previewImg = emprego.previewImg;
    const boxElement = document.createElement("box");
    const imgElement = document.createElement("img");
    const h1Element = document.createElement("h1");
    const ulElement = document.createElement("ul");
    const liElement = document.createElement("li");
    const li2Element = document.createElement("li");
    const requisitosElement = document.createElement("li");

    if ((previewImg) && (n != "")) {
        imgElement.src = previewImg
    } else {
        imgElement.src = "./src/assets/no-image.jpeg"
    }
    boxElement.appendChild(imgElement);

    h1Element.textContent = setor
    boxElement.appendChild(h1Element);

    liElement.textContent = "Empresa: " + empresa
    ulElement.appendChild(liElement);

    if ((requisitos) && (requisitos != "")) {
        requisitosElement.textContent = "Requisitos para vaga: " + requisitos

    } else {
        requisitosElement.textContent = "Requisitos para vaga: Nenhum"
    }
    ulElement.appendChild(requisitosElement);

    li2Element.textContent = "Salario: " + salario
    ulElement.appendChild(li2Element);

    boxElement.appendChild(ulElement);

    autoEmpregos.append(boxElement);
}
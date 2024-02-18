function getDataEmpregos() {
    const url = "https://pingobras-sg.glitch.me/api/blog-de-empregos/empregos"
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
            "Authorization": "blogDeEmpregosApiKey20240101",
        }
    };

    fetch(url, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text().then((errorText) => {
                    throw new Error("Erro obter Banco de Dados dos Empregos: " + errorText);
                });
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
            loaderEmprego(data);
        })
        .catch((error) => onGetDataEmpregosError(error));
}

function onGetDataEmpregosError(error) {
    console.debug(error);
    alert(error)
}

function loaderEmprego(database) {
    const autoEmpOutros = document.getElementById("autoEmpregosOutros");
    const autoEmpRecentes = document.getElementById("autoEmpregosRecentes");
    const errorBoxOutros = document.getElementById("errorBoxOutros");
    const errorBoxRecentes = document.getElementById("errorBoxRecentes");

    for (let i = 0; i < database.length; i++) {
        console.log("ping")
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

        autoEmpOutros.appendChild(boxElement);
    }
    errorBoxOutros.style.display = "none"

    for (let i = 0; i < 3; i++) {
        console.log("ping")
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

        autoEmpRecentes.appendChild(boxElement);
    }
    errorBoxRecentes.style.display = "none"
}

getDataEmpregos();
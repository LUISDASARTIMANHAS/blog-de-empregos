const inp = document.getElementById("searchBar");
var autoSearch = true;

function search(pesq) {
    const date = new Date();
    const id = Math.floor(Math.random() * 50000);
    const url = "https://pingobras-sg.glitch.me/api/blog-de-empregos/search?q=" + pesq;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
            "Authorization": "APIKey20231030",
            "key": (date.getUTCHours() * date.getFullYear()) * id,
            "id": id
        }
    };
    fetch(url, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text();
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
        })
        .catch((err) => {
            alert(err);
            console.debug(err);
        });
}

function res(data, variavel) {
    variavel.value = data;
}
if (autoSearch && inp) {
    inp.addEventListener("keyup", () => {
        search(inp.value)
    })
}

function setAutoPesquisar(element, event) {
    if (event) {
        element.addEventListener(event, () => {
            search(element.value)
        })
    } else {
        element.addEventListener("onkeyup", () => {
            search(element.value)
        })
    }
}
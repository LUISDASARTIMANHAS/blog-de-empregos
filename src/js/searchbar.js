const inp = document.getElementById("searchBar");
var autoSearch = false;
search("Sapo");

function search(pesq) {
    const url = "https://pingobras-sg.glitch.me/blog-de-empregos/search?q=" + pesq;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
            Authorization: "",
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
            res(data, variavel);
        })
        .catch((error) => {
            res(error);
        });
}

function res(data, variavel) {
    variavel.value = data;
}
if (autoSearch && inp) {
    inp.addEventListener("keyup", search(inp.value))
}

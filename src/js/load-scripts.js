function importJs() {
    const autoscripts = document.querySelector("autoscripts");
    const fonte = "../src/js/"
    const srcs = [
        "load-css",
        "copyright",
        "searchbar"
    ]
    const importFiles = [
        "functions"
    ]

    for (let i = 0; i < srcs.length; i++) {
        const src = srcs[i]
        const link = fonte + src + ".js"
        var newScript = document.createElement('script');

        newScript.setAttribute('src', link);
        autoscripts.appendChild(newScript)

        console.log("Carregando script: " + link)
    }

    for (let i = 0; i < importFiles.length; i++) {
        const src = importFiles[i]
        const link = "https://pingobras.glitch.me/src/js/" + src + ".js"
        var newScript = document.createElement('script');

        newScript.setAttribute('src', link);
        autoscripts.appendChild(newScript)

        console.log("Importando script: " + link)
    }
}
importJs();
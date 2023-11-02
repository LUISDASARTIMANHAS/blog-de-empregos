function importarCss() {
    const links = document.querySelector("links");
    const fonte = "./src/css/"
    const srcs = [
        "style",
        "reset"
    ];
    const srcsLinksFonts = [
        "4.7.0/css/font-awesome.min.css"
    ];

    for (let i = 0; i < srcs.length; i++) {
        const src = srcs[i];
        const link = fonte + src + ".css"
        var newLink = document.createElement("link");

        newLink.setAttribute("href", link);
        newLink.rel = "stylesheet";
        links.appendChild(newLink);

        console.log("Carregando css: " + link);
    }

    for (let i = 0; i < srcsLinksFonts.length; i++) {
        const head = document.querySelector("head");
        var newLink = document.createElement("link");

        newLink.setAttribute("href", "https://stackpath.bootstrapcdn.com/font-awesome/" + srcsLinksFonts[i]);
        newLink.rel = "stylesheet";
        head.appendChild(newLink);

        console.log("Novo Link de fonte css Num: " + srcsLinksFonts[i]);
    }

}
importarCss();
const style = "bg-white/10 hover:bg-white/15 hover:cursor-pointer transition-all w-64 h-48 rounded-md";

const href = (url) => {
    window.location.replace(url);
}

fetch(("./database/entries.json")).then((response) => response.json()).then((json) => {
    const container = document.getElementById("box_container");
    for (let index in json) {
        const name = json[index].name;
        const url = json[index].url;
        container.innerHTML += `
        <div class="${style} flex items-center justify-center text-center" onClick="href('${url}')">
            <h1 class="text-4xl font-bold text-white">${name}</h1>
        </div>
        `;
    }

});
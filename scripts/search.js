
const main = () => {

    const baseURL = "https://google.com/search?q=";
    const input = document.getElementById("query");
    input.onkeydown = (event) => {
        const query = input.value;
        if (event.key === "Enter" && query) {
            window.location.replace(`${baseURL}${query.replaceAll(" ", "+")}`)
        }
    }
}

const searchButton = () => {
    const baseURL = "https://google.com/search?q=";
    const input = document.getElementById("query");
    const query = input.value;
    if (query) window.location.replace(`${baseURL}${query.replaceAll(" ", "+")}`);

}

addEventListener("load", main);
// create a create new keyword button
document.getElementById("my_form").addEventListener("submit", createButton);

function createButton(e) {
    e.preventDefault();
    const inputKeyWord = e.target.query.value;
    e.target.query.value = "";
    console.log(inputKeyWord);

    const createdButton = document.createElement("button");
    createdButton.type = "button";
    createdButton.innerText = inputKeyWord;
    document.getElementById("main_body").appendChild(createdButton);
    addBtnListener();
}

function addBtnListener(e) {
    let what = e.target;
    console.log(what);
}

function getGifs(e) {
    const inputKeyWord = e.target.query.value;
    e.target.query.value = "";

    const apiKey = "HnjTa3OFMAQ4fU1Ee82yCcyU4I6NsKwl";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputKeyWord}&limit=12`

    fetch(URL)
        .then((res) => res.json())
        .then((gifs) => {
            const giphies = gifs.data;
            document.getElementById("container").innerHTML = "";
            showGifs(giphies);
        })
        .catch((err) => console.log(err));
}

function showGifs(gifs) {
    for (const gif of gifs) {
        const title = gif.title;
        const imageUrl = gif.images.fixed_height_small.url;

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";

        card.innerHTML = `
        <img src=${imageUrl} class="card-img-top" alt=${title}>
        <div class="card-body">
        <p class="card-text">
        ${title}</p>
        </div>
        `;
        document.getElementById("container").appendChild(card);
    }
}

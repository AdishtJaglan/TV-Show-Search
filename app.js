const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchVal = form.elements.query.value;
    const config = {
        params: {
            q: searchVal
        }
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

    getImage(res.data);
    form.elements.query.value = '';
});

const getImage = (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement("img");

            newImg.src = result.show.image.medium;
            document.body.append(newImg);
        }
    }

}
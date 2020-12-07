const filmImg = document.querySelector(".film img");
const filmContent = document.querySelector(".content");
const filmName = document.querySelector("[name = 'name']");
const filmYear = document.querySelector("[name = 'year']");
const filmbtn = document.querySelector("[name = 'Send']");

filmbtn.addEventListener("click", (e) => {
    const getMovieRequest = new XMLHttpRequest();

    const formValues = new FormData();

    formValues.append("name", filmName.value);
    formValues.append("year", filmYear.value);

    let str = "http://www.omdbapi.com/?t=" + formValues.get("name") + "&y=" + formValues.get("year") + "&apikey=365d77a0";

    getMovieRequest.open("GET", str);

getMovieRequest.addEventListener("readystatechange", () => {

    if (getMovieRequest.readyState == XMLHttpRequest.DONE) {
        switch (getMovieRequest.status) {
            case 200:
                {
                    const moviedObj = JSON.parse(getMovieRequest.responseText);
                    console.dir(moviedObj);

                    filmImg.src = moviedObj.Poster;

                    while (filmContent.firstChild) {
                        filmContent.removeChild(filmContent.firstChild);
                    }
                    
                    var theFirstChild = filmContent.firstChild;


                    var newElement = document.createElement("h1");
                    newElement.innerHTML = "Title: " + moviedObj.Title;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Year: " + moviedObj.Year;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Director: " + moviedObj.Director;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Writer: " + moviedObj.Writer;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Actors: " + moviedObj.Actors;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Awards: " + moviedObj.Awards;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "imdbRating: " + moviedObj.imdbRating;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Released: " + moviedObj.Released;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Language: " + moviedObj.Language;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Runtime: " + moviedObj.Runtime;

                    filmContent.insertBefore(newElement, theFirstChild);

                    newElement = document.createElement("h5");
                    newElement.innerHTML = "Plot: " + moviedObj.Plot;

                    filmContent.insertBefore(newElement, theFirstChild);

                    return moviedObj;

                    break;
                }
            case 404:
                {
                    return {};
                    break;
                }
        }

    }

});

getMovieRequest.send();
})



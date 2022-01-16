const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

ageSelector.addEventListener("change",selectMovie);
genreSelector.addEventListener("change",selectMovie);

btn.addEventListener('click',selectMovie);

const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance"
    }
]

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.
function selectMovie(){
    const rating = ageSelector.value;
    const genre = genreSelector.value;

    const ageFilteredMovies = moviesArr.filter(movie => rating === movie.age && genre === movie.genre);
    if(ageFilteredMovies.length === 1){
        suggestedMovie.textContent = ageFilteredMovies[0].name;
    }
}

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 
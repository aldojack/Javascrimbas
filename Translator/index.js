const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
const datalist = document.getElementById('language-list');
languageSelector.addEventListener("change", translate);

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    },
    {
        language: "German",
        greeting: "	Frohe Weihnachten!"
    },
    {
        language: "Swedish",
        greeting: "God Jul!"
    },
    {
        language: "Chinese",
        greeting: "	聖誕快樂!"
    },
    {
        language: "Japanese",
        greeting: "メリークリスマス!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Italian",
        greeting: "Buon Natale!"
    },
    {
        language: "French",
        greeting: "Joyeux Noël!"
    },
    {
        language: "Dutch",
        greeting: "Vrolijk kerstfeest!"
    },
    {
        language: "Portuguese",
        greeting: "Feliz Natal!"
    }
]

function generateList(){
    greetingsArr.forEach(language => {
        const option = document.createElement('option')
        option.setAttribute('value',language.language);
        datalist.appendChild(option);
    })
}

function translate(){
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
    const newLanguage = greetingsArr.find(language => language.language === this.value);
    greetingDisplay.textContent = newLanguage.greeting
    this.setAttribute('placeholder', this.value);
    this.value = "";
}

generateList();

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".

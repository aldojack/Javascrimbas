const btn = document.getElementById("btn")
let food = document.getElementById("food")
const guests = document.getElementById('guests');
const vegetarian = document.getElementById('vegetarian-input');
const dinners = [
    {
    name: "Turkey",
    partySize: 4,
    vegetarian: false
},
{
    name: "Goose",
    partySize: 8,
    vegetarian: false
},
{
    name: "Ham Joint",
    partySize: 5,
    vegetarian: false
},
{
    name: "Nut Roast",
    partySize: 4,
    vegetarian: true
},
{
    name: "Vegetarian Wellington",
    partySize: 8,
    vegetarian: true  
},
{
    name: "Chestnut loaf with sweet potato and apricot",
    partySize: 5,
    vegetarian: true
}]
btn.addEventListener('click',checkRequirements);

function checkRequirements(){
    if(guests.value > 0){

        if(vegetarian.checked){
            const vegMeals = dinners.filter(meal => meal.vegetarian === true && meal.partySize >= guests.value || meal.partySize === guests.value);
            if(vegMeals.length > 1){
                const randomIndex = Math.floor(Math.random()*vegMeals.length);
                const idealMeal = vegMeals[randomIndex].name;
                food.textContent = idealMeal;
            }
            else{
                const idealMeal = vegMeals[0].name;
                food.textContent = idealMeal;
            }
        }
        else{
            const meatMeals = dinners.filter(meal => meal.vegetarian === false && meal.partySize >= guests.value);

            if(meatMeals.length > 1){
                const randomIndex = Math.floor(Math.random()*meatMeals.length);
                const idealMeal = meatMeals[randomIndex].name;
                food.textContent = idealMeal;
            }
            else{
                const idealMeal = meatMeals[0].name;
                food.textContent = idealMeal;
            }
        }
        //Find meals greater than or equal to party size
        //If more than one meal then random generate which meal
    }
    else{
        console.log("error");
        //Display error to say invalid option and focus on input field
    }
}

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.


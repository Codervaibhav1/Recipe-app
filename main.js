let Myform = document.querySelector("form")
let input = document.querySelector('#input')
let card =document.querySelector("#item")
let cardItem = document.querySelector("#card-item")
let head = document.querySelector('.card-header')
const getRecipe= async(e)=>{
    e.preventDefault()
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
   let data = await response.json()
   console.log(data)
   head.innerHTML = input.value
   card.innerHTML =`Area :- ${data.meals[0].strArea}<br>
   Category :-  ${data.meals[0].strCategory}<br>
   Ingredient :-  ${data.meals[0].strIngredient1 
   } , ${data.meals[0].strIngredient2 },
   ${data.meals[0].strIngredient3},
   ${data.meals[0].strIngredient4},
   ${data.meals[0].strIngredient5},
   ${data.meals[0].strIngredient6},
   ${data.meals[0].strIngredient7}
   <br>
   <ul class="list-group list-group-flush">
   <div class="card-header text-center bg-warning">
   <h3 class="text-center">Instructions</h3>
   ${data.meals[0].strInstructions}
 </div>
    </ul>
`
cardItem.className = 'card w-50 ms-5 mt-2 '
   Myform.reset()
}

Myform.addEventListener("submit" ,getRecipe)
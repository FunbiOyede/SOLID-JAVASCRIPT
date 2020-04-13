//the bad
const MilkshakeIngredients = ["sugar, milk,water"];
const milkshakeMaker = {
    milkshakeMaker(ingredient){
        if(MilkshakeIngredients.indexOf(ingredient) > -1){
            console.log("you have your milk shake")
        }else{
            console.log("No you dont")
        }
    }
}

//N:B imagine there is a need to add an ingredients to the array above days after wrtiting, doing that you arent following the
// THE OPEN CLOSED PRINCIPLE


// THE GOOd
const MilkshakeIngredients = ["sugar, milk,water"];
const milkshakeMaker = {
    milkshakeMaker(ingredient){
        if(MilkshakeIngredients.indexOf(ingredient) > -1){
            console.log("you have your milk shake")
        }else{
            console.log("No you dont")
        }
    },

    addIngredient(ingredient){
      MilkshakeIngredients.push(ingredient)
      console.log(MilkshakeIngredients)
    }
}

const brewTea = () => {
    console.log("tea brewed!")
}

const addSugar = () => {
    console.log("Sugar added!")
}

const addScoby = () => {
    console.log("Weird alien scoby added!")
}


const brewKombucha = (daysOfFermentation, bottleOpeningCallback) => {
    brewTea()
    addSugar()
    addScoby()
    bottleOpeningCallback(daysOfFermentation)
}

const bottleOpening = (brewLength) => {
    if (brewLength > 7) {
        console.log("Lookout! Booch explosion!")
    } else {
        console.log("Yum, kombucha")
    }
}

brewKombucha(8, bottleOpening)



// brewTea()

// class Kitchen {
//     // constructor

//     makeDrink(brewingCallbackFunction) {
//         console.log("the kitchen is now being used to make a beverage")
//         brewingCallbackFunction()
//     }
// }

// kitchen1 = new Kitchen()
// kitchen.makeDrink(brewTea())
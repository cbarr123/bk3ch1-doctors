// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}
const drSmith = createDoctor("James Smith", "Oncology", "221 Bluebird Lane")
console.log(drSmith)
//-----------------------------
const pets = () => {
    let petName = prompt("Enter Dog Name")
    
    return console.log(petName)
    
    

}
pets()




const createPet = (petName, petBreed) => {
    return {
        name: petName,
        breed: petBreed
    }
}

const dog = createPet("Snoopy", "Beagle")
console.log(dog)






//---------------------------------------------
const ringContainer = document.querySelector(".newRing")

const rendor = (ringString) => {
    ringContainer.innerHTML += ringString
}

const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: metal.price + style.price + carets.price
    }
}

const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])
// Then add order to customer's shopping cart

rendor(`You have ordered a ${newRingOrder.style.toLowerCase()} style ${newRingOrder.metal.toLowerCase()} ring with a ${newRingOrder.carets} caret diamond. The ring will cost ${newRingOrder.price}.`)
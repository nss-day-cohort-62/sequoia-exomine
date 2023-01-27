import { Exomine } from "./Exomine.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
     
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})


/*
Tried document getElementById to save the value of the current selected governor

   const govList = document.getElementById("gov");
        const value = govList.options[govList.selectedIndex].value;
        console.log(value)

*/
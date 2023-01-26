import { getGovernors, setGovernor, isGovernorSelected } from "./database.js";

const governors = getGovernors()

//event listener to set the governor in temporary state
document.addEventListener(
    "change", 
    (event) => {
        if (event.target.id === "gov"){
            setGovernor(parseInt(event.target.value))
        }
}
)

export const Governors = () => {
    let html = "<h2>Governors</h2>"

    html += '<select id="gov">'
    html += '<option value="0">Select A Governor</option>'

    const listItems = governors.map(gov=>{
        return `<option value="${gov.id}" ${isGovernorSelected(gov.id)}> ${gov.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"
    return html

}
import { getGovernors } from "./database.js";


const governors = getGovernors()

export const Governors = () => {
    let html = "<h2>Governors</h2>"

    html += '<select id="gov">'
    html += '<option value="0">Select A Governor</option>'

    const listItems = governors.map(gov=>{
        return `<option value="${gov.id}"> ${gov.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"
    return html

}
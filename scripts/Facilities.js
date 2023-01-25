import { getFacilities } from "./database.js";


const facilities = getFacilities()


export const Facilities = () => {
    let html = "<h2>Facilities</h2>"

    html += "<select id='facility'>"
    html += "<option value='0'>Select A Facility</option>"
    
    const listItems = facilities.map(facility => {
        return `<option value="${facility.id}">${facility.mine}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}
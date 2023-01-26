import { getFacilities, isFacilityDisabled, isFacilitySelected, setFacility } from "./database.js";


const facilities = getFacilities()

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "facility") {
            setFacility(parseInt(event.target.value))
        }
    }
)

export const Facilities = () => {
    let html = "<h2>Facilities</h2>"

    html += `<select id='facility' ${isFacilityDisabled()}>`
    html += "<option value='0'>Select A Facility</option>"
    
    const listItems = facilities.map(facility => {
        return `<option ${isFacilitySelected(facility.id)} value="${facility.id}">${facility.mine}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}
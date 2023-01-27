import { getColonyMinerals } from "./database.js"




export const SpaceCart = () => {
    const minerals = getColonyMinerals()

    let html = "<ul>"

    const listItems = minerals.map((mineral) => {
        return `<li>${mineral.mineralId}</li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
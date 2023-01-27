import { getMineralId, getMinerals } from "./database.js";


export const SpaceCart = () => {
    const mineralId = getMineralId()
    const minerals = getMinerals()
    let html = "<h2>Space Cart</h2>"
    const chosenMineral = minerals.find(mineral => mineralId === mineral.id)

    if (chosenMineral) {
    html+= `<p>1 ton of ${chosenMineral.type}</p>`
    } else {
        html+= ""
    }
    return html
}
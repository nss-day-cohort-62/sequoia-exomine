import { getGovernorId, getColonies, getGovernors, setColony, getColonyMinerals} from "./database.js";



export const Colonies = () => {
    const governors = getGovernors()
    const gov = getGovernorId()
    const colonies = getColonies()
    const purchases = getColonyMinerals()
    let html = ""
    /*
    Conditional Rendering. Because the page is loading all at once, colonyId 
    doesn't exist yet. So need a ? to say "if this exists, access this property"
    used in .find making object?.property
    */
    
    
    const lastPurchase = purchases.pop()
    const lastGovId = lastPurchase?.governorId
    console.log(lastGovId)

    if (gov) {
        const foundGov = governors.find(governor => gov === governor.id)
        const foundColony = colonies.find(colony => foundGov.colonyId === colony.id)
        //This caused our call stack error, because it is not a change event
            setColony(foundColony.id)
        html += `<h2>${foundColony.location} Minerals</h2>`

    } else if (lastGovId) {
        const foundGov = governors.find(governor => lastGovId === governor.id)
        const foundColony = colonies.find(colony => foundGov.colonyId === colony.id)
        setColony(foundColony.id)
        html += `<h2>${foundColony.location} Minerals</h2>`
    } else {
        return html += "<h2>Colony Minerals</h2>"
    }
return html
}
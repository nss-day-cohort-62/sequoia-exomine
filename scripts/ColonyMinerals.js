import { getGovernorId, getColonies, getGovernors, setColony} from "./database.js";



export const Colonies = () => {
    const governors = getGovernors()
    const gov = getGovernorId()
    const colonies = getColonies()
    let html = ""
    /*
    Conditional Rendering. Because the page is loading all at once, colonyId 
    doesn't exist yet. So need a ? to say "if this exists, access this property"
    alt "if, and if not, when" used in .find making object?.property
    */
    if (gov) {
        const foundGov = governors.find(governor => gov === governor.id)
        const foundColony = colonies.find(colony => foundGov.colonyId === colony.id)
            setColony(foundColony.id)
        html += `<h2>${foundColony.location} Minerals</h2>`
        
    } else {
        return html += "<h2>Colony Minerals</h2>"
    }
return html
}

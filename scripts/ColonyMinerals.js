import { getGovernorId, getColonies, getGovernors} from "./database.js";

const governors = getGovernors()

export const Colonies = () => {
    const gov = getGovernorId()
    const colonies = getColonies()
    //console.log(gov)
    let html = ""
    let govColony = null
    //use the governor id to iterate through governor objects, finding the appropriate colony id
    //use the found colony id to access appropriate colony object
    //use that to print out colony name
    for (const governor of governors) {
        if (gov === governor.id) {
        govColony = governor.colonyId  
    }}
    for (const colony of colonies){
            if (govColony === colony.id ){
                return html += `<h2>${colony.location} Minerals</h2>`
            } 
            else {
                return html += "<h2>Colony Minerals</h2>"
            }
        }
        return html
}

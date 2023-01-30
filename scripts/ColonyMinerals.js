import { getGovernorId, getColonies, getGovernors, setColony, getColonyMinerals,getMinerals, setGovernor} from "./database.js";



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

    if (gov) {
        const foundGov = governors.find(governor => gov === governor.id)
        const foundColony = colonies.find(colony => foundGov.colonyId === colony.id)
        //This caused our call stack error, because it is not a change event
            setColony(foundColony.id)
        html += `<h2>${foundColony.location} Minerals</h2>`

    } else if (lastGovId) {
        const foundGov = governors.find(governor => lastGovId === governor.id)
        const foundColony = colonies.find(colony => foundGov.colonyId === colony.id)
        //filter colonyMinerals population using the foundColony.id and return array to display
        const purchasedMinerals = getColonyMinerals()
        const matchedColonyMinerals = purchasedMinerals.filter(purchasedMineral => foundColony.id === purchasedMineral.colonyId)
        
        setColony(foundColony.id) 
        setGovernor(foundGov.id)
        html += `<h2>${foundColony.location} Minerals</h2>`
       
        html += `<ul>
        ${matchedColonyMinerals.map(
        (purchase) => {
            return matchPurchasedMinerals(purchase)
        }
         ).join("")}
         </ul>
         `
    
    } else {
        return html += "<h2>Colony Minerals</h2>"
    }
return html
}



const matchPurchasedMinerals = (purchase) => {
    const minerals = getMinerals()

    
    const matchedMineral = minerals.find(mineral => mineral.id === purchase.mineralId)
    
    
    //NEED TO SET COLONY AGAIN AFTER PURCHASE
    return `<li> purchased 1 ton of ${matchedMineral.type}</li>`
}

// export const PurchasedMinerals = () => {
//     const purchasedMinerals = getColonyMinerals()
//     const colonies = getColonies()


//     //const allSpice = purchasedMinerals.filter(purchasedMineral => purchasedMineral.mineralId === 1)
//     //each colony needs an array of minerals
//     //each colony's minerals needs an array return the length
//     let colonyCollectionArr = []
//     for (const colony of colonies) {
//         for (const mineral of purchasedMinerals) {
//             if (mineral.colonyId === colony.id) {
//                 colonyCollectionArr.push(mineral)
//                 console.log(colonyCollectionArr)
//             }
//         }
//     }
       
        
//         colonyCollectionArr.filter(collection => collection.mineralId === collection.minerlId)
    

    
//     return `<ul>
//         ${purchasedMinerals.map(
//         (purchase) => {
//             return matchPurchasedMinerals(purchase)
//         }
//     ).join("")}
//     </ul>
//     `
// }
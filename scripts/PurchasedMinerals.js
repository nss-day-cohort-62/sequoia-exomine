// import { getColonies, getColonyMinerals, getMinerals } from "./database.js"


//IMPORTED INTO COLONYMINERALS.JS
// const matchPurchasedMinerals = (purchase) => {
//     const minerals = getMinerals()
//     const colonies = getColonies()
    
//     const matchedMineral = minerals.find(mineral => mineral.id === purchase.mineralId)
    
//     const matchedColony = colonies.find(colony => colony.id === purchase.colonyId)
//     //NEED TO SET COLONY AGAIN AFTER PURCHASE
//     return `<li>${matchedColony.location} purchased ${matchedMineral.type}</li>`
// }

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


// /*
// Purchased Minerals
// Access the minerals array in order to get the type
// Access the colonies array in order to know which colony to display it under
// Capture the length of how many of a type of mineral to display how many tons 
// -find mineralId return the length
// Make a new array of purchase.mineralId then return the length
// */

//   /*
//     const matchMineralName = () => {
//     for (const mineral of minerals) {
//         for (const purchasedMineral of purchasedMinerals) {
//             if (purchasedMineral.mineralId === mineral.id) {
//                 return mineral.type
//             }

//         }
//     }
// }
// */

// /*    const listItems = minerals.map((mineral) => {
//         return `<li>${mineral.mineralId}</li>`
//     })

//     html += listItems.join("")
//  */ 
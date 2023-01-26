import {getMinerals, getFacilities} from "./database.js" 

const minerals = getMinerals()
const facilities = getFacilities()

//I'll be back!!!
// export const Minerals = () => {
//     let html = "<h2>Minerals</h2>"
//     html += `<li>${matchedFacility(mineral)}</li>`

// }

// const matchedFacility = (mineral, facilities) =>{
//     let facilityMatch = ""
//     facilityMatch = facilities.find(facility => facility.id === mineral.facilityId){
//     }
//     return facilityMatch.mine
// }
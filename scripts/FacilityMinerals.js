import {getMinerals, getFacilities, getFacilityId, setMineral, isMineralSelected} from "./database.js" 

document.addEventListener(
    "change", (event) => {
    if (event.target.name === "mineral") {
        setMineral(parseInt(event.target.value))
    }
})


export const Minerals = () => {
    const minerals = getMinerals()
    const facilities = getFacilities()
    const facilityId = getFacilityId()
    let html = "<h2>Minerals for Purchase</h2>"
    html += "<ul class='selectMineral'>"

    if (facilityId) {
        const foundFacility = facilities.find(facility => facilityId === facility.id)
        const foundMinerals = minerals.filter(mineral => foundFacility.id === mineral.facilityId)
        const listMinerals = foundMinerals.map(foundMineral => {
            return `<li>
            <input type="radio" name="mineral" ${isMineralSelected(foundMineral.id)} value="${foundMineral.id}" />${foundMineral.inventory} tons of ${foundMineral.type}</li>`
        })
        html += listMinerals.join("")
    }
    html += "</ul>"
    return html
}


// const matchedFacility = (mineral, facilities) =>{
//     let facilityMatch = ""
//     facilityMatch = facilities.find(facility => facility.id === mineral.facilityId){
//     }
//     return facilityMatch.mine
//}
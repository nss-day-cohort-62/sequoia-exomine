const database = {
    governors: [
        { id: 1, name: "Paul Atreides", colonyId: 1, activeStatus: true },
        { id: 2, name: "Ricky Rocket", colonyId: 2, activeStatus: true },
        { id: 3, name: "Hal 9000", colonyId: 3, activeStatus: true },
        { id: 4, name: "Box", colonyId: 4, activeStatus: true },
        { id: 5, name: "Mad Max", colonyId: 5, activeStatus: true },
        { id: 6, name: "Darth Vader", colonyId: 6, activeStatus: true }
    ],
    colonies: [
        { id: 1, location: "Arakis", governorId: 1},
        { id: 2, location: "Death Star", governorId: 2},
        { id: 3, location: "Vulcan", governorId: 3},
        { id: 4, location: "Pandora", governorId: 4},
        { id: 5, location: "Polaris", governorId: 5},
        { id: 6, location: "Moon", governorId: 6}
    ],
    facilities: [
        { id: 1, mine: "Io", activeStatus: true },
        { id: 2, mine: "Titan", activeStatus: true },
        { id: 3, mine: "Ganymede", activeStatus: true }
    ],
    minerals: [
        {id: 1, type: "Spice", facilityId: 1, inventory: 20},
        {id: 2, type: "Delithium Crystals", facilityId: 3, inventory: 50},
        {id: 3, type: "Gold pressed Latinum", facilityId: 3, inventory: 15},
        {id: 4, type: "Latikia", facilityId: 2, inventory: 19},
        {id: 5, type: "Meteors", facilityId: 1, inventory: 100},
    ],
    colonyMinerals: [
        {
            id: 1,
            colonyId: 2,
            mineralId: 4
        }
    ],
    spaceCart: {}
}

export const getGovernors = () => {
    return database.governors.map(g => ({...g}))
}

export const getColonies = () => {
    return database.colonies.map(c => ({...c}))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getMinerals = () => {
    return database.minerals.map(m => ({...m}))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(cm => ({...cm}))
}

//BELOW IS STARTER CODE


export const setFacility = (facilityId) => {
    database.spaceCart.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


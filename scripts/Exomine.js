import { Facilities } from "./Facilities.js"
import { Governors } from "./Governors.js"
import { Colonies } from "./ColonyMinerals.js"
import { Minerals } from "./FacilityMinerals.js"
import { addMineralsToColony } from "./database.js"
import { SpaceCart } from "./SpaceCart.js"





document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "buy") {
            addMineralsToColony()
        }
    }
)







export const Exomine = () => {
    return `
    <header class="header">
    <h1>Space Mining</h1>
    </header>
    <div class="topContainer">
        <div id="dropdownChoices">
            <article class="govChoice">
                ${Governors()}
            </article>
            <article class="facilityChoice">
                ${Facilities()}
            </article>
        </div>
        <article class="colonyMinerals">
                 ${Colonies()}
                 ${SpaceCart()}
        </article>
    </div>
    <div class="bottomContainer">
        <article class="mineralChoices">
            ${Minerals()}
        </article>
        <article class="spaceCart">
        <button type="button" id="buy">Purchase Mineral</button>
        </article>
    </div>
    `
}
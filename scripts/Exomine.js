import { Facilities } from "./Facilities.js"
import { Governors } from "./Governors.js"



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
        </article>
    </div>
    <div class="bottomContainer">
        <article class="mineralChoices">
        </article>
        <article class="spaceCart">
        <button type="button" id="buy">Purchase Mineral</button>
        </article>
    </div>
    `
}
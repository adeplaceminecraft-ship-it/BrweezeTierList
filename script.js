// ========================================
// GAMEMODES
// ========================================

const gamemodes = [
    {
        name: "Sword",
        icon: "./sword.png"
    },

    {
        name: "Axe",
        icon: "./axe.png"
    },

    {
        name: "Mace",
        icon: "./mace.png"
    },

    {
        name: "UHC",
        icon: "./uhc.png"
    },

    {
        name: "Pot",
        icon: "./pot.png"
    },

    {
        name: "NethPot",
        icon: "./nethpot.png"
    },

    {
        name: "SMP",
        icon: "./smp.png"
    },

    {
        name: "DiaSMP",
        icon: "./diasmp.png"
    },

    {
        name: "Cart",
        icon: "./cart.png"
    },

    {
        name: "SpearMace",
        icon: "./spear.png"
    },

    {
        name: "KoalaPvP",
        icon: "./koala.png"
    },

    {
        name: "Vanilla",
        icon: "./vanilla.png"
    }
];

// ========================================
// PLAYERS
// ========================================

const players = [

    {
        name: "Kappa8081",
        points: 0,
        image: "https://mc-heads.net/avatar/Kappa8081/100",

        tiers: {
            Sword: "T5",
            Axe: "T5",
            Mace: "T5",
            UHC: "T5",
            Pot: "T5",
            NethPot: "T5",
            SMP: "T5",
            DiaSMP: "T5",
            Cart: "T5",
            SpearMace: "T5",
            KoalaPvP: "T5",
            Vanilla: "T5"
        }
    },


    {
        name: "Femyth",
        points: 0,
        image: "https://mc-heads.net/avatar/Femyth/100",

        tiers: {
            Sword: "T5",
            Axe: "T5",
            Mace: "T5",
            UHC: "T5",
            Pot: "T5",
            NethPot: "T5",
            SMP: "T5",
            DiaSMP: "T5",
            Cart: "T5",
            SpearMace: "T5",
            KoalaPvP: "T5",
            Vanilla: "T5"
        }
    },


    {
        name: "CocoMineru",
        points: 24,
        image: "https://mc-heads.net/avatar/CocoMineru/100",

        tiers: {
            Sword: "T1",
            Axe: "T5",
            Mace: "T2",
            UHC: "T5",
            Pot: "T5",
            NethPot: "T5",
            SMP: "T5",
            DiaSMP: "T5",
            Cart: "T5",
            SpearMace: "T2",
            KoalaPvP: "T5",
            Vanilla: "T5"
        }
    },


    {
        name: "_AbyssalMC_",
        points: 37,
        image: "https://mc-heads.net/avatar/_AbyssalMC_/100",

        tiers: {
            Sword: "T2",
            Axe: "T1",
            Mace: "T1",
            UHC: "T5",
            Pot: "T5",
            NethPot: "T5",
            SMP: "T5",
            DiaSMP: "T5",
            Cart: "T5",
            SpearMace: "T1",
            KoalaPvP: "T5",
            Vanilla: "T5"
        }
    },


    {
        name: "seby88213",
        points: 7,
        image: "https://mc-heads.net/avatar/seby88213/100",

        tiers: {
            Sword: "T5",
            Axe: "T2",
            Mace: "T5",
            UHC: "T5",
            Pot: "T5",
            NethPot: "T5",
            SMP: "T5",
            DiaSMP: "T5",
            Cart: "T5",
            SpearMace: "T5",
            KoalaPvP: "T5",
            Vanilla: "T5"
        }
    }

];


// ========================================
// SORT OVERALL LEADERBOARD
// ========================================

players.sort(function(a, b) {
    return b.points - a.points;
});


// ========================================
// OVERALL LEADERBOARD
// ========================================

const leaderboard =
    document.getElementById("leaderboard");


players.forEach(function(player, index) {

    let modesHTML = "";


    gamemodes.forEach(function(mode) {

        const tier =
            player.tiers[mode.name];


        modesHTML += `
            <div class="mode">

                <div class="mode-icon">

                    <img
                        src="${mode.icon}"
                        alt="${mode.name}"
                    >

                </div>


                <div class="mode-name">
                    ${mode.name}
                </div>


                <div class="tier tier-${tier.toLowerCase()}">
                    ${tier}
                </div>

            </div>
        `;

    });


    leaderboard.innerHTML += `

        <div class="player">

            <div class="rank">
                #${index + 1}
            </div>


            <div class="player-info">

                <img
                    src="${player.image}"
                    class="avatar"
                    alt="${player.name}"
                >


                <div>

                    <div class="player-name">
                        ${player.name}
                    </div>


                    <div class="points">
                        ${player.points} Points
                    </div>

                </div>

            </div>


            <div class="modes">

                ${modesHTML}

            </div>

        </div>

    `;

});


// ========================================
// GAMEMODE CARDS
// ========================================

const gamemodeList =
    document.getElementById("gamemode-list");


gamemodes.forEach(function(mode) {

    gamemodeList.innerHTML += `

        <div
            class="gamemode-card"
            data-gamemode="${mode.name}"
        >

            <div class="icon">

                <img
                    src="${mode.icon}"
                    alt="${mode.name}"
                >

            </div>


            <div class="name">
                ${mode.name}
            </div>

        </div>

    `;

});


// ========================================
// GAMEMODE PAGE
// ========================================

const gamemodePage =
    document.getElementById("gamemode-page");


const gamemodeHeader =
    document.getElementById("gamemode-header");


const gamemodeLeaderboard =
    document.getElementById("gamemode-leaderboard");


const backButton =
    document.getElementById("back-button");


// ========================================
// GAMEMODE CARDS CLICK
// ========================================

const gamemodeCards =
    document.querySelectorAll(".gamemode-card");


gamemodeCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const modeName =
            card.getAttribute("data-gamemode");


        openGamemode(modeName);

    });

});


// ========================================
// OPEN GAMEMODE
// ========================================

function openGamemode(modeName) {

    const mode =
        gamemodes.find(function(item) {

            return item.name === modeName;

        });


    if (!mode) {
        return;
    }


    // Hide gamemode cards

    gamemodeList.style.display = "none";


    // Show gamemode page

    gamemodePage.style.display = "block";


    // Create gamemode title

    gamemodeHeader.innerHTML = `

        <div class="gamemode-title">

            <div class="big-icon">

                <img
                    src="${mode.icon}"
                    alt="${mode.name}"
                >

            </div>


            <div>

                <h2>
                    ${mode.name}
                </h2>


                <p class="section-description">
                    ${mode.name} Rankings
                </p>

            </div>

        </div>

    `;


    // Sort players by tier

    const sortedPlayers =
        [...players].sort(function(a, b) {

            const tierA =
                getTierNumber(
                    a.tiers[modeName]
                );


            const tierB =
                getTierNumber(
                    b.tiers[modeName]
                );


            return tierA - tierB;

        });


    // Clear old leaderboard

    gamemodeLeaderboard.innerHTML = "";


    // Create new leaderboard

    sortedPlayers.forEach(function(player, index) {

        const tier =
            player.tiers[modeName];


        gamemodeLeaderboard.innerHTML += `

            <div class="gamemode-player">


                <div class="rank">
                    #${index + 1}
                </div>


                <div class="gamemode-player-info">

                    <img
                        src="${player.image}"
                        alt="${player.name}"
                    >


                    <div>

                        <div class="player-name">
                            ${player.name}
                        </div>

                        <div class="points">
                            ${player.points} Points
                        </div>

                    </div>

                </div>


                <div class="gamemode-tier">

                    <span
                        class="tier tier-${tier.toLowerCase()}"
                    >
                        ${tier}
                    </span>

                </div>


            </div>

        `;

    });


    // Scroll to the gamemode page

    gamemodePage.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// GET TIER NUMBER
// ========================================

function getTierNumber(tier) {

    return parseInt(
        tier.replace("T", "")
    );

}


// ========================================
// BACK TO GAMEMODES
// ========================================

backButton.addEventListener("click", function() {

    gamemodePage.style.display = "none";


    gamemodeList.style.display = "grid";


    document
        .getElementById("gamemodes-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});

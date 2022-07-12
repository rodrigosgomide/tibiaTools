const imbuiments = {
    type: {
        skillBoost: {
            club: {
                icon: "https://www.tibiawiki.com.br/images/c/cd/Bash_%28Skillboost_de_Clava%29.gif",
                tier1: "Cyclos Toe",
                tier2: "Ogre Nose Ring",
                tier3: "Warmaster's Wristguards",               
            },
            sword: {
                icon:   "https://www.tibiawiki.com.br/images/2/2a/Slash_%28Skillboost_de_Espada%29.gif",
                tier1:  "Lion's Mane",
                tier2:  "Mooh'tha Shell",
                tier3:  "War Crystal",              
            },
            axe: {
                icon:   "https://www.tibiawiki.com.br/images/2/2c/Chop_%28Skillboost_de_Machado%29.gif",
                tier1:  "Orc Tooth",
                tier2:  "Battle Stone",
                tier3:  "Moohtant Horn", 
            },
            distance:{
                icon:   "https://www.tibiawiki.com.br/images/e/e6/Precision_%28Skillboost_de_Dist%C3%A2ncia%29.gif",
                tier1:  "Elven Scouting Glass",
                tier2:  "Elven Hoof",
                tier3:  "Metal Spike", 
            },
            magicLevel: {
                icon:   "https://www.tibiawiki.com.br/images/3/3d/Epiphany_%28Skillboost_de_N%C3%ADvel_M%C3%A1gico%29.gif",
                tier1:  "Elvish Talisman",
                tier2:  "Broken Shamanic Staff",
                tier3:  "Strand of Medusa Hair", 
            },
            shield: {
                icon:   "https://www.tibiawiki.com.br/images/6/62/Blockade_%28Skillboost_de_Escudo%29.gif",
                tier1:  "Piece of Scarab Shell",
                tier2:  "Brimstone Shell",
                tier3:  "Frazzle Skin", 
            }
        },
        elementalDamage: {
            teste: {
                tier1: "a",
                tier2: "aa",
                tier3: "aaa",               
            }
        }

    }
}

let div = document.createElement('div');
let imbuimentType = Object. keys(imbuiments.type);


function creatDiv() {
    let imbuimentsTypeSlected = document.querySelector("#imbuimentsOptions > select").value;
    if (imbuimentsTypeSlected != 'Imbuiment Type') {
       document.body.appendChild(div).id = "imbuimentsType"
       creatButton(imbuimentsTypeSlected)
       } else {
        console.log('fudeu')
       }
}

function creatButton(param) {
    for (let value of imbuimentType) {
        if (value == param) {
           let typeArray = Object. keys(imbuiments.type[value]) 
              for (let index in typeArray) {
                let button = document.createElement('button');
                let img = document.createElement('img');
                let skillToBoost = typeArray[index]
                console.log(skillToBoost)
                let icon = imbuiments.type[value][skillToBoost]['icon'];
                console.log(icon)
                document.querySelector("#imbuimentsType").appendChild(button).appendChild(img).src = icon;
           }
        }
    }
}


 
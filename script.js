const imbuiments = {
    type: {
        skillBoost: {
            club: {
                icon: "https://www.tibiawiki.com.br/images/c/cd/Bash_%28Skillboost_de_Clava%29.gif",
                    tier1: {
                        iten: "Cyclos Toe",
                        qty: 20
                    },
                        
                    tier2: {
                        iten: "Ogre Nose Ring",
                        qty: 15
                    },
                    tier3: {
                        iten: "Warmaster's Wristguards",
                        qty: 10
                    }             
            },
            sword: {
                icon:   "https://www.tibiawiki.com.br/images/2/2a/Slash_%28Skillboost_de_Espada%29.gif",
                tier1: {
                    iten: "Lion's Mane",
                    qty: 25
                },
                tier2: {
                    iten: "Mooh'tha Shell",
                    qty: 25
                },  
                tier3: {
                    iten: "War Crystal",              
                    qty: 5
                }, 
            },
            axe: {
                icon:   "https://www.tibiawiki.com.br/images/2/2c/Chop_%28Skillboost_de_Machado%29.gif",
                tier1: {
                    iten: "Orc Tooth",
                    qty: 20
                },  
                tier2: {
                    iten: "Battle Stone",
                    qty: 25
                }, 
                tier3: {
                    iten: "Moohtant Horn", 
                    qty: 20
                },
            },
            distance: {
                icon:   "https://www.tibiawiki.com.br/images/e/e6/Precision_%28Skillboost_de_Dist%C3%A2ncia%29.gif",
                tier1: {
                    iten:"Elven Scouting Glass",
                    qty:25
                },  
                tier2: {
                    iten: "Elven Hoof",
                    qty:    20
                },  
                tier3: {
                    iten: "Metal Spike", 
                    qty: 20
                },  
            },
            magicLevel: {
                icon:   "https://www.tibiawiki.com.br/images/3/3d/Epiphany_%28Skillboost_de_N%C3%ADvel_M%C3%A1gico%29.gif",
                tier1: {
                    iten: "Elvish Talisman",
                    qty: 25
                }, 
                tier2: {
                    iten: "Broken Shamanic Staff",
                    qty: 15
                }, 
                tier3: {
                    iten: "Strand of Medusa Hair", 
                    qty: 15
                }, 
            },
            shield: {
                icon:   "https://www.tibiawiki.com.br/images/6/62/Blockade_%28Skillboost_de_Escudo%29.gif",
                tier1: {
                    iten: "Piece of Scarab Shell",
                    qty: 20
                }, 
                tier2: {
                    iten: "Brimstone Shell",
                    qty: 25
                }, 
                tier3: {
                    iten: "Frazzle Skin", 
                    qty: 25
                }, 
            }
        },
        elementalDamage: {
            teste: {
                tier1: {
                    iten: "a",
                    qty: 1
                }, 
                tier2: {
                    iten: "a",
                    qty: 1
                }, 
                tier3: {
                    iten: "a",
                    qty: 1
                }, 
            }
        }

    }
}

let div = document.createElement('div');
let imbuimentType = Object. keys(imbuiments.type);


function creatDivIcons() {
    let imbuimentTypeClicked = document.querySelector("#imbuimentsOptions > select").value;
    if (imbuimentTypeClicked != 'Imbuement Type') {
       document.body.appendChild(div).id = "icons"
       let imbuimentsIconsDiv = document.querySelector("#icons");
       clearDiv(imbuimentsIconsDiv)
       creatButton(imbuimentTypeClicked)
       } else if (imbuimentTypeClicked = 'Imbuement Type') {
        let imbuimentsIconsDiv = document.querySelector("#icons");
        imbuimentsIconsDiv.remove();
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
                let icon = imbuiments.type[value][skillToBoost]['icon'];

                document.querySelector("#icons").appendChild(button).appendChild(img).src = icon;
            }
        }
    }
}

function clearDiv(param) {
    if (param.children.length >= 1) {
        for (let index = 1; index <= param.children.length; index += 0) {
            console.log('teste')
            param.removeChild(param.lastChild)
        }
    }
}




document.querySelector("#imbuimentsOptions > select").addEventListener('click', function() {
    creatDivIcons()
})
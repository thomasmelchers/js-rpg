var choseADino = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    /* PERSO 1 */

    const dinoName = document.getElementById("dinoName");
    const dinoAttack = document.getElementById("attack").value;
    const dinoRace = document.getElementById("race").value;
    const imagePerso1 = document.getElementById("imagePerso1");
    
    document.getElementById("name").innerHTML = dinoName.value; 
    document.getElementById("dinoAttack").innerHTML = dinoAttack;
    document.getElementById("dinoRace").innerHTML = dinoRace;

    var dinoLife = document.getElementsByTagName("progress");
    
    var dino1 = new CreationDino(dinoName.value, dinoRace, dinoAttack);

    switch(dino1.race){
        case"Diplodocus":
        imagePerso1.src = dinoPictures.diplodocus ;
        break;

        case"Pterodactile":
        imagePerso1.src = dinoPictures.pterodactile;
        break;

        case"Triceratops":
        imagePerso1.src = dinoPictures.triceratops;
        break;

        case"T-rex":
        imagePerso1.src = dinoPictures.trex;
        break;
    }

    dinoLife[0].value = dino1.currentHealth;
    dinoLife[0].max = dino1.maxHealth;
    dinoLife[0].innerHTML = dino1.currentHealth;

        /* PERSO 2 */

        const dino2Name = dinoNameP2[randomNbName];
        const dino2Race = dinoRaceP2[randomNbRace];
        const dino2Attack = dinoAttackP2[randomNbAttack];
    
        var imagePerso2 = document.getElementById("imagePerso2");

        document.getElementById("name2").innerHTML = dino2Name; 
        document.getElementById("dinoRace2").innerHTML = dino2Race;
        document.getElementById("dinoAttack2").innerHTML = dino2Attack;

        var dino2 = new CreationDino(dino2Name, dino2Race, dino2Attack);
        
        switch(dino2.race){
            case"Diplodocus":
            imagePerso2.src = dinoPictures2.diplodocus ;
            break;
    
            case"Pterodactile":
            imagePerso2.src = dinoPictures2.pterodactile;
            break;
    
            case"Triceratops":
            imagePerso2.src = dinoPictures2.triceratops;
            break;
    
            case"T-rex":
            imagePerso2.src = dinoPictures2.trex;
            break;
        }

    dinoLife[1].value = dino2.currentHealth;
    dinoLife[1].max = dino2.maxHealth;
    dinoLife[1].innerHTML = dino2.currentHealth;
    

    var containerHeader = document.getElementsByClassName("containerHeader")[0];
    containerHeader.style.display="none";
    document.getElementsByClassName("containerMain")[0].style.visibility = "visible";   
    
    console.log(dino2.name);
    console.log(dino2.currentHealth);
    console.log(dino1.race);
    console.log(dino1.dinoAttack);

    /* *** BUTON ATTACK *** */

    var buttonAttackDino1 = document.querySelector("#hit");
    
    buttonAttackDino1.addEventListener("click", ()=>{
        dino1.dodgeByDino(dino2.dodge, dino1.dinoAttack, dino2, dinoLife[1])
        console.log(dino2.currentHealth);
    })

    var buttonAttackDino2 = document.querySelector("#hit2")

    buttonAttackDino2.addEventListener("click", ()=>{
        dino2.dodgeByDino(dino1.dodge, dino2.dinoAttack, dino1, dinoLife[0])
        console.log(dino1.currentHealth);
    })
    
    /* *** BUTON HEAL *** */

    var buttonHealDino1 = document.querySelector("#heal");

    buttonHealDino1.addEventListener("click", ()=>{
        dino1.healByDino(dino1, dinoLife[0]);
    })

    var buttonHealDino2 = document.querySelector("#heal2");

    buttonHealDino2.addEventListener("click", ()=>{
        dino2.healByDino(dino2, dinoLife[1]);
    })
})


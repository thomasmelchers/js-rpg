

/* dino pictures */

var dinoPictures = {
    diplodocus : "./dino/diplo.png",
    pterodactile: "./dino/ptero.png",
    trex : "./dino/trex.png",
    triceratops : "./dino/trice.png"
}

var dinoPictures2 = {
    diplodocus : "./dino/diplo2.png",
    pterodactile: "./dino/ptero2.png",
    trex : "./dino/trex2.png",
    triceratops : "./dino/trice2.png"
}

/* Données concernant les dinos du deuxième perso */
    
var dinoNameP2 = ["Sassy", "Starvy", "Stinky", "Groovy", "Scary"];
var dinoRaceP2 = ["Diplodocus", "Pterodactile", "Triceratops", "T-rex"];
var dinoAttackP2 = ["Tail Attack", "Claws Attack", "Charge", "Bite Attack"];

var randomNbName = Math.floor(Math.random()*dinoNameP2.length);
var randomNbRace = Math.floor(Math.random()*dinoRaceP2.length);
var randomNbAttack = Math.floor(Math.random()*dinoAttackP2.length);

var log = document.querySelector(".log") ;


/* var dino2Race = dinoRaceP2[randomNbRace];
console.log(dino2Race); */
/* console.log(randomNbRace);
console.log(randomNbName);
console.log(randomNbAttack); */


function CreationDino (name, race, attack) {
    this.name = name;
    this.race = race;
    this.attack = attack;
    this.dinoAttack ;
    this.currentHealth = 100;
    this.maxHealth = 100; 
    this.heal = 30 ;
    this.tail;
    this.bite;
    this.charge ;
    this.claw;
    this.dodge;

    switch(race){
        case "Diplodocus":
            this.maxHealth = 150;
            this.currentHealth = this.maxHealth;
            this.charge = 40;
            this.tail = 50;
            this.dodge = 10;
            this.claws = 20; 
            this.bite = 10;
            break;
        
        case "Triceratops":
            this.charge = 60;
            this.tail = 35;
            this.dodge = 30;
            this.claws = 30; 
            this.bite = 10;
            break;
        
        case "T-rex":
            this.maxHealth = 120;
            this.currentHealth = this.maxHealth;
            this.charge = 40,
            this.tail = 30,
            this.dodge = 20,
            this.claws = 40, 
            this.bite = 60
            break;
        
        case "Pterodactile":
            this.maxHealth = 90;
            this.currentHealth = this.maxHealth;
            this.charge = 10;
            this.tail = 10;
            this.dodge = 80;
            this.claws = 40;
            this.bite = 40;
            this.heal = 40;
            break;
    }

    switch(attack){
        case "Tail Attack":
            this.dinoAttack = this.tail;
            break;
        case "Claws Attack":
            this.dinoAttack = this.claws;
            break;
        case "Charge":
            this.dinoAttack = this.charge;
            break;
        case "Bite Attack":
            this.dinoAttack = this.bite;
            break;
    }

    /* ATTACK FUNCTION */
    this.attackByDino = function (attack, target, targetBalise){
       var newLife = target.currentHealth - attack;
       target.currentHealth = newLife
       var messageAttack = `${target.name} suffered a stroke from ${this.name} and lose ${attack} points of life.`;
       log.innerHTML = log.innerHTML + "<br>" + messageAttack;
            if (target.currentHealth <= 0) {
            alert(`${target.name} is dead ! RIP ${this.name}`);
            log.innerHTML = `${target.name} is dead ! RIP ${target.name}. The winner is ${this.name} ! Congratulations !`;
            }
       
       targetBalise.value = target.currentHealth;
    }

    /* HEAL FUNCTION */

    this.healByDino = function(target, targetBalise){
        var lifeAfterHeal = target.currentHealth + target.heal;
        target.currentHealth = lifeAfterHeal;
        var messageHeal = `${target.name} heals ${target.heal} points of life.`;
        log.innerHTML = log.innerHTML + "<br>" + messageHeal;

            if (target.currentHealth > target.maxHealth){
                target.currentHealth = target.maxHealth;
                alert(`${target.name}'s health is at its max !`);
            }
        
        targetBalise.value = target.currentHealth;
    }

    /* DODGE FUNCTION */
    this.dodgeByDino = function(dodgeChance, attack, target, targetBalise){
        var randomAttackChance = Math.floor(Math.random()*100);
            if (randomAttackChance > dodgeChance){
                this.attackByDino(attack, target, targetBalise);
            }
            else{
                alert("your attack unsucceed");
                var messageDodge = `${this.name} missed its attack against ${target.name}! ${target.name} gots incredible skills to dodge an attack !`;
                log.innerHTML = log.innerHTML + "<br>" + messageDodge;
            }
    }
}

/* var clumby = new CreationDino ("Clumby", "Trex", "Tail Attack"); */

/* console.log(clumby.currentHealth);
console.log(clumby.dodge);
console.log(clumby.dinoAttack); */

/* clumby.dodgeByDino(30); */
/* console.log(clumby.dodgeByDino(30)) */

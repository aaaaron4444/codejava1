class Player{

    name
    healthy = 100
    power = 10

    constructor(name) {
        this.name = name
    }

    showStatus(){
        console.log(`${this.name} (Healthy => ${this.health}, Power => ${this.power}`)
    }

    hit(player){
        this.health -= player.power
        console.log(`Player ${this.name} has been damaged by ${player.power} point`)
        console.log(`player ${this.name} has ${this.health} remaining health`)
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }
}

start() {
    console.log("=== START GAME ===")
    while(this.player1.health > 1 && this.player2.health > 1) {
        console.log(`=== Player ${this.player1.name} turn ==`
        
        )
    }

}
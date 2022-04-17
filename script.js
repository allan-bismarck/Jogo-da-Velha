var game = [];
var area = [];
var player = 0;
var verify;
var gaming = true;
var nivel = 1;
var moveCPU = 1;
var move = 0;
var playerStart = 1;

function playCPU() {
    if(gaming) {
        var line, column;
        if(nivel == 1) {
            do {
                line = Math.round(Math.random()*2);
                column = Math.round(Math.random()*2);
            } while(game[line][column]!="");
            game[line][column] = "O";
        } else if(nivel == 2) {
            //Falta implementar o nível 2
        }
        verify = verifyVictory();
        if(verify != "") {
            alert(verify + " venceu");
            gaming = false;
        }
        updateArea();
        move++;
        player = 0;
    }
}

function verifyVictory() {
    var line, column;
    for(line = 0; line < 3; line ++) {
        if((game[line][0] == game[line][1]) && (game[line][1] == game[line][2])) {
            return game[line][0];
        }
    }

    for(column = 0; column < 3; column ++) {
        if((game[0][column] == game[1][column]) && (game[1][column] == game[2][column])) {
            return game[0][column];
        }
    }
    
    if((game[0][0] == game[1][1]) && (game[1][1] == game[2][2])) {
        return game[0][0];
    }

    if((game[0][2] == game[1][1]) && (game[1][1] == game[2][0])) {
        return game[0][2];
    }
    return "";
}


function play(position) {
    if(gaming && player == 0) {
        switch (position) {
            case 1:
                if(game[0][0] == "") {
                    game[0][0] = "X";
                    player = 1;
                }
            break;
            case 2:
                if(game[0][1] == "") {
                    game[0][1] = "X";
                    player = 1;
                }
            break;
            case 3:
                if(game[0][2] == "") {
                    game[0][2] = "X";
                    player = 1;
                }
            break;
            case 4:
                if(game[1][0] == "") {
                    game[1][0] = "X";
                    player = 1;
                }
            break;
            case 5:
                if(game[1][1] == "") {
                    game[1][1] = "X";
                    player = 1;
                }
            break;
            case 6:
                if(game[1][2] == "") {
                    game[1][2] = "X";
                    player = 1;
                }
            break;
            case 7:
                if(game[2][0] == "") {
                    game[2][0] = "X";
                    player = 1;
                }
            break;
            case 8:
                if(game[2][1] == "") {
                    game[2][1] = "X";
                    player = 1;
                }
            break;
            case 9:
                if(game[2][2] == "") {
                    game[2][2] = "X";
                    player = 1;
                }
            break;
        }
        if(player == 1) {
            updateArea();
            verify = verifyVictory();
            if(verify != "") {
                alert(verify + " venceu");
                gaming = false;
            }
            move++;
            playCPU();
        }
    }
}

function updateArea() {
    for(var line = 0; line < 3; line ++) {
        for(var column = 0; column < 3; column ++) {
            if(game[line][column]=="X") {
                area[line][column].innerHTML = "X";
                area[line][column].style.cursor = "default";
            } else if(game[line][column]=="O") {
                    area[line][column].innerHTML = "O";
                    area[line][column].style.cursor = "default";
            } else {
                area[line][column].innerHTML="";
                area[line][column].style.cursor="pointer";
            }
        }
    }
}

function inicialize() {
    move = 0;
    gaming = true;
    moveCPU = 1;
    game = [
            ["","",""],
            ["","",""],
            ["","",""],
        ]
    area = [
            [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
            [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
            [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    updateArea();
    if(player == 1) {
        player = 0;
        playerStart = player;
        document.getElementById("startPlayer").innerHTML = "Quem Começa: Jogador";
    } else {
        player = 0;
        playerStart = player;
        document.getElementById("startPlayer").innerHTML = "Quem Começa: CPU";
        playCPU();
    }
}

window.addEventListener("load", inicialize);
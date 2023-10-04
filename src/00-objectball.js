const gameObject=()=>{
    let game={
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black", "White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                },
            },
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                },
                "Brendan Haywoody":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                },
            },
        },
    }
    return game;
}

function homeTeamName(){
   
    return gameObject()["home"]["teamName"];
}

function numPointScored(playerName){
    let playerPoints=-1;
    let game=gameObject();
    outer:for(const team in game){
        const currentTeam=game[team];
        const players=currentTeam.players;
        for(const player in players){
            if(player===playerName)
                {
                    playerPoints=players[player].points;
                    break outer;
                }
            }
        }
    return playerPoints;
}

function shoeSize(playerName){
    let shoeSize=-1;
    let game=gameObject();
    outer:for(const team in game){
        const currentTeam=game[team];
        const players=currentTeam.players;
        for(const player in players){
            if(player===playerName)
                {
                    shoeSize=players[player].shoe;
                    break outer;
                }
            }
        }
    return shoeSize;
}

function teamColors(teamName){
    let game=gameObject();
    let colors;
    for(const team in game){
        const currentTeam=game[team];
        if(currentTeam.teamName===teamName)
        {
            colors=Array.from(currentTeam.colors);
            break;
        }
    }
    if(colors!== undefined)
    return colors;
console.log("no such team")
return -1;
}

const teamNames=()=>{
    const teams=[];
    const game =gameObject();
    const noNameTeams=Object.keys(game);
    for(const team of noNameTeams)
    {
        teams.push(game[team].teamName);
    }
    return teams;
}

const playerNumbers=(teamName)=>{
    let numbers=[];
    const game = gameObject();
    for( const team in game){
        if(game[team].teamName===teamName){
            const players= game[team].players;
            for(const player in players){
                numbers.push(players[player].number);
            }
        }
    }
    return numbers;
}

const playerStats=(playerName) => {
    let stats;
    const game =gameObject();
    outer:for(const team in game){
        const currentTeam=game[team];
        const players=currentTeam.players;
        for(const player in players){
            if(player===playerName) {
                stats = players[player];
                break outer;
          }
         }
    }
    return stats;
}

const bigShoeRebounds = () =>{  
    let maxShoe=0;
    let maxRebounds=0;
    const game = gameObject();
    for( const team in game){
        let currentTeam=game[team];
        let currentTeamPlayers=currentTeam.players;
        for(const player in currentTeamPlayers){
            let currentPlayer=currentTeamPlayers[player];
            if(currentPlayer.shoe>=maxShoe)
                {
                    maxRebounds=currentPlayer.rebounds;
                }
        }
    }
    return maxRebounds;
}

const mostPointsScored = ()=>{
    let highestScore=0;
    let playerName ="";
    const game = gameObject();
    for(const team in game){
        const currentTeam= game[team];
        const teamPlayers= currentTeam.players;
        for(const player in teamPlayers)
        {
            const currentPlayer= teamPlayers[player];
            if(currentPlayer.points>highestScore){
                    highestScore=currentPlayer.points;
                    playerName = player;
            }
        }
    }
    return playerName;
}

const playerWithLongestName =()=>{
    let playerName="";
    const game= gameObject();
    for(const team in game){
        const currentTeam= game[team];
        const players= currentTeam.players;
        for(const player in players){
            if(player.length>playerName.length)
                playerName=player;
        }
    }
    return playerName;
}

const winningTeam = () =>{
    let points=[];
    let teamNames=[];
    const game=gameObject();
    for(const team in game){
        const currentTeam=game[team];
        teamNames.push(currentTeam.teamName);
        const teamPlayers=currentTeam.players;
        let teamPoints=0;
        for(let player in teamPlayers){
            const currentPlayer= teamPlayers[player];
            teamPoints+=currentPlayer.points;
        }
        points.push(teamPoints);
    }
    if(points[0]>points[1])
        return teamNames[0];
    else return teamNames[1];
}

const getSteals = (playerName)=>{
    let steals;
    const game=gameObject();
    outer:for(const team in game){
        const currentTeam= game[team];
        const teamPlayers=currentTeam.players;
        for(const player in teamPlayers){
            if(player===playerName)
                {
                    steals = teamPlayers[player].steals;
                    break outer;
                } 
        }
    }
    return steals;
}

const doesLongNameStealATon = () =>{
    const longestName=playerWithLongestName();
    const longestNameSteals=getSteals(longestName);
    const game =gameObject();
    for(const team in game){
        const currentTeam= game[team];
        const teamPlayers=currentTeam.players;
        for(const player in teamPlayers){
            const currentPlayer=teamPlayers[player];
            if(currentPlayer.steals>longestNameSteals &&
                player!==longestName)
                return false;
        }
    }
    return true;
}

console.log(doesLongNameStealATon());
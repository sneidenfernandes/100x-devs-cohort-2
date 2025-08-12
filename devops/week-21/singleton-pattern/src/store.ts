

interface Game {
    id: string, 
    whitePlayer: string, 
    blackPlayer : string,
    moves: string[]
}

export const games : Game[] = [];


export class GameManager {

    games: Game[] = [];
    private static instance: GameManager;
    private constructor(){
        this.games = [];

    }

    static getInstance(){

        if(GameManager.instance){
            return GameManager.instance;
        }

        GameManager.instance = new GameManager();
        return GameManager.instance;
    }

    addMove(gameId:string, move:string){
        console.log(`Adding move ${move} to ${gameId}`)
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move);
    }

    addGame(gameId:string){
        const game : Game = {
            id: gameId,
            whitePlayer: "Alice",
            blackPlayer: "Denzel",
            moves: []
        }

        this.games.push(game);
    }

    log(){
        setInterval(()=> {
            console.log(this.games);
        }, 5000)
    }

}


export const testGame = GameManager.getInstance();


export const games = [];
export class GameManager {
    games = [];
    static instance;
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayer: "Alice",
            blackPlayer: "Denzel",
            moves: []
        };
        this.games.push(game);
    }
    log() {
        setInterval(() => {
            console.log(this.games);
        }, 5000);
    }
}
export const testGame = GameManager.getInstance();
//# sourceMappingURL=store.js.map
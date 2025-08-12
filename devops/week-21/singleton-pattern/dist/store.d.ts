interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}
export declare const games: Game[];
export declare class GameManager {
    games: Game[];
    private static instance;
    private constructor();
    static getInstance(): GameManager;
    addMove(gameId: string, move: string): void;
    addGame(gameId: string): void;
    log(): void;
}
export declare const testGame: GameManager;
export {};
//# sourceMappingURL=store.d.ts.map
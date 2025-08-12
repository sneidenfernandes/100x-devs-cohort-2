import { startLogger } from "./logger.js";
import { testGame } from "./store.js";
testGame.addGame("firstGame");
startLogger();
setInterval(() => {
    testGame.addMove("firstGame", Math.random().toString());
}, 5000);
//# sourceMappingURL=index.js.map
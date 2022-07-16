import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

//give everyone the starting balance
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

//alice creates contract in backend and bob attaches to it
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = [' Rock ', ' Paper ', ' Scissors '];
const OUTCOME = [' Bob Wins ', ' Draw ', ' Alice Wins '];
const Player = (who) => ({
    getHand: () => {
        const hand = Math.floor((Math.random() * 3 ));
        console.log(`${Who} played ${HAND[hand]}`);
        return hand;
    },
    seeOutcome: (outcome)=>{
        console.log(`${ who } saw outcome ${OUTCOME[hand]}`);
    },
});
//
await Promise.all([
    ctcAlice.p.Alice({
        //implement Alice's interact object here
        ...Player('Alice'),
    }),
    ctcAlice.p.Bob({
        //implement Bob's interact object here
        ...Player('Bob'),
    }),
]);

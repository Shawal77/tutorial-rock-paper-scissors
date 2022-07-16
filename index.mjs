import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

//give everyone the starting balance
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

//opening balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

//alice creates contract in backend and bob attaches to it
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = [' Rock ', ' Paper ', ' Scissors '];
const OUTCOME = [' Bob Wins ', ' Draw ', ' Alice Wins '];
const Player = (who) => ({
    getHand: () => {
        const hand = Math.floor((Math.random() * 3 ));
        console.log(`${who} played ${HAND[hand]}`);
        return hand;
    },
    seeOutcome: (outcome)=>{
        console.log(`${ who } saw outcome ${OUTCOME[outcome]}`);
    },
});
//
await Promise.all([
    ctcAlice.p.Alice({
        //implement Alice's interact object here
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
    }),
    ctcBob.p.Bob({
        //implement Bob's interact object here
        ...Player('Bob'),
        acceptWager: (amt) => {
            console.log(`Bob accepts the wager of ${fmt(amt)}.`);
        },
    }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);

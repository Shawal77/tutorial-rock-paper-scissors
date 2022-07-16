'reach 0.1'

//change front end to get what they play
//create a player class
const Player = {
    //get hand gets a number from user
    getHand: Fun([],UInt),//function that takes in void and returns unsigned int
    //see outcome return output to user
    seeOutcome: Fun([UInt],Null),
};

//this is a back end that exports the main
export const main = Reach.App(()=>{
    const Alice = Participant(//objects
        'Alice',{
            //specify alice's interact interface here
            ...Player,
            wager : UInt, //wager is typr Uint
        }
    );
    const Bob = Participant(//objects
        'Bob',{
            //specify Bob's interact info here
            ...Player,
            acceptWager: Fun([UInt],Null),//return int to user
        }
    );
    init ();
    //write your program here
    Alice.only(()=>{
        //alice will give her hand first
        const wager = declassify(interact.wager);
        const handAlice = declassify(interact.getHand());
    })
    //alice's hand is sent to network
    Alice.publish(wager, handAlice)
        .pay(wager);
    commit();

    unknowable(Bob, Alice(handAlice)); //bob can't know what alice played
    Bob.only(() => {
        interact.acceptWager(wager);
        const handBob = declassify(interact.getHand());
        //const handBob = ( handAlice + 1) % 3;
    });
    Bob.publish(handBob)
    .pay(wager);

    /*const outcome = (handAlice + (4 - handBob)) % 3;
    commit();

    each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
    });*/

    //getting amounts to be exchanged
    const outcome = (handAlice + (4 - handBob)) % 3;
    //require(handBob == (handAlice + 1) % 3 );
    //assert(outcome == 0 );

    const            [forAlice, forBob] =
      outcome == 2 ? [       2,      0] :
      outcome == 0 ? [       0,      2] :
      /* tie      */ [       1,      1];
    transfer(forAlice * wager).to(Alice);
    transfer(forBob   * wager).to(Bob);
    commit();
});

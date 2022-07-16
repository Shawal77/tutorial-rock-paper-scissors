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
        }
    );
    const Bob = Participant(//objects
        'Bob',{
            //specify Bob's interact info here
            ...Player,
        }
    );
    init ();
    //write your program here
    Alice.only(()=>{
        //alice will give her hand first
        const handAlice = declassify(interact.getHand());
    })
    //alice's hand is sent to network
    Alice.publish(handAlice);
    commit();
    Bob.only(() => {
        const handBob = declassify(interact.getHand());
    });
    Bob.publish(handBob);
    const outcome = (handAlice + (4 - handBob)) % 3;
    commit();

    each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
    });
});

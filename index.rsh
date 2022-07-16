'reach 0.1'

export const main = Reach.App(()=>{
    const Alice = Participant(
        'Alice',{
            //specify alice's interact interface here
        }
    );
    const Bob = Participant(
        'Bob',{
            //specify Bob's interact info here
        }
    );
    init ();
    //write your program here
});

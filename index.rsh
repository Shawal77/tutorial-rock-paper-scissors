'reach 0.1';
//next time Interaction and independance
const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, BOB_WINS, DRAW, ALICE_WINS ] = makeEnum(3);

const winner = (handAlice, handBob) =>
((handAlice + (4 - handBob)) % 3);

assert(winner(ROCK, PAPER) == BOB_WINS);
assert(winner(PAPER, ROCK) == ALICE_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handAlice =>//for any int of
forall(UInt, handBob =>// for any int
    assert(isOutcome(winner(handAlice, handBob)))));

forall(UInt, (hand) =>
assert(winner(hand, hand) == DRAW));

const Player = {
    ...hasRandom, // <--- new!
    getHand: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),//void-->void fun
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
      ...Player,
      wager: UInt, // atomic units of currency
      deadline: UInt, // time delta (blocks/rounds)
    });
    const Bob   = Participant('Bob', {
      ...Player,
      acceptWager: Fun([UInt], Null),
    });
    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
          interact.informTimeout();
        });
    };

    Alice.only(() => {
        const wager = declassify(interact.wager);
        //const _handAlice = interact.getHand();
        //const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
        //const commitAlice = declassify(_commitAlice);
        const deadline = declassify(interact.deadline);
      });
    Alice.publish(wager, deadline)
        .pay(wager);
    commit();

    //unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
    interact.acceptWager(wager);
    //const handBob = declassify(interact.getHand());
    });
    Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    //commit();

    var outcome = DRAW;
    invariant( balance() == 2 * wager && isOutcome(outcome) );
    while ( outcome == DRAW ) {
        commit();

        Alice.only(() => {
            const _handAlice = interact.getHand();
            const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
            const commitAlice = declassify(_commitAlice);
          });
          Alice.publish(commitAlice)
          .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();

        unknowable(Bob, Alice(_handAlice, _saltAlice));
        Bob.only(() => {
            const handBob = declassify(interact.getHand());
        });
        Bob.publish(handBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            const saltAlice = declassify(_saltAlice);
            const handAlice = declassify(_handAlice);
          });
          Alice.publish(saltAlice, handAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
          checkCommitment(commitAlice, saltAlice, handAlice);

        outcome = winner(handAlice, handBob);
        continue;
    }

    assert(outcome == ALICE_WINS || outcome == BOB_WINS);
    transfer(2 * wager).to(outcome == ALICE_WINS ? Alice : Bob);
    commit();
});

import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view: 'ConnectAccount', ...defaults};//we initialize the component state to display
    }//we hook into React's componentDidMount lifecycle event,
    async componentDidMount() {//which is called when the component starts.
      const acc = await reach.getDefaultAccount();//which accesses the default browser account. For example, when used with Ethereum, it can discover the currently-selected MetaMask account
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
      if (await reach.canFundFromFaucet()) {//to see if we can access the Reach developer testing network faucet.
        this.setState({view: 'FundAccount'});//if canFundFromFaucet was true, we set the component state to display Fund Account dialog.
      } else {
        this.setState({view: 'DeployerOrAttacher'});//On line 29, if canFundFromFaucet was false, we set the component state to skip to Choose Role.
      }
    }
    async fundAccount(fundAmount) {// what happens when the user clicks the Fund Account button
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));//we transfer funds from the faucet to the user's account.
        this.setState({view: 'DeployerOrAttacher'});//we set the component state to display Choose Role.
      }
      async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }//we define what to do when the user clicks the Skip button,//which is to set the component state to display Choose Role
      selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }// we set a sub-component based on whether the user clicks Deployer or Attacher.
      selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
    render() { return renderView(this, AppViews); }//we render the appropriate view from rps-9-web/views/AppViews.js.3
}

class Player extends React.Component {
    random() { return reach.hasRandom.random(); }//we provide the random callback
    async getHand() { // Fun([], UInt)we provide the getHand callback.
      const hand = await new Promise(resolveHandP => {//we set the component state to display Get Hand dialog, and wait for a Promise which can be resolved via user interaction.
        this.setState({view: 'GetHand', playable: true, resolveHandP});
      });
      this.setState({view: 'WaitingForResults', hand});//which occurs after the Promise is resolved, we set the component state to display Waiting for results display.379
      return handToInt[hand];
    }
    seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }//we provide the seeOutcome and informTimeout callbacks, which set the component state to display Done display and Timeout display, respectively.3
    informTimeout() { this.setState({view: 'Timeout'}); }
    playHand(hand) { this.state.resolveHandP(hand); }//On line 53, we define what happens when the user clicks Rock, Paper, or Scissors: The Promise from line 45 is resolved
}

class Deployer extends Player {
constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};//we set the component state to display Set Wager dialog.
}
setWager(wager) { this.setState({view: 'Deploy', wager}); }//On line 61, we define what to do when the user clicks the Set Wager button, which is to set the component state to display Deploy dialog.
async deploy() {//On lines 62 thru 69, we define what to do when the user clicks the Deploy button.
    const ctc = this.props.acc.contract(backend);//On line 63, we call acc.deploy, which triggers a deploy of the contract.
    this.setState({view: 'Deploying', ctc});//On line 64, we set the component state to display Deploying display.
    this.wager = reach.parseCurrency(this.state.wager); // UInt  we set the wager property
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt we set the deadline property based on which connector is being used.
    backend.Alice(ctc, this);//we start running the Reach program as Alice, using the this React component as the participant interact interface object.
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);//On lines 68 and 69, we set the component state to display Waiting for Attacher display,
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});//which displays the deployed contract info as JSON.
}
render() { return renderView(this, DeployerViews); }//we render the appropriate view from rps-9-web/views/DeployerViews.js.
}
class Attacher extends Player {
    constructor(props) {
      super(props);
      this.state = {view: 'Attach'};//we initialize the component state to display Attach dialog.
    }
    attach(ctcInfoStr) {//we define what happens when the user clicks the Attach button.
      const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));//we call acc.attach
      this.setState({view: 'Attaching'});//we set the component state to display Attaching display.408
      backend.Bob(ctc, this);//we start running the Reach program as Bob, using the this React component as the participant interact interface object.
    }
    async acceptWager(wagerAtomic) { // Fun([UInt], Null)we define the acceptWager callback
      const wager = reach.formatCurrency(wagerAtomic, 4);
      return await new Promise(resolveAcceptedP => {//we set the component state to display Accept Terms dialog,
        this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});//and wait for a Promise which can be resolved via user interaction.
      });
    }
    termsAccepted() {//we define what happens when the user clicks the Accept Terms and Pay Wager button: the Promise from line 90 is resolved,
      this.state.resolveAcceptedP();
      this.setState({view: 'WaitingForTurn'});
    }//and we set the component state to display Waiting for Turn display.
    render() { return renderView(this, AttacherViews); }//On line 93, we render the appropriate view from rps-9-web/views/AttacherViews.js
}
//putting it all together
renderDOM(<App />);
//Finally, we call a small helper function from rps-9-web/views/render.js to render our App component.

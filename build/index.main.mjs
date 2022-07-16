// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v80 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v83 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:33:54:application',
    fs: ['at ./index.rsh:30:15:application call to [unknown function] (defined at: ./index.rsh:30:18:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v80, v83],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v80, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v85, v86], secs: v88, time: v87, didSend: v31, from: v84 } = txn1;
      
      sim_r.txns.push({
        amt: v85,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v85, v86], secs: v88, time: v87, didSend: v31, from: v84 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v43, from: v95 } = txn2;
  ;
  const v101 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.add(v86, v101);
  const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:56:51:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.add(v86, stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, '1'));
  const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:57:42:decimal', stdlib.UInt_max, '3'));
  const v106 = stdlib.eq(v96, v105);
  stdlib.assert(v106, {
    at: './index.rsh:57:12:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v108 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:61:18:decimal', stdlib.UInt_max, '2'));
  const v110 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v113 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v114 = v108 ? v113 : v110;
  const v115 = v114[stdlib.checkedBigNumberify('./index.rsh:60:22:array', stdlib.UInt_max, '0')];
  const v116 = v114[stdlib.checkedBigNumberify('./index.rsh:60:22:array', stdlib.UInt_max, '1')];
  const v117 = stdlib.mul(v115, v85);
  ;
  const v122 = stdlib.mul(v116, v85);
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v85, v86], secs: v88, time: v87, didSend: v31, from: v84 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v85), {
    at: './index.rsh:41:29:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v93 = stdlib.add(v86, stdlib.checkedBigNumberify('./index.rsh:43:39:decimal', stdlib.UInt_max, '1'));
  const v94 = stdlib.mod(v93, stdlib.checkedBigNumberify('./index.rsh:43:44:decimal', stdlib.UInt_max, '3'));
  
  const txn2 = await (ctc.sendrecv({
    args: [v84, v85, v86, v94],
    evt_cnt: 1,
    funcNum: 1,
    lct: v87,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v85, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v43, from: v95 } = txn2;
      
      sim_r.txns.push({
        amt: v85,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v101 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '4'), v96);
      const v102 = stdlib.add(v86, v101);
      const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:56:51:decimal', stdlib.UInt_max, '3'));
      const v108 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:61:18:decimal', stdlib.UInt_max, '2'));
      const v110 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v113 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v114 = v108 ? v113 : v110;
      const v115 = v114[stdlib.checkedBigNumberify('./index.rsh:60:22:array', stdlib.UInt_max, '0')];
      const v116 = v114[stdlib.checkedBigNumberify('./index.rsh:60:22:array', stdlib.UInt_max, '1')];
      const v117 = stdlib.mul(v115, v85);
      sim_r.txns.push({
        kind: 'from',
        to: v84,
        tok: undefined /* Nothing */
        });
      const v122 = stdlib.mul(v116, v85);
      sim_r.txns.push({
        kind: 'from',
        to: v95,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v43, from: v95 } = txn2;
  ;
  const v101 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.add(v86, v101);
  const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:56:51:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.add(v86, stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, '1'));
  const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:57:42:decimal', stdlib.UInt_max, '3'));
  const v106 = stdlib.eq(v96, v105);
  stdlib.assert(v106, {
    at: './index.rsh:57:12:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  const v108 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:61:18:decimal', stdlib.UInt_max, '2'));
  const v110 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v113 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v114 = v108 ? v113 : v110;
  const v115 = v114[stdlib.checkedBigNumberify('./index.rsh:60:22:array', stdlib.UInt_max, '0')];
  const v116 = v114[stdlib.checkedBigNumberify('./index.rsh:60:22:array', stdlib.UInt_max, '1')];
  const v117 = stdlib.mul(v115, v85);
  ;
  const v122 = stdlib.mul(v116, v85);
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAEIAwImAgABACI1ADEYQQF4KGRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACnIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDSYEgWzX/gShbNf5JNQUXNf2ABNUVGRQ0/RZQsDT/iAEwNP00/iMIJRgSRIAQAAAAAAAAAAAAAAAAAAAAAoAQAAAAAAAAAAIAAAAAAAAAADT+gQQ0/QkIJRghBBJNNfyxIrIBNPwiWzT/C7III7IQNANXACCyB7OxIrIBNPwkWzT/C7III7IQMQCyB7NCAFRIgaCNBogAuiI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULA0/4gAijEANP8WUDT+FlApSwFXADBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516109523803806109528339810160408190526100229161021c565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a160208101515161008c9034146007610124565b6100b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3380825260208381018051518285019081529051820151604080860191825260016000819055439055805180850195909552915184830152516060808501919091528151808503909101815260809093019052815161011c92600292019061014d565b5050506102b1565b816101495760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015990610276565b90600052602060002090601f01602090048101928261017b57600085556101c1565b82601f1061019457805160ff19168380011785556101c1565b828001600101855582156101c1579182015b828111156101c15782518255916020019190600101906101a6565b506101cd9291506101d1565b5090565b5b808211156101cd57600081556001016101d2565b604080519081016001600160401b038111828210171561021657634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022f57600080fd5b6102376101e6565b835181526040601f198301121561024d57600080fd5b6102556101e6565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061028a57607f821691505b602082108114156102ab57634e487b7160e01b600052602260045260246000fd5b50919050565b610692806102c06000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b6100476100903660046104b0565b6100b8565b3480156100a157600080fd5b506100aa61032d565b6040516100649291906104c8565b6100c8600160005414600a6103ca565b6100e2813515806100db57506001548235145b600b6103ca565b6000808055600280546100f490610525565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610525565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061055a565b905061018f6103f3565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a16101e58260200151341460086103ca565b6102126003600184604001516101fb91906105ec565b6102059190610604565b60208501351460096103ca565b8051600090819052815160026020918201819052818401805182905251820192909252600390610246908601356004610626565b846040015161025591906105ec565b61025f9190610604565b1461026b578051610271565b80602001515b604082018190528251602084015191516001600160a01b03909116916108fc9161029b919061063d565b6040518115909202916000818181858888f193505050501580156102c3573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360400151602001516102e9919061063d565b6040518115909202916000818181858888f19350505050158015610311573d6000803e3d6000fd5b50600080805560018190556103289060029061045a565b505050565b60006060600054600280805461034290610525565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610525565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b50505050509050915091509091565b816103ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a08101909152600060608201818152608083019190915281908152602001610433604051806040016040528060008152602001600081525090565b8152602001610455604051806040016040528060008152602001600081525090565b905290565b50805461046690610525565b6000825580601f10610476575050565b601f0160209004906000526020600020908101906104949190610497565b50565b5b808211156104ac5760008155600101610498565b5090565b6000604082840312156104c257600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156104fc578581018301518582016060015282016104e0565b8181111561050e576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061053957607f821691505b602082108114156104c257634e487b7160e01b600052602260045260246000fd5b60006060828403121561056c57600080fd5b6040516060810181811067ffffffffffffffff8211171561059d57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105b757600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156105ff576105ff6105d6565b500190565b60008261062157634e487b7160e01b600052601260045260246000fd5b500690565b600082821015610638576106386105d6565b500390565b6000816000190483118215151615610657576106576105d6565b50029056fea264697066735822122094b409928b8de7057a4b06645b242c64b848613d642d96023034def54b06f6b464736f6c634300080c0033`,
  BytecodeLen: 2386,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };

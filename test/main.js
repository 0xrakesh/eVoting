const {Web3} = require("web3")
const contractAbi = require("../src/contracts/eVoting.json")

const web3 = new Web3('http://localhost:7545')

async function getContractID(){
    const id = await web3.eth.net.getId();
    const contractAddr = contractAbi.networks[id].address;
    const contract = new web3.eth.Contract(contractAbi.abi, contractAddr);
    // Create a party
    // contract.methods.createParty(3,["Old","New","Zen"]).send({
    //     from: address[0].address
    // })

    console.log(contract)

    // contract.methods.getVotings().call({
    //     from: address[0].address
    // }).then(console.log)
}

getContractID();

import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
// import useConnectWeb3 from '../hooks/useConnectWeb3';
// import { useRecoilValue } from 'recoil';
// import { web3State } from '../redux/web3instance';
// import contract from '../contracts/eVoting.json'


const LoginComponent = () => {
    
    // const web3 = useRecoilValue(web3State)
    // const [contractInst, setContractInst] = useState(null)
    // const [contractAddr, setContractAddr] = useState(null)
    // const [userAcc, setUserAcc] = useState(null);
    

    const connectAccount = async() => {
        // let networkId = await web3.eth.net.getId()
        // if (contract.networks[networkId]) {
        //   var deployedNetwork = contract.networks[networkId].address;
        //   setContractAddr(deployedNetwork)
        // }
        // const contractInstance = new web3.eth.Contract(contract.abi, deployedNetwork);

        // const accounts = await window.ethereum.request({
        //     method: 'eth_requestAccounts',
        // });
        
        // setUserAcc(accounts[0]);
    }

    const login = async() => {
        // const contractInstance = new web3.eth.Contract(contract.abi, contractAddr);
        
        // setContractInst(contractInstance);

        // await contractInstance.methods.createUser('Rakesh').send({
        //     from: userAcc,
        //     gasPrice: web3.utils.toWei('50','gwei')
        // }).then(console.log);

        console.log("Login")

    }

    return (
        <div className='d-flex'>
            <h1 className='white-text'>Sign in to the eVoting DApp.</h1>
            <button className='button-ctn' onClick={connectAccount}>Connect to the account</button>

            <input type="text" className='login-input' placeholder='Enter the name as in aadhar id'/>
            <Link to={"/voting"}>
                <button className='login-ctn' onClick={login}>Login</button>
            </Link>
        </div>
    );
}

export default LoginComponent;

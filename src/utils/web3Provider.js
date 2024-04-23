// import Web3 from 'web3';
// import ethers from 'ethers';

// const getWeb3Provider = async () => {
//   if (window.ethereum) {
//     try {
//       const provider = await ethers.provider.Web3Provider(window.ethereum);

//       await provider.send("eth_requestAccounts", []);

//       return provider;

//     } catch (error) {
//       console.error('Error connecting to Metamask:', error);
//       return null;
//     }
//   } else {
//     // Fallback to an Infura provider for local testing (optional)
//     const provider = new Web3.providers.HttpProvider('http://localhost:7545'); // Replace with your Infura project ID for mainnet connection
//     const web3 = new Web3(provider);
//     return web3;
//   }
// };

// export default getWeb3Provider;
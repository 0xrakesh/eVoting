// import { useState, useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import getWeb3Provider from '../utils/web3Provider';
// import {web3State} from '../redux/web3instance';

// const useConnectWeb3 = () => {
//   const [connecting, setConnecting] = useState(false);
//   const [error, setError] = useState(null);
//   const [web3, setWeb3] = useRecoilState(web3State)
//   const connect = async () => {
//     setConnecting(true);
//     setError(null);

//     try {
//       const web3 = await getWeb3Provider();
//       if (web3) {
//         setWeb3(web3);
//       } else {
//         setError('Failed to connect to web3 provider');
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setConnecting(false);
//     }
//   };

//   useEffect(() => {

//     connect();
//   }, []);

//   return { connecting, error, connect };
// };

// export default useConnectWeb3;

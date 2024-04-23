import React  from 'react';
import {VotingHeader} from '../components/Voting' 
import {PartiesContainer, AddBox} from "../components/Parties"


const PartiesAdd = () => {
    return (
        <div className='margin'>
            <VotingHeader/>
            <PartiesContainer/>
            <AddBox/>
        </div>
    );
}


export default PartiesAdd;

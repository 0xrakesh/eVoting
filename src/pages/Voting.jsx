import React from 'react';
import "./style.css"
import { VotingHeader, VotingContainer } from '../components/Voting';

const Voting = () => {
    return (
        <div className='margin'>
            <VotingHeader/>
            <VotingContainer/>
        </div>
    );
}

export default Voting;

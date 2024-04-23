import React from 'react';
import {VotingHeader} from '../components/Voting' 
import { PartiesContainer } from '../components/Parties';
import { DetailHeader, ElectionStatus,ElectionPieChart } from '../components/Detail';

const Detail = () => {
    return (
        <div className='margin'>
            <VotingHeader/>
            <PartiesContainer/>
            <DetailHeader/>
            <ElectionStatus/>
            <ElectionPieChart/>
        </div>
    );
}

export default Detail;

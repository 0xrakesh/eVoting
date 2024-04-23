import React, { Fragment } from 'react';
import "./Voting.css"

const parties = ["Our Party","My Party","Z Party"]

const VotingHeader = () => {
    return (
        <div className='voting-box'>
            <h1>BallotBox</h1>
            <p>Casting your vote made easy with BallotBox - a secure online platform ensuring confidentiality and accuracy. Experience convenience, trust, and transparency in every election.</p>
        </div>
    );
}

const VotingContainer = () => {
    return (
        <Fragment>
            <div className='voting-header'>
                <h3>Election Parties</h3>            
                <div className='party-box'>
                    {
                        parties.map((data,index) => (
                            <VotingBox key={index} name={data}/>
                        ))
                    }
                </div>
            </div>
            <div className='vote-div'>
                <button className='vote-btn' onClick={() => {alert("Voted"); window.location.href="/login"}}>Vote now</button>
            </div>
        </Fragment>
    )
}


const VotingBox = ({name,image,keys}) => {
    return (
        <Fragment>
                <button className='voting-btn'> 
                    <h4>{name}</h4>
                </button>
        </Fragment>
    )
}

export {VotingHeader, VotingContainer};

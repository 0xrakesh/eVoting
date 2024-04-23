import React, {Fragment} from 'react';
import "./Parties.css"

const parties = ["Our Party","My Party","Z Party"]


const PartiesContainer = () => {
    return (
        <div className='party-header'>
            <h3>List of parties enrolled for this year</h3>
            <div className='party-box'>
                {
                    parties.map((data,index) => (
                        <PartyBox key={index} name={data}/>
                    ))
                }
            </div>
        </div>
    );
}



const PartyBox = ({name,image,keys}) => {
    return (
        <Fragment>
                <button className='voting-btn'> 
                    <h4>{name}</h4>
                </button>
        </Fragment>
    )
}

const AddBox = () => {
    return (
        <Fragment>
            <div className='party-header'>
                <h3>To add a new party</h3>
                <div className='party-input-div'>
                    <p>Enter the election party name</p>
                    <input className='party-input' type='text' placeholder='Election Party' />
                </div>
            </div>
            <div className='party-input-btn-div'>
                <button className='party-input-btn'>Add now</button>
            </div>
        </Fragment>
    )
}


export {PartiesContainer, AddBox};

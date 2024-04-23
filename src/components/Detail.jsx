import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import "./Detail.css"


const DetailHeader = () => {
    return (
        <div className='margin'>
            <h3>Statistics</h3>
            <ul>
                <li>Total people eligible for voting - 5128</li>
                <li>Number of people voted - 1482</li>
                <li>Number of people not voted yet - 3646</li>
            </ul>
        </div>
    );
}

const ElectionStatus = () => {
    return (
        <div className='margin'>
            <h3>Election Status</h3>
            <div className='election-status'>
                <button className='election-btn'>
                    Start the election timing
                </button>
                
                <div>
                    Time Left : 23:10
                </div>
            </div>
        </div>
    )
}

export const data = [
    ["Election", "Statistic"],
    ["Our Party", 11],
    ["My Party", 2],
    ["Z Party", 20],
  ];

const ElectionPieChart = () => {
    const [viewPort, setViewPort] = useState(true);

    const options = {
        is3D: viewPort,
    };

    const handleView = () => {
        setViewPort((prev) => !prev)
    }

    return (
        <div>
            <button className='margin' onClick={handleView}>
                {viewPort ? "2D View" : "3D View"}
            </button>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />

        </div>
    )
}

export {DetailHeader, ElectionStatus,ElectionPieChart};

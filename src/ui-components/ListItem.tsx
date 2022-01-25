import React from "react";

interface IListItem{
    children: React.ReactNode;
    label: string;
    timeframe: string;
    change: number;
    changePercent: number;
}

export default function ListItem({children, label, timeframe, change, changePercent } : IListItem){
    return (
        <>
        <div className='ListItem'>
            <div className="ListItem__title">
                <h1>{label}</h1>
                <h5>{timeframe}</h5>
            </div>

            <div className="ListItem__graph">
                {children}
            </div>

            <div className="ListItem__price">
                <h1>{change}</h1>
                <h4>{changePercent}</h4>
            </div>    
                   
        </div>
        </>
    )
}

import React from 'react'
import './Result.css';
import { useState , useEffect } from 'react';
import { GrScorecard } from "react-icons/gr";

export const Result = ({ans}) => {

    

    const [score, setScore] = useState(0);

    useEffect(() => {
    let result = [
        "26" , "Pegion" , "Argentina" , "4" , "60"
    ];
    let arr = Object.values(ans);
    console.log(arr , result );
    let i =0;
    let temp = 0;
    arr.forEach(element =>
        {
            if(element === result[i])
            {
                temp+=20;
                
            }
            i++;

        })
        setScore(temp);
    }, [])
    

  return (
    <div className='result-page d-flex justify-content-center align-items-center'>
        <div className='result-point'>
            <span className="icon-result"><GrScorecard/></span>
            {score} Score
        </div>
    </div>
  )
}

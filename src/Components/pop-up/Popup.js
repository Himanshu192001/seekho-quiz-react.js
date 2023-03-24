import React from 'react'
import './Popup.css'
import { AiOutlineQuestionCircle , AiOutlineClockCircle} from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export const Popup = ({hidePopup}) => {

  const navigate = useNavigate();

  function redirectTo()
  {
    navigate("/form");
  }


  return (
    <div className='pop-up'>
        <div className='pop-up-content'>
            <h3 className='pop-up-heading d-flex justify-content-between'>Quiz Rules <span className='icon-back' onClick={() =>{hidePopup(false)}}><BiArrowBack/></span></h3>
            <div className='pop-up-points'>
                <div className='point d-flex'>
                    <span className='point-icon'><AiOutlineClockCircle/></span>
                    <div>
                    <h5 className='heading-point'>10 Mins</h5>
                    <p className='desc-point'>Keep in mind that it's a time-bound quiz</p>
                    </div>
                </div>
                <div className='point d-flex '>
                    <span className='point-icon '><AiOutlineQuestionCircle/></span>
                    <div>
                    <h5 className='heading-point'>5 Questions</h5>
                    <p className='desc-point'>We believe that you will ace it</p>
                    </div>
                </div>
                <div className='point d-flex'>
                    <span className='point-icon '><SlBadge/></span>
                    <div>
                    <h5 className='heading-point'>50% Passing Criteria</h5>
                    <p className='desc-point'>All the best! See you on the other side.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn-quiz next-btn' onClick={redirectTo}>Start Quiz</button>
        </div>
    </div>
  )
}

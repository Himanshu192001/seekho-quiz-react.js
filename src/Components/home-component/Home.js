import React , {useState}from 'react'
import './Home.css'
import { FaRocketchat } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { TbSwords } from "react-icons/tb";
import { CgCopy } from "react-icons/cg";
import { AiOutlineQuestionCircle , AiOutlineClockCircle, AiFillStar} from "react-icons/ai";

import {Popup} from '../pop-up/Popup.js';
import Form from '../Form/Form';

export const Home = () => {

    const [popup, setPopup] = useState(false);

    function hidePopup(val)
    {
      setPopup(val);
    }


  return (
    <div className='relative'>
          <div className='banner'>
            <img className='img-banner' src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-file-image%252Fwebp-1672397293967-Associate%20Product%20Manager%20Readiness%20Quiz.webp" alt='img' />
        </div>
        <div className='quick-link-box'>
         <div className='d-flex align-items-center'><FaRocketchat className='ico'/><p className='m-1'> Leave a Comment</p></div> 
         <div className='d-flex align-items-center'><BiBookmark className='ico' /><p className='m-1'>Save Quiz</p></div>
         <div className='d-flex align-items-center'><TbSwords className='ico'/><p className='m-1'>Invite Friends</p></div>
        </div>
        <div>
          <h5 className='course-title'>Associate Product Manager Readiness Quiz</h5>
        </div>
        <div>
          <h4 className='detail-title mb-1'>This Quiz includes</h4>
          <div className='detail-points'>
          <div className='d-flex align-items-center'><CgCopy className="ico"/><p className='m-1'>10+ Attempts</p></div>
          <div className='d-flex align-items-center'><AiOutlineQuestionCircle className="ico"/><p className='m-1'>5 Questions</p></div>
          <div className='d-flex align-items-center'><AiOutlineClockCircle className="ico"/><p className='m-1'>10 Minute</p></div>
          <div className='d-flex align-items-center'><AiFillStar className="ico"/><p className='m-1'>100 Karma</p></div>
          </div>
        </div>
        <div className='btn-container'>
          <button className='btn-quiz' onClick={()=>{setPopup(!popup)}}>Take Quiz</button>
        </div> 
        { popup ? <Popup hidePopup={hidePopup}/> :''}
        
    </div>
  )
}

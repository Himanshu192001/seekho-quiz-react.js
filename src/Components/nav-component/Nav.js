import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import './Nav.css';

export const Nav = () => {
  return (<>
    <div className="navbar nav-b bg-body-tertiary p-3">
  <div className="container-fluid fs-1">
    <GiHamburgerMenu/>
    <img className='img' alt='' src="https://dntsgn6vvw8wj.cloudfront.net/resources/1663836897587-seekho%20logo%20for%20white%20bg.png"/>
    <BiSearch/>
  </div>
</div>
  <div className='para'>Quizzes / Associate Product Manager Readiness Quiz</div>
  </>
  )
}

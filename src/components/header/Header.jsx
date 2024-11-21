import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='' >
      <div className='w-11/12 mx-auto ' >
        {/* navbar */}
        <div className='flex justify-between items-center  '  >
          {/* logo */}
          <div>
            <Link to={"/"}>
              <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732199952/Group_2_uu20u7.svg" alt="" />
            </Link>
          </div>
          {/* navigation links */}
          <div  >
            <nav>
              <ul className='flex items-center gap-4 ' >
                <li className='' to={"/"}  > <NavLink>Home</NavLink> </li>
                <li> <NavLink className={""} to={`/about`} >About</NavLink> </li>
                <li> <NavLink className={""} to={`/services`} >Services</NavLink> </li>
                <li> <NavLink className={""} to={`/blog`} >Blog</NavLink> </li>
                <li> <NavLink className={""} to={`/contact`} >Contact</NavLink> </li>
              </ul>
            </nav>
          </div>
          {/* searchicon */}
          <div>
            <nav>
              <ul className='flex items-center justify-center gap-5 ' >
                <li>
                  <NavLink to={""} >
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732200190/Frame_gbqiwj.png" alt="" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={""} >
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732200190/Frame_1_e8gq3b.png" alt="" />
                  </NavLink>
                </li>
                <li>
                  <NavLink className={` border-2 py-2 px-2 border-[#FF3811] text-[#FF3811] `} to={""}>
                    Appointment
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

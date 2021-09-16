import React from 'react'
import Card from './cards'
import Bell from '../../assets/images/Bell.svg'
import Magnifier from '../../assets/images/Magnifier.svg'
import Face from '../../assets/images/Face.svg'
import l_Icon from '../../assets/images/l-Icon.svg'
import P_Icon from '../../assets/images/p-Icon.svg'
import R_Icon from '../../assets/images/r-Icon.svg'





function Main(props) {
  return (
    <div className="">
      <div className="content">
        <div className="flex justify-end    ">
          <div className="top-right">
            <img src={Magnifier} alt="" />
            <div className="notif">
              <div className="notif-body p-2 text-white flex justify-around">
                  <img src={Bell} alt="" />
                <p>15</p>
              </div>
            </div>
            <div className="user-pic">
              <img src={Face} alt="" />
            </div>
            <div className="user-name">
              <h3>Pixelz Warrios</h3>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="bd-head mt-16">
            <h1 className=' text-2xl'>Dashboard</h1>
            <h2 className='mt-2'>Home / Dashboard</h2>
          </div>
          <div className="card-group mt-10 flex justify-between">
            <Card title="Listed Items" num="10" icon={l_Icon} />
            <Card title="Purchased" num="3" icon={P_Icon} />
            <Card title="Referrals" num="2" icon={R_Icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

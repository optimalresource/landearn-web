import React from 'react'
import Card from './components'
import Bell from '../../assets/images/Bell.svg'
import Magnifier from '../../assets/images/Magnifier.svg'
import Face from '../../assets/images/Face.svg'
import l_Icon from '../../assets/images/l-Icon.svg'
import P_Icon from '../../assets/images/p-Icon.svg'
import R_Icon from '../../assets/images/r-Icon.svg'
import Stats from '../../assets/images/Stats.svg'

import Notification from './components/notification'

function Main(props) {
  return (
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
            <h1 className=" text-2xl">Dashboard</h1>
            <h2 className="mt-2">Home / Dashboard</h2>
          </div>
          <div className="card-group mt-10 justify-between">
            <Card title="Listed Items" num="10" icon={l_Icon} />
            <Card title="Purchased" num="3" icon={P_Icon} />
            <Card title="Referrals" num="2" icon={R_Icon} />
          </div>
        </div>
        <div className="lower-content">
          <div className="growth">
            <div className="growth-header">
              <div className="header-title">
                <div className="">
                  <h1>Sales Made</h1>
                  <p>Overall Information</p>
                </div>
              </div>
              <div className="header-switch">
                <div className="switch">
                  <div className="month">
                    <h1>Monthy</h1>
                  </div>
                  <div className="year">
                    <h1>Yearly</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats mt-6">
                <img src={Stats} alt="" />
            </div>
          </div>
          <div className="l-posts">
            <div className="notif-title">
                <h1>
                    Latest Notifications
                </h1>
            </div>
            <Notification body='You have received a new offer' date='28th Juny 2021'/>
            <Notification body='You have received a new offer' date='28th Juny 2021'/>
            <Notification body='You have received a new offer' date='28th Juny 2021'/>
            <div className="notif-link">
                <a href="/">See all Notifications</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Main

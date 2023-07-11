import React from 'react'
import {NavLink} from 'react-router-dom'


function LandingPage() {
  return (
    <div>
    <div class="hero-section">
  <div class="container col-xxl-8 px-4">
    <div class="row flex-lg-row-reverse align-items-center py-5">
      <div class="col-12 col-md-6 col-lg-6">
      <section class="iq-features">
            <div class="container">
               <div class="row align-items-center">
                  {/* <div class="col-lg-3 col-md-12">

                  </div> */}
                  <div class="col-lg-6 col-md-12">
                     <div class="holderCircle">
                        <div class="round"></div>
                        <div class="dotCircle">
                           <span class="itemDot active itemDot1" data-tab="1">
                           <i class="fa fa-clock-o"></i>
                           <span class="forActive"></span>
                           </span>
                           <span class="itemDot itemDot2" data-tab="2">
                           <i class="fa fa-comments"></i>
                           <span class="forActive"></span>
                           </span>
                           <span class="itemDot itemDot3" data-tab="3">
                           <i class="fa fa-user"></i>
                           <span class="forActive"></span>
                           </span>
                           <span class="itemDot itemDot4" data-tab="4">
                           <i class="fa fa-tags"></i>
                           <span class="forActive"></span>
                           </span>
                           <span class="itemDot itemDot5" data-tab="5">
                           <i class="fa fa-upload"></i>
                           <span class="forActive"></span>
                           </span>
                           <span class="itemDot itemDot6" data-tab="6">
                           <i class="fa fa-briefcase"></i>
                           <span class="forActive"></span>
                           </span>
                        </div>
                        <div class="contentCircle">
                           <div class="CirItem title-box active CirItem1">
                              <h2 class="title"><span>Automate</span></h2>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                              <i class="fa fa-clock-o"></i>
                           </div>
                           <div class="CirItem title-box CirItem2">
                              <h2 class="title"><span>Chat </span></h2>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                              <i class="fa fa-comments"></i>
                           </div>
                           <div class="CirItem title-box CirItem3">
                              <h2 class="title"><span>Responses</span></h2>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                              <i class="fa fa-user"></i>
                           </div>
                           <div class="CirItem title-box CirItem4">
                              <h2 class="title"><span>Tags</span></h2>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                              <i class="fa fa-tags"></i>
                           </div>
                           <div class="CirItem title-box CirItem5">
                              <h2 class="title"><span>Sharing</span></h2>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                              <i class="fa fa-upload"></i>
                           </div>
                           <div class="CirItem title-box CirItem6">
                              <h2 class="title"><span>Support</span></h2>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                              <i class="fa fa-briefcase"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-12"></div>
               </div>
            </div>
        </section>
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <p class="lead fw-lighter text-white">Quota Master</p>
        <p className='text-white fw-lighter'>
          Quota master helps you with your quota management, for easy tracking and safekeeping of records.<br/>
          Achieve More, Stress Less
        </p>
        <div className="">
         <NavLink to="/signup" > <button type="button" class="btn px-4 me-md-2">Get Started</button></NavLink>
        
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- end of hero section --> */}

</div>
  )
}

export default LandingPage
import React from 'react'
import './index.css'
import Author from '../../assets/images/mobile/author.png';

const FurtherQuestions = () => {
    return (
      <div className="further-questions-wrapper">
        <div className="fq-left">
          <div className="fq-title axiforma-bold-amazon-40px">
            Still have question?
          </div>
          <div className="fq-sub-title axiforma-bold-semi-18px">
            Schedule a call to get all answers
          </div>
          <div className="fq-message axiforma-regular-normal-mid-gray-16px">
            Select a date and time of your own convenience when you would love
            to have a video chat or phone call. The consultation will be
            presided by our licensed team of real estate advisors, the contact
            person will use the chat to get to know you better and confirm your
            specific request.
          </div>
          <div className="fq-author-section">
            <img src={Author} className="fq-author-pic" alt="author" />
            <div className="author-profile">
              <div className="author-name axiforma-regular-normal-black-16px">
                Gift Godwin
              </div>
              <div className="author-title axiforma-bold-black-12px">
                Lead Support Manager
              </div>
            </div>
          </div>
        </div>

        <div className="fq-right">
          <div className="appointment">
            <div className="appointment-text axiforma-bold-cod-gray-20px">
              Book appointment
            </div>
            <div className="right-arrow">
                <div className="fq-gt">
                    &gt;
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FurtherQuestions;
import React, { useReducer } from "react";
import { faqs } from '../../data/faqs';
import './index.css'

const reducer = (state, action) => {
  if (action.type === "CHANGE_ACTIVE_FAQ") {
    return {
      ...state,
      faqData: action.payload.faq_data,
    };
  } else {
      return state;
  }
};

const defaultState = {
  faqData: faqs,
};

const FAQs = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    function showFAQ(index) {
        let output = state.faqData;
        for(let i=0; i<output.length; i++){
            if(index === i) {
                if(output[index].active === 1) {
                    output[i].active = 0;
                }else {
                    output[i].active = 1;
                }
            }else {
                output[i].active = 0;
            }
        }
        dispatch({
          type: "CHANGE_ACTIVE_FAQ",
          payload: { faq_data: output },
        });
    }

    return (
      <div className="faqs-wrapper">
        <div className="faq-title axiforma-bold-cod-gray-28px">
          Frequently asked questions
        </div>

        
        {state.faqData.map((faq, index) => {
            return (
              <div className="faq" key={index}>
                <div className="faq-box" onClick={() => showFAQ(index)}>
                  <div className="faq-header axiforma-regular-cod-black-16px">
                    {faq.question}
                  </div>
                  {faq.active === 0 && <div className="faq-caret">&gt;</div>}
                  {faq.active === 1 && (
                    <div className="faq-caret-down">
                      <div className="caret-down">&gt;</div>
                    </div>
                  )}
                </div>
                {faq.active === 1 && (
                  <div className="faq-message axiforma-regular-normal-santas-gray-14px">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
        })}
          {/* <div className="faq-box">
            <div className="faq-header axiforma-regular-cod-black-16px">
              How is Landearn different from traditional real estate sites and
              agents?
            </div>
            <div className="faq-caret">&gt;</div>
          </div>

          <div className="faq-message axiforma-regular-normal-santas-gray-14px">
            Landearn is a real estate brokerage firm with a model developed with
            a developing nations first approach. Given too many irregularities
            around finding a property with the right title and the ones without
            known dispute, Landearn decided to partner with relevant bodies to
            help the buyer undertake the responsibility of performing due
            diligence. Aside from due diligence, Landearn helps buyers perform
            documentations, reduce the number of bottlenecks in obtaining a
            property, reduce too many hidden charges, buy at affordable rates,
            access mortgage facilities faster and easier, and finish the buying
            process in record time. For the sellers, Landearn helps them sell
            faster, given the portal is accessible for anyone around the world
            to make purchase from any given location and be rest assured that
            the purchase is done in good faith, and through our network, a lot
            more persons can access and find the property. In order words, we
            offer advertisement on a very large scale. Sellers also benefits
            from the clear and concise legal works we render, document handling,
            and having the advantage of managing properties he sells on his
            dashboard and make reference to them any time.
          </div> */}
        </div>
    );
}

export default FAQs;
import React from 'react'
import {FiPlus, FiMinus}  from 'react-icons/fi';
import {useState} from 'react';
const SingleFaq = ({question, answer}) => {
    const [isSeeAnswer, setIsSeeAnswer] = useState(false);
  return (
    <div className={`faqs ${isSeeAnswer && 'see-ans'}`} >
            <h3>{question}</h3>
            {isSeeAnswer && 
                <p>{answer}</p>
            }
            <button type='button' className='btn' onClick={() => setIsSeeAnswer(!isSeeAnswer)}>{!isSeeAnswer ? <FiPlus /> : <FiMinus />}</button>
        </div>
  )
}

export default SingleFaq
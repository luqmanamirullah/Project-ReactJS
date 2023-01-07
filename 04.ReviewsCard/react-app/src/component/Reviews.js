import { useState } from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {GoChevronRight, GoChevronLeft} from 'react-icons/go'
const Reviews = ({reviews, fetchError, isLoading}) => {
//    state
  const [index, setIndex] = useState(1);
  const [isOut, setIsOut] = useState(false);
  

    
// handle
  const checkNumber = (number) => {
    if (number > reviews.length) {
        return 1;
    };
    if (number < 1) {
        return reviews.length;
    };

    return number;
  }

  const handleAnimate = () => {
    setIsOut(true);

    return setTimeout(() => setIsOut(false), 500);
    
  }

  const nextComment = () => {
    handleAnimate();
    setTimeout(() => {
        setIndex(() => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })    
    }, 500)
  }

  const prevComment = () => {
    handleAnimate();
    setTimeout(() => {
        setIndex(() => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }, 500);
  }
  
  const review = reviews.find((people) => people.id === index); 

// debug
  console.log(review);
return (
    <>
        {fetchError && 
            <>
            <h1>Error: {fetchError}</h1>
            </>
        }


        {!fetchError && !isLoading && 
            <>
                <div className='reviews-container' style={{boxShadow: `20px 20px ${review.shadowcolor}`}}>
                    <div className={`bg ${isOut ? 'bg-out' : 'bg-show'}`} style={{backgroundColor: review.bgcolor}}></div>
                    <span className='rect rect-1'></span>
                    <span className='rect rect-2'></span>
                    <span className='rect rect-3'></span>
                    <span className='rect rect-4'></span>
                    <div className='img-section'>
                        <div className={`overlay ${isOut ? 'overlay-out': 'overlay-show'}`} style={{backgroundColor: review.shadowcolor}}></div>
                        <img src={review.img} alt="people pic" width={'150px'}  />
                    </div>
                    <div className='header-section'>
                        <div className='name-wraper'>
                            <h2 className={`${isOut ? 'text-out' : 'text-show'}`}>{review.name}</h2>
                        </div>
                        <h4 className={`${isOut ? 'text-out' : 'text-show'}`}>{review.job}</h4>
                    </div>
                    <div className='comment-section'>
                        <h1 className={`${isOut ? 'text-out' : 'text-show'}`}><FaQuoteLeft size={10}/> {review.comment} <FaQuoteRight size={10} /></h1>
                    </div>
                </div>
                <div className='btn-section'>
                    <button type='button' className='circle-btn' onClick={prevComment} ><GoChevronLeft size={24}  cursor='pointer'/></button>
                    <button type='button' className='circle-btn' onClick={nextComment}><GoChevronRight size={24}  /></button>
                </div>
            </>
        }

    </>
  )
}

export default Reviews
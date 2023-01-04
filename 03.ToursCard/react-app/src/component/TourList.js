import { useState } from "react"
import Loading from "./Loading";
import Tour from "./Tour";

const TourList = ({tours, fetchError, isLoading, handleDelete, handleRefresh}) => {
  // state
  const [readMore, setReadMore] = useState(false);
  return (
    <>
        {fetchError && <><p>Error: {fetchError}</p></>}
        {!fetchError && isLoading &&
        <>
            <Loading />
        </>
        }
        {!fetchError && !isLoading &&
        <>
            {tours.length && 
            <> 
                {tours.map((tour) => (
                   <Tour {...tour} handleDelete={handleDelete} readMore={readMore} setReadMore={setReadMore} key={tour.id}/>
                ))}
            </>
            }
            {!tours.length && 
            <div className="refresh card">
                <button type="button" onClick={handleRefresh}>Refresh</button>
            </div>
            }
        </>
        }
    </>
  )
}

export default TourList
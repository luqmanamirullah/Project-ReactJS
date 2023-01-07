import React, {Suspense, useEffect, useState} from 'react'
import Header from './component/Header';
import useAxiosFetchApi from './hooks/useAxiosFetchApi';

function App() {
  // state
  const [reviews, setReviews] = useState([]);

  // hooks
  const {data, fetchError, isLoading} = useAxiosFetchApi('http://localhost:3500/reviews');
  
  // fetch api
  useEffect(() => {
      setReviews(data);
    }, [data])
    
  const ShowReviews =  React.lazy(() => import('./component/Reviews'));
  return (
    <div className="App">
      <main>
      {!fetchError && isLoading &&
            <>
                <h1 className='loading'>Loading...</h1>
            </>
      }
      {!fetchError && !isLoading && 
        <>
          <Header />
          <Suspense fallback={<></>}>
            <ShowReviews reviews={reviews} fetchError={fetchError} isLoading={isLoading} />
          </Suspense >
        </>
      }
      </main>
    </div>
  );
}

export default App;

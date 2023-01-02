import {useContext} from 'react';
import Feed from "../component/home/Feed";
import Hero from "../component/home/Hero";
import DataContext from '../context/DataContext';
const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext
  (DataContext)
  return (
    <main className="home">
      <Hero />
      <div className="content">
        <div className="feed-section">
          {fetchError ? (
          <>
            <h1 style={{color: 'red'}}>{fetchError}</h1>
          </>
          ) : (
          <>
            {isLoading && 
              <>
                <p>Data is loading...</p>
              </>
            }
            {!isLoading && 
              <>
                <h1>Lorem Ipsum</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
                  soluta?
                </p>
                <div className="post-card-section">
                  {searchResults.length && <Feed searchResults={searchResults} />}
                  {!searchResults.length && <p>You don't have a blog</p>}
                </div>
              </>
            }
          </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

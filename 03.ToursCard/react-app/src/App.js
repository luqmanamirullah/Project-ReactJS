import {useEffect, useState} from 'react';
import TourList from './component/TourList';
import useAxiosFetchApi from './hooks/useAxiosFetchApi';

function App() {
  // state
  const [tours, setTours] = useState([]);

  // hooks
  const { data, fetchError, isLoading } = useAxiosFetchApi('http://localhost:3500/tours');

  // fetch api
  useEffect(() => {
    setTours(data);
  }, [data])

  // handle 
  const handleDelete = (id) => {
    const listTours = tours.filter((tour) => tour.id !== id);
    setTours(listTours)
  }

  const handleRefresh = () => {
    setTours(data);
  }

  // debug
  console.log(tours);
  return (
    <div className="App">
      <h1 className='title'>Our Tours</h1>
      <main>
        <TourList tours={tours} fetchError={fetchError} isLoading={isLoading} handleDelete={handleDelete} handleRefresh={handleRefresh}/>
      </main>
    </div>
  );
}

export default App;

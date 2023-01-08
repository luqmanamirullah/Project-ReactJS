import { useEffect, useState } from 'react';
import FAQsList from './component/FAQsList';
import Header from './component/Header';
import Search from './component/Search';
import useAxiosFetchApi from './hooks/useAxiosFetchApi';
import './index.css'
function App() {
  // state
  const [faqs, setFaqs] = useState([]);
  const [search, setSearch] = useState('');

  // hooks
  const {data, fetchError, isLoading} = useAxiosFetchApi('http://localhost:3500/faqs');

  // fetch api
  useEffect(() => {
    setFaqs(data);
  }, [data]);

  // debug
  return (
    <div className="App">
      <span className='border border-top'></span>
      <span className='border border-right'></span>
      <span className='border border-left'></span>
      <span className='border border-bottom'></span>
      <main>
        <Header />
        <Search setSearch={setSearch}/>
        <FAQsList search={search} faqs={faqs} fetchError={fetchError} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import SingleFaq from './SingleFaq';
const FAQsList = ({search, faqs, fetchError, isLoading}) => {

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const faqsFilter = faqs.filter((faq) => (
        ((faq.question).toLowerCase()).includes(search.toLowerCase())
    ))

    setSearchResults(faqsFilter);
  }, [faqs, search]);

  console.log(searchResults);
  return (
    <div className='faqs-container'>
    {searchResults.map((faq) => (
        <SingleFaq key={faq.id} {...faq}></SingleFaq>
    ))}
    </div>
  )
}

export default FAQsList
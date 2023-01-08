import {useState, useEffect} from 'react'
import axios from 'axios';

const useAxiosFetchApi = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchApi = async (url) => {
            setIsLoading(true);
            try {                
                const res = await axios.get(url, {
                    cancelToken: source.token
                });
    
                if (isMounted) {
                    setData(res.data);
                    setFetchError(null);
                }
            } catch (error) {
                if (isMounted) {
                    setFetchError(error.message);
                    setData([]);
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 500);
            }
        }

        fetchApi(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl])

    return {data, fetchError, isLoading};
}

export default useAxiosFetchApi;
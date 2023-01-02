import {useState, useEffect} from 'react'

const useScroll = () => {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return {isScroll};
}

export default useScroll;
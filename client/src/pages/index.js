import SearchBar from '../Components/Search-Bar/search-bar.component';
import { Comfortaa } from 'next/font/google'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const comfortaa = Comfortaa({ subsets: ['latin'], weight : '400' })

const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Research</i> made easy.', '<b>ChatterProbe</b> : the new meta to discovery'],
      typeSpeed: 50,
      backDelay : 3000,
      backSpeed : 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div className='w-screen h-screen bg-[#000000ee] py-40 flex flex-col items-center'>
      <div className={`h-1/4 mb-24 text-[#ffffff] text-7xl flex justify-center items-center ${comfortaa.className}`}>
      <span ref={el} />
      </div>
      <SearchBar/>
    </div>
  )
}

export default Home;
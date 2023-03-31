import SearchBar from '../Components/Search-Bar/search-bar.component';
import { Comfortaa } from 'next/font/google'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const comfortaa = Comfortaa({ subsets: ['latin'], weight : '400' })

const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Research</i> made easy.', '<b>ChatterProbe</b> : The new meta for discovery'],
      typeSpeed: 50,
      backDelay : 1500,
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
      <div className={`fixed bottom-8 text-white text-2xl ${comfortaa.className}`}>
        Made by <a href = "https://abhinav-saxena-dev.netlify.app/" target={'_blank'} className='underline hover:text-purple-600'>Abhinav Saxena</a>
      </div>
    </div>
  )
}

export default Home;
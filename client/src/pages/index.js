import SearchBar from '../Components/Search-Bar/search-bar.component';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <SearchBar/>
    </div>
  )
}

export default Home;
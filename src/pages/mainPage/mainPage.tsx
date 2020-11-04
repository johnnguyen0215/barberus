import Navbar from '../../components/navbar/navbar';
import Home from '../home/home';
import About from '../about/about';
import { useRef } from 'react';

const MainPage = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <>
      <Navbar ref={ref} />
      <Home />
      <About ref={ref} />
    </>
  );
};

export default MainPage;

import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { useEffect } from 'react';

export const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);  
  return (
    <>
        <Page1 />
        <Page2/>
    </>
  )
}

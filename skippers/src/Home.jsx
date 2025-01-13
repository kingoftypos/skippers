import React from 'react';
import Search from './Search';
import { useRecoilState } from 'recoil';
import Message from './components/Message';
import List from './components/List';
import { showState } from './atoms';

function Home() {
  const [show] = useRecoilState(showState);
  
  return (
    <div className="h-screen bg-gradient-to-r from-[#D7DDE8] to-[#757F9A] flex flex-col items-center justify-start pt-12 space-y-8">
      {/* Search Bar */}
      <Search />
      
      {/* Message and List */}
      {show && (
        <>
          <Message />
          <List />
        </>
      )}
    </div>
  );
}

export default Home;

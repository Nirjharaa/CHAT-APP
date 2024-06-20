// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar';
// import MessageContainer from '../../components/messages/MessageContainer';
// import Translator from '../../Translator/Translator';
// // import Translator from './Translator'; // Import the Translator component

// const Home = () => {
//   return <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-black shadow-lg'>
//   <Sidebar />
//   <MessageContainer />
//   <Translator />
// </div>;

// };

// export default Home;

import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';
import Translator from '../../Translator/Translator';

const Home = () => {
  return <div className='flex '>
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-gray-400 border-solid' style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)", borderRadius: "20px" }}>
      <Sidebar />
      <MessageContainer />
    </div>
    <div>
      <Translator />
    </div>
  
</div>;

};

export default Home;


import React from 'react';


function App() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-1/2 h-40 border-solid border-4 rounded bg-blue-700 border-blue-700 items-center p-4 flex flex-col justify-around shadow-lg text-white'>
        <h1 className='text-lg  tracking-widest '>A TailwindCss CRA setup</h1>
        <p className='tracking-wide'>I followed <a className='underline text-xl uppercase' href="https://daveceddia.com/tailwind-create-react-app/#production">this</a> blog post by Dave Ceddia for the configuration.</p>
        <p className='tracking-wide'> Hopefully you find this usefull!</p>
      </div>
    </div>
  );
}

export default App;

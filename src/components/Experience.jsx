import React from 'react';
import code from '../assets/amazon_portrait.jpeg';
import ht from '../assets/hackingtools.jpg';
import ss from '../assets/ss.png';
import pm from '../assets/pm.png';
import md from '../assets/md.png';
import c19 from '../assets/c19.jpg';
import fortran from '../assets/fortran.webp';

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-500 '>
            Projects
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent projects</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ht})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* Hover Effects */}
            <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black w-full h-full text-green-500'>
            <span className='  text-sm font-bold text-green-500 tracking-wider  '>
            <code> Israel's Ethical Hacking Tools</code>
              </span>
              <p className='text-center'>Keylogger, password brute force script, port scanner and more!</p>
              <div className='pt-8 text-center '>
                <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ss})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black w-full h-full text-green-500'>
            <span className='  text-lg font-bold text-green-500 tracking-wider  '>
            <code>  Sonar Scanner</code>
              </span>
              <p className='text-center'>An Arduino project that uses an ultrasonic sensor, to detect objects.</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/israelo19/Sonar-Scanner/blob/main/README.md'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/israelo19/Sonar-Scanner'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${c19})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black w-full h-full text-green-500'>
            <span className='  text-lg font-bold text-green-500 tracking-wider  '>
            <code>  Online Covid-19 Tester</code>
              </span>
              <p className='text-center'>Created a Machine Learning Web App for COVID-19 testing using TensorFlow.js</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/israelo19/COVID-19-AI-'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/israelo19/COVID-19-AI-'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pm})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black w-full h-full text-green-500'>
            <span className='  text-lg font-bold text-green-500 tracking-wider  '>
            <code> Password Manager</code>
              </span>
              <p className='text-center'>A password manager application tailored towards the people in the tech industry.</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/israelo19/Password-Manager'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/israelo19/Password-Manager'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${fortran})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black w-full h-full text-green-500'>
            <span className='  text-lg font-bold text-green-500 tracking-wider  '>
            <code> Fortran</code>
              </span>
              <p className='text-center'>This is collection of some fortran programs I've written.</p>
              <div className='pt-8 text-center'>
              <a href='https://github.com/israelo19/Fortran-for-Fun'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/israelo19/Fortran-for-Fun'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${md})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black w-full h-full text-green-500'>
              <span className='  text-lg font-bold text-green-500 tracking-wider  '>
               <code> MotiDesk </code>
              </span>
              <p className='text-center'>I am in the process of creating a device that would display motivational messages to a user once they return back to their desk.</p> 
              <div className='pt-8 text-center '>
                <a href='https://github.com/israelo19/MotiDesk'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg '>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/israelo19/MotiDesk'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-black font-bold text-lg'>
                Coded
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Experience;


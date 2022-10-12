import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {
    const [message, setMessage] = useState('');
    console.log(message);

    const clickHandler = event => {
        if (event.target.value === correctAnswer) {
            toast('Correct Answer', {
                position: 'top-center'
            });
        }
        else {
            toast('Wrong Answer', {
                position: 'top-center'
            });
        }
        setMessage(event.target.value);

    };
    return (
        <div className='bg-white py-2 px-6 rounded hover:bg-purple-200'>
            <div className="flex items-center my-3">
                <button className='mt-1'>
                    <input id={option} type="radio" onClick={clickHandler} value={option} name="radio" className="w-4 h-4 text-blue-600 cursor-pointer" />
                    <ToastContainer />
                </button>
                <label htmlFor={option} className="ml-2 text-sm font-medium text-gray-900 dark:text-blue-700">{option}</label>
            </div>

            {/* <div className="flex items-center my-4 bg-white py-2 px-6 rounded hover:bg-purple-200">
                    <div className='mt-1' >
                        <input id="radio-1" type="radio" onClick={clickHandler} value={options[0]} name="radio" className="w-full h-4 text-blue-600 cursor-pointer" />
                        <ToastContainer />
                    </div>
                    <label htmlFor="radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-blue-700">{options[0]}</label>
                </div>
                <div className="flex items-center my-4 bg-white py-2 px-6 rounded hover:bg-purple-200">
                    <div className='mt-1'>
                        <input id="radio-2" type="radio" onClick={clickHandler} value={options[1]} name="radio" className="w-full h-4 text-blue-600 cursor-pointer" />
                        <ToastContainer />
                    </div>
                    <label htmlFor="radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-blue-700">{options[1]}</label>
                </div>
                <div className="flex items-center my-4 bg-white py-2 px-6 rounded hover:bg-purple-200">
                    <div className='mt-1'>
                        <input id="radio-3" type="radio" onClick={clickHandler} value={options[2]} name="radio" className="w-full h-4 text-blue-600 cursor-pointer" />
                        <ToastContainer />
                    </div>
                    <label htmlFor="radio-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-blue-700">{options[2]}</label>
                </div>
                <div className="flex items-center my-4 bg-white py-2 px-6 rounded hover:bg-purple-200">
                    <div className='mt-1'>
                        <input id="radio-4" type="radio" onClick={clickHandler} value={options[3]} name="radio" className="w-full h-4 text-blue-600 cursor-pointer" />
                        <ToastContainer />
                    </div>
                    <label htmlFor="radio-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-blue-700">{options[3]}</label>
                </div> */}

            {/* <div className='container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
                <div >
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-6 whitespace-normal  rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[0]} name="radio-3" />
                    <ToastContainer />
                </div>
                <div>
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-6 whitespace-normal rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[1]} name="radio-3" />
                    <ToastContainer />
                </div>
                <div>
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-6 whitespace-normal rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[2]} name="radio-3" />
                    <ToastContainer />
                </div>
                <div>
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-6 whitespace-normal rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[3]} name="radio-3" />
                    <ToastContainer />
                </div>
            </div> */}


        </div>
    );
};

export default Options;
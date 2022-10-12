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
        </div>
    );
};

export default Options;
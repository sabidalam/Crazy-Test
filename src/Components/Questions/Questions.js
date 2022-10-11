import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ qs }) => {
    const { question, options, correctAnswer } = qs;

    const [display, setDisplay] = useState('');
    const showAnswer = () => {
        setDisplay(<h3 className='font-bold bg-white py-3 rounded-lg text-green-600 w-1/2 mx-auto mt-6'> Answer: {correctAnswer} </h3>);

    }

    const [message, setMessage] = useState('');

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
        <div className='my-12 grid grid-cols-1 bg-blue-700 rounded py-8 relative'>
            <div>
                <h3 className='text-white font-bold md:px-16 pb-6'>{question}</h3>
                <button onClick={showAnswer}>
                    <FontAwesomeIcon className='text-white md:absolute top-10 right-8' icon={faEye}></FontAwesomeIcon>
                </button>
            </div>
            <div className='container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex items-center my-4 bg-white py-2 px-6 rounded hover:bg-purple-200">
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
                </div>

            </div>
            {display}
        </div>

    );
};

export default Questions;
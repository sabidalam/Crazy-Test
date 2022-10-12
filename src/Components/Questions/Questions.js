import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Options from '../Options/Options';

const Questions = ({ qs }) => {
    const { question, options, correctAnswer } = qs;

    const [display, setDisplay] = useState('');
    const showAnswer = () => {
        setDisplay(<h3 className='font-bold bg-white py-3 rounded-lg text-green-600 w-1/2 mx-auto mt-6'> Answer: {correctAnswer} </h3>);
    }

    return (
        <div className='my-12 grid grid-cols-1 bg-blue-700 rounded py-8 relative'>
            <div>
                <h3 className='text-white font-bold px-4 md:px-16 pb-6'>{question}</h3>
                <button onClick={showAnswer}>
                    <FontAwesomeIcon className='text-white md:absolute top-10 right-8' icon={faEye}></FontAwesomeIcon>
                </button>
            </div>
            <div className='container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3'>
                {
                    options.map(option => <Options
                        option={option}
                        correctAnswer={correctAnswer}>
                    </Options>)
                }
            </div>

            {display}
        </div>

    );
};

export default Questions;
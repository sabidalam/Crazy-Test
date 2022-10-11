import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Questions = ({ qs }) => {
    const { question, options, correctAnswer } = qs;
    return (
        <div className='my-12 grid grid-cols-1 bg-blue-700 rounded py-8 relative'>
            <h3 className='text-white font-bold px-12 pb-8'>{question}</h3>
            <div className='container mx-auto px-12 grid grid-cols-2 gap-4'>
                {
                    options.map((option, _idx) => <Options
                        key={_idx}
                        option={option}>
                    </Options>)
                }
            </div>
            <div className='w-1/2 mx-auto rounded py-4 mt-6 bg-white hidden'>
                <h3 className='text-green-600 font-bold'>Answer: {correctAnswer}</h3>
            </div>
            <button>
                <FontAwesomeIcon className='text-white absolute top-10 right-8' icon={faEye}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Questions;
import React from 'react';
import Options from '../Options/Options';

const Questions = ({ qs }) => {
    const { question, options, correctAnswer } = qs;
    return (
        <div className='my-12 grid grid-cols-1 bg-blue-700 rounded py-8'>
            <h3 className='text-white font-bold px-12 pb-8'>{question}</h3>
            <div className='container mx-auto px-32 grid grid-cols-2 gap-8'>
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

        </div>
    );
};

export default Questions;
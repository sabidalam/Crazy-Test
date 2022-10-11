import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const allData = useLoaderData();
    const quiz = allData.data;
    console.log(quiz);
    const { name, questions } = quiz;


    return (
        <div>
            <h1 className='text-3xl font-bold mt-4 text-blue-600'>Quiz of {name}</h1>
            <div className='container mx-auto px-6 md:px-40'>
                {
                    questions.map(qs => <Questions
                        key={qs.id}
                        qs={qs}>
                    </Questions>)
                }
            </div>

        </div>
    );
};

export default Quiz;
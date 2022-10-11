import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../images/bg.jpeg';
import Topics from '../Topics/Topics';

const Home = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    // console.log(topics);

    return (
        <div>
            <div className='md:flex justify-evenly bg-orange-300 py-10'>
                <div className='md:text-left mt-8'>
                    <h2 className='text-4xl font-bold text-blue-600'>Easy And Crazy <br />
                        Online Testing.
                    </h2>
                    <p className='font-bold mt-3'>Test Your Programming Knowledge <br />
                        By Giving Easy Quizes.
                    </p>
                </div>
                <img className='(sm: ml-32 mt-5 ) w-1/3 rounded-lg' src={img} alt="" />
            </div>
            <div className='container mx-auto px-16 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    topics.map(topic => <Topics
                        key={topic.id}
                        topic={topic}>
                    </Topics>)
                }

            </div>

        </div>
    );
};

export default Home;
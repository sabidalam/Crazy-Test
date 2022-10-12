import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    console.log(topic);
    const { id, name, logo, total } = topic;

    return (
        <div className='border-2 border-blue-700 rounded-lg'>
            <img className='p-4 bg-gray-300 rounded-t-lg' src={logo} alt="" />
            <div className='my-2 flex justify-between items-center px-4'>
                <h4 className='font-bold text-blue-600'>{name}</h4>
                <div>
                    <button className='font-bold bg-blue-600 px-3 py-1 rounded-lg text-white'><Link to={`/quiz/${id}`}>Start Test
                        <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                    </button>
                </div>
            </div>
            <h4 className='font-semibold mb-2'>Total Question : {total}</h4>
        </div>
    );
};

export default Topics;
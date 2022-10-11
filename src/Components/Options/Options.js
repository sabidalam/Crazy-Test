import React from 'react';

const Options = ({ option }) => {
    return (
        <div className='bg-white py-2 px-6 rounded hover:bg-purple-200'>
            <div className="flex items-center my-4">
                <button>
                    <input id="radio-1" type="radio" value="" name="radio" className="w-4 h-4 text-blue-600 cursor-pointer" />
                </button>
                <label htmlFor="radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-blue-700">{option}</label>
            </div>

            {/* <div >
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-8 whitespace-normal  rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[0]} name="radio-3" />
                    <ToastContainer />
                </div>
                <div>
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-8 whitespace-normal rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[1]} name="radio-3" />
                    <ToastContainer />
                </div>
                <div>
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-8 whitespace-normal rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[2]} name="radio-3" />
                    <ToastContainer />
                </div>
                <div>
                    <input className='border shadow-md text-blue-600 bg-sky-50 hover:bg-purple-200 p-8 whitespace-normal rounded w-full font-semibold' onClick={clickHandler} type="button" value={options[3]} name="radio-3" />
                    <ToastContainer />
                </div> */}

        </div>
    );
};

export default Options;
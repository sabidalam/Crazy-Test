import React from 'react';

const Options = ({ option }) => {
    return (
        <div className='bg-white py-2 px-6 rounded'>
            <div class="flex items-center my-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600" />
                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-blue-700">{option}</label>
            </div>

        </div>
    );
};

export default Options;
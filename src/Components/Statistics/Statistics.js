import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const Statistics = () => {
    const allData = useLoaderData();
    const data = allData.data;
    return (
        <div className='my-12 w-1/2 mx-auto'>
            <h2 className='text-2xl font-semibold mb-4'>Statistics of Data</h2>
            <BarChart width={730} height={450} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="id" fill="#8884d8" />
                <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Statistics;

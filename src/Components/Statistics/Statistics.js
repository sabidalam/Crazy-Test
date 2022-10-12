import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const Statistics = () => {
    const allData = useLoaderData();
    const data = allData.data;
    return (
        <div className='my-12 md:w-1/2 md:mx-auto'>
            <h2 className='text-2xl font-semibold mb-4'>Statistics of Data</h2>
            <div className='mt-8'>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="id" fill="#8884d8" />
                        <Bar dataKey="total" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;

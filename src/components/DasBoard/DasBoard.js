import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../hooks/useData/useData';

const DasBoard = () => {
    const [data, setData] = useData();
    return (
        <div className='grid grid-cols-2  m-5'>
            <LineChart className='mx-auto' width={500} height={300} data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="sell" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />

            </LineChart>

            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <AreaChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis ></YAxis>
                <Tooltip />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
            {/* </ResponsiveContainer> */}


            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart className='mx-auto'
                width={560}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
            {/* </ResponsiveContainer> */}
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <PieChart width={400} height={400} >
                <Tooltip />
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default DasBoard;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhone] = useState([])
    useEffect(() => {
        //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res=>res.json())
        //     .then(data=>console.log(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const PhoneData = data.data.data;
                const fakeData = PhoneData.map(data => {
                    const obj = {
                        name: data.phone_name,
                        price: parseInt(data.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhone(fakeData)
            })
    }
        , [])
    return (
        <div>
            <h1 className='text-5xl text-center mt-10 mb-3'>Phones :{phones.length} </h1>
            {
                <BarChart width={1200} height={450} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            }
        </div>
    );
};

export default Phones;
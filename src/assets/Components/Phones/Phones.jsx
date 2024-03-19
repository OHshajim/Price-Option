import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Bars } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhone] = useState([])
    const [isLoad, setLoad] = useState(true)
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
                setLoad(false)
            })
    }
        , [])
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl text-center mt-10 mb-3'>Phones :{phones.length} </h1>
            {isLoad && <div>
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>

            }
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
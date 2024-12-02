import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Phone = () => {

    const phone = useLoaderData();
    console.log(phone)

    const { name, image} = phone

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt="" />
        </div>
    )
}

export default Phone
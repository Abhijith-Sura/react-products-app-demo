import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Product() {
    const location = useLocation()
    const navigate = useNavigate()
    const product = location.state?.product

    if (!product) {
        return (
            <div className='container mt-10 text-center'>
                <p className='text-2xl text-red-500'>Product not found or no state transferred.</p>
                <button
                    onClick={() => navigate('/products')}
                    className='btn btn-primary mt-4'
                >
                    Back to Products
                </button>
            </div>
        )
    }

    return (
        <div className='container mt-10 bg-white p-10 rounded-lg shadow-lg'>
            <button
                onClick={() => navigate(-1)}
                className='mb-6 text-blue-600 hover:underline flex items-center'
            >
                &larr; Back to Products
            </button>
            <div className='flex flex-col md:flex-row gap-10 items-center md:items-start'>
                <div className='w-full md:w-1/3 flex justify-center'>
                    <img src={product.image} className="max-h-96 object-contain" alt={product.title} />
                </div>
                <div className='w-full md:w-2/3'>
                    <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
                    <p className='text-2xl font-bold text-blue-600 mb-6'>${product.price}</p>
                    <div className='bg-gray-100 p-4 rounded'>
                        <h3 className='font-semibold mb-2'>Description</h3>
                        <p className='text-gray-700 leading-relaxed'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product


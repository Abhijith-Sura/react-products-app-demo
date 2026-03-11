import React from 'react'

function ContactUS() {
    return (
        <div className='container mx-auto mt-10 flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-purple-50 to-blue-100 rounded-xl shadow-lg p-10'>
            <h1 className='text-4xl font-extrabold text-purple-700 mb-4 drop-shadow'>Contact Us</h1>
            <p className='text-xl text-gray-700 mb-6'>Have questions? Reach out to us anytime.</p>
            <div className='mt-4 text-lg text-gray-800 bg-white rounded-lg p-6 shadow-md'>
                <p className='mb-2'><span className='font-bold'>Email:</span> support@productsapp.com</p>
                <p><span className='font-bold'>Phone:</span> +1 (555) 000-0000</p>
            </div>
        </div>
    );
}

export default ContactUS

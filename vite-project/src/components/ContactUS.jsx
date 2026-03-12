import React from 'react'

function ContactUS() {
    return (
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white py-16 px-4">
            <div className="max-w-xl w-full flex flex-col items-center text-center bg-white rounded-xl shadow p-8 border border-gray-100">
                <h1 className="text-5xl font-bold mb-4 text-blue-700">
                    Contact <span className="text-pink-500">Us</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">Have questions? Reach out to us anytime.</p>
                <div className="text-lg text-gray-800 bg-white rounded p-6 shadow border border-gray-100 w-full">
                    <p className="mb-2"><span className="font-bold">Email:</span> support@productsapp.com</p>
                    <p><span className="font-bold">Phone:</span> +1 (555) 000-0000</p>
                </div>
            </div>
        </section>
    );
}

export default ContactUS

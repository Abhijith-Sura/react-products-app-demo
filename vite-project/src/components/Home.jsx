

import React from 'react';


function Home() {
    return (
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white py-16 px-4">
            <div className="max-w-xl w-full flex flex-col items-center text-center bg-white rounded-xl shadow p-8 border border-gray-100">
                <h1 className="text-5xl font-bold mb-4 text-blue-700">
                    Welcome to <span className="text-pink-500">ProductsApp</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">Find and shop the latest products easily.</p>
                <a
                    href="/products"
                    className="inline-block px-6 py-2 rounded bg-blue-600 text-white text-base font-semibold shadow hover:bg-blue-700 transition"
                >
                    Browse Products
                </a>
            </div>
        </section>
    );
}

export default Home

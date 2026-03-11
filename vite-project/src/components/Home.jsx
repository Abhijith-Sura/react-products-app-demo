import React from 'react'

function Home() {
    return (
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-4 font-sans">
            <div className="max-w-2xl w-full flex flex-col items-center text-center bg-white/90 rounded-3xl shadow-2xl p-12 border border-blue-100">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
                    alt="Shop"
                    className="w-28 h-28 mb-6 drop-shadow-xl opacity-90 animate-bounce-slow"
                />
                <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                    Discover <span className="text-blue-600">Products</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
                    Shop the latest and greatest, all in one place.
                </p>
                <a
                    href="/products"
                    className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Browse Products
                </a>
            </div>
        </section>
    );
}

export default Home

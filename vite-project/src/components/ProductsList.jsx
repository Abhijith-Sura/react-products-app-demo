import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductsList() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    //navigate to product object
    const gotToProduct = (productObject) => {
        //navigation logic
        //while navigting,transefer product obj too
        navigate(`/products/${productObject.id}`, { state: { product: productObject } })
    }

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                if (res.status === 200) {
                    let productsData = await res.json();
                    setProducts(productsData);
                    setFilteredProducts(productsData);
                } else {
                    throw new Error("Failed to fetch products");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products/categories");
                if (res.status === 200) {
                    let cats = await res.json();
                    setCategories(cats);
                }
            } catch {}
        };
        fetchProducts();
        fetchCategories();
    }, []);

    useEffect(() => {
        let filtered = products.filter((product) => {
            const matchesCategory = category ? product.category === category : true;
            const matchesSearch = search ? product.title.toLowerCase().includes(search.toLowerCase()) : true;
            const matchesMin = minPrice ? product.price >= parseFloat(minPrice) : true;
            const matchesMax = maxPrice ? product.price <= parseFloat(maxPrice) : true;
            return matchesCategory && matchesSearch && matchesMin && matchesMax;
        });
        setFilteredProducts(filtered);
    }, [search, category, minPrice, maxPrice, products]);

    if (loading) {
        return <p className='text-center text-2xl text-blue-300'>Loading...</p>;
    }
    if (error) {
        return <p className='text-center text-2xl text-red-300'>{error}</p>;
    }
    return (
        <div className="container mx-auto p-4 font-sans" style={{fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif`}}>
            <h1 className="text-5xl font-bold mb-10 text-center text-gray-900 tracking-tight" style={{letterSpacing: '-0.02em'}}>Products <span className="text-blue-600">List</span></h1>
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center items-center bg-white/80 p-6 rounded-2xl shadow-lg border border-blue-100">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border border-blue-200 rounded-lg px-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg placeholder-gray-400 font-medium bg-white/90"
                    style={{fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif`}}
                />
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="border border-blue-200 rounded-lg px-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium bg-white/90"
                    style={{fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif`}}
                >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                </select>
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className="border border-blue-200 rounded-lg px-4 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium bg-white/90"
                    style={{fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif`}}
                    min="0"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className="border border-blue-200 rounded-lg px-4 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium bg-white/90"
                    style={{fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif`}}
                    min="0"
                />
            </div>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.length === 0 ? (
                    <div className="col-span-full text-center text-gray-400 text-2xl font-medium py-10">No products found.</div>
                ) : (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border border-blue-100 p-7 rounded-2xl shadow-xl flex flex-col items-center bg-white cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 group relative overflow-hidden"
                            onClick={() => gotToProduct(product)}
                        >
                            <img src={product.image} alt={product.title} className="h-44 object-contain mb-4 group-hover:scale-110 transition-transform duration-200" />
                            <h2 className="text-lg font-semibold text-center mb-2 line-clamp-2 text-gray-900" style={{letterSpacing: '-0.01em'}}>{product.title}</h2>
                            <p className="text-2xl font-bold text-blue-600 mb-2">${product.price}</p>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full absolute top-2 right-2 capitalize font-semibold tracking-wide">{product.category}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductsList

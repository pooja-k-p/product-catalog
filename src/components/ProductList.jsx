
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts, deleteProduct } from '../services/Api'

function ProductList() {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const result = await getProducts()
        setProducts(result.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this product?'
        )

        if (confirmDelete) {
            await deleteProduct(id)
            fetchProducts()
        }
    }

    return (
        <div className="container">
            <h2>Product Catalog</h2>

            <Link to="/add-product">
                <button>Add Product</button>
            </Link>

            <table border="1" cellPadding="10" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>

                            <td>
                                <Link to={`/edit-product/${product.id}`}>
                                    <button>Edit</button>
                                </Link>
                                

                                <button onClick={() => handleDelete(product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList

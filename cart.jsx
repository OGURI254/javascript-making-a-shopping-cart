import React, { Component } from 'react'

export default class Cart extends Component {
    state = {
        products: [
            // map
            { id: 1, title: "Phones", products: ["Tecno", "RealMe", "Samsung"] },
            { id: 2, title: "Laptop", products: ["Lenovo", "hP", "Compaque", "Del"] },
            { id: 3, title: "Fruites", products: ["Mango", "Orange"] },
            { id: 4, title: "Utensils", products: ["Plate", "Cup", "Spoon"] },
            { id: 5, title: "Furniture", products: ["Chair", "Bed", "Stool"] }
        ]
    }

    render() {
        const handleIncrement = (product) => {
            const newProducts = [...this.state.products]
            const index = newProducts.indexOf(product)
            newProducts[index].quantity++
            this.setState({ products: newProducts })
        }
        const handleDecrement = (product) => {
            const newProducts = [...this.state.products]
            const index = newProducts.indexOf(product)
            newProducts[index].quantity--
            this.setState({ products: newProducts })
        }

        const handleDelete = (product) => {
            const newProducts = this.state.products.filter((product_)=>product.id !== product_.id )
            this.setState({ products: newProducts })
        }
        const getTotalPrice = (quantity, price) => quantity * price

        const mapProduct = (product) => {
            return (
                <div key={product.id} className="card text-center mb-2">
                    <div className="card-header">
                        {product.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Price: {product.price}</h5>
                        <p className="card-text">Total Price: {getTotalPrice(product.quantity, product.price)}</p>
                        <button className='btn btn-primary m-2' onClick={() => { handleDecrement(product) }}>-</button>
                        {product.quantity}
                        <button className='btn btn-primary m-2' onClick={() => { handleIncrement(product) }}>+</button>

                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-danger" onClick={() => { handleDelete(product) }}>
                            Delete
                        </button>
                    </div>
                </div>
            )
        }
        // <React.Fragment>
        //     
        // </React.Fragment>
        return (
            <div className="container mt-2">
                {this.state.products.map(mapProduct)}
            </div>
        )
    }
}


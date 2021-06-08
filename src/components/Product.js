import React from 'react'

export default function Product(props) {
    const {product} = props;
    return (
        <div>
            <img className="small picSize" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
        </div>
    )
}

import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const course = props.cart;
    const total = course.reduce((total, course) => total+course.price,0);
    const discount = total / 10;
    return (
        <div className='cartSection'>
            <div className='orderTitle'>
                <h3>Ordered summary</h3>
                <h4>Items Order: {course.length}</h4>
            </div>
            <div className="coursePrice">
                <p>
                    Price: {total} Taka <br />
                    Discount: {discount} Taka
                </p>
                <h6>Total Price: {total-discount} Taka</h6>
            </div>
            <button className='persisBtn'>Review your course</button>
        </div>
    );
};

export default Cart;
import React from 'react'
import { toast } from 'react-toastify';

const Cart = ({cartItems, onRemove, onCheckout}) => {

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (item) => {
        onRemove(item.id);
        toast.error(`"${item.name}" removed form cart.`, {
            position: 'top-center',
            autoClose: 2500,
        });
    };

    const handleCheckout = () => {
        if(cartItems.length === 0 ) return;
        onCheckout();
        toast.success('Checkout successful! Your cart has been cleared', {
            position: 'top-center',
            autoClose: 3000,
        });
    };

    if(cartItems.length === 0) {
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-6xl mb-4">🛒</span>
            <h3 className="text-xl font-bold text-gray-700">
              Your cart is empty
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Browse products and click "Buy Now" to add items.
            </p>
          </div>
        );
    }

    return(
        <div className='max-w-2xl mx-auto rounded-xl border border-gray-200 px-6'>
            <h3 className='text-xl font-bold text-gray-900 mb-6'>Your Cart</h3>

            <div className='flex flex-col gap-4'>
                {cartItems.map((item) => (
                    <div key={(item.id)} className='bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4 shadow-sm'>
                        {/* Icon + Name  */}
                        <div className='flex items-center gap-3'>
                            <span className='text-2xl'>{item.icon}</span>
                            <div>
                                <p className='text-sm font-semibold text-gray-900'>{item.name}</p>
                                <p className='text-xs text-gray-400'>
                                    {item.period === 'one-time' ? 'One-time payment' : item.period === 'yearly' ? 'Per year' : 'Per month'}
                                </p>
                            </div>
                        </div>

                        {/* Price + Remove Button  */}
                        <div className='flex items-center gap-4'>
                            <span className='text-base font-bold text-gray-900'>${item.price}</span>
                            <button onClick={() => handleRemove(item)} className='text-xs font-semibold text-red-500 hover:text-red-700 transition-colors cursor-pointer'>Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total  */}
            <div className='flex justify-between items-center mt-6 pt-4 border-t border-gray-200'>
                <span className='text-base font-semibold text-gray-700'>Total: </span>
                <span className='text-2xl font-extrabold text-gray-900'>${total}</span>
            </div>
            
            {/* Checkout button  */}
            <button onClick={handleCheckout} className='mt-5 w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 bg-[#7X3AED]'>Proceed to Checkout</button>
        </div>
    )
}

export default Cart
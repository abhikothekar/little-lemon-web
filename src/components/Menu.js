//create Menu component 
import React from 'react';
import recipes from '../recipes';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Adjust the path as necessary
const Menu = () => {
    const handleOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been processing.",
                icon: "success"
              });
            }
          });
    };
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This Week's Special Menu</h2>
                <Link to="/booking"> <button>Order Menu</button></Link>
            </div>
            <div className='cards'>
                {
                    recipes.map((recipe, index) => (
                        <div key={recipe.id} className='menu-items'>
                            <img src={recipe.image} alt=''></img>
                            <div className='menu-content'>
                                <div className='heading'>
                                    <h5>{recipe.title}</h5>
                                    <p>₹ {recipe.price}</p>
                                    </div>
                                    <p>{recipe.description}</p>
                                    <button className='orderbtn' onClick={()=> handleOrder(recipe.id)}>Order now</button>
                            </div>
                            </div>
                            ))
                }
            </div>
        </div>
    )};
export default Menu;
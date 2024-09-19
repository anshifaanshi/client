import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='w-full h-52 px-24'></div>

      <main>
        <div className='headerdiv'>
          <div className='container'>


            <h1 className='welcome'>Welcome <span className='meal-mate'>Meal Mate</span></h1>
            <p className='text-secondary fw-bold'>
              Order your favorite meals online and enjoy fast, fresh, and delicious food delivered right to your doorstep
              At [Your Website Name], we bring you a seamless dining experience that blends convenience with quality. Explore a diverse menu of mouth-watering dishes crafted by top chefs from renowned hotels and restaurants. Whether you're craving a hearty meal, a light snack, or something in between, we've got you covered. Our easy-to-use platform allows you to browse, customize, and order your favorite foods with just a few clicks. Enjoy real-time updates on your order, secure payment options, and prompt delivery right to your door. Indulge in the flavors you love, without leaving the comfort of your home. Your next meal is just a click away!
            </p>
            <Link to={'/signup'}>
              <button className='btn'>Join With Us</button>
            </Link>
            <Link to={'/login'}>
              <button className='btn'>LogIn</button>
            </Link>
            <br />
            <button className='btn'>
              <Link className='nav-link' to='/hotel/hotels'>
                Restaurants
              </Link>
            </button>
          </div>


        </div>



        <div>
        <div className='image-container'></div>
          <img src='https://www.talabat.com/assets/images/banner-img-1.webp' alt='' className='talabatpic1' />
         
          <img src='https://www.talabat.com/assets/images/banner-img-2.webp' className='talabatpic2' />
<div className='backgroundimg'>
  
</div>









          <p className='beautiful-text'>Whats Whould You Like Craves Today?</p>
        </div>

        <div className='container'>
          <div  className='row'>
            <div className='col-lg-3 col-sm'>
              <img src='https://tse3.mm.bing.net/th?id=OIP.Wp6XgnYRrIXB2P0mSTBhBAHaEo&pid=Api&P=0&h=220' className='styled-image'></img>

            </div>
            <div className='col-lg-3 col-sm'>
              <img src='https://tse2.mm.bing.net/th?id=OIP.OH41atW7q-eLSj8pIbe-XAHaE8&pid=Api&P=0&h=220' className='styled-image'></img>

            </div>
            
            <div className='col-lg-3 col-sm'>
              <img src='https://tse1.mm.bing.net/th?id=OIP.5l-sUrth0kbLqcqaAh6fzAHaEo&pid=Api&P=0&h=220' className='styled-image'></img>

            </div>
            <div className='col-lg-3 col-sm'>
              <img src='https://tse4.mm.bing.net/th?id=OIP.aL8FhlTSUXOq-w3h57t8AQHaEo&pid=Api&P=0&h=220' className='styled-image'></img>

            </div>

          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm'>
          
              <img src='https://tse3.mm.bing.net/th?id=OIP.exHSDmjH3d6p7xu6xlK9egHaE8&pid=Api&P=0&h=220' className='styled-image'></img>
             
            </div>
            <div className='col-lg-3 col-sm'>
          
    <img src='https://www.ubereats.com/_static/88d55f7112efe55f.webp' className='styled-image'></img>
         
        </div>
        <div className='col-lg-3 col-sm'>
          
          <img src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*' className='styled-image'></img>
               
              </div>
            </div>
          </div>
      
      </main>
    </>
  );
}

export default Home;

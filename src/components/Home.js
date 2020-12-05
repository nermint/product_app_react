import React from 'react';

// components
import Categories from './Categories';
import Products from './Products';


const Home =() => {

  return(
   
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Categories />
          </div>
          <div className="col-md-8">
            <Products />
          </div>
        </div>
        </div>
    
   
  )

}

export default Home;
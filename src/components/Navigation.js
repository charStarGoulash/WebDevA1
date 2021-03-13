import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink class="disp pos" to="/"><h3>Home</h3></NavLink>
          <NavLink class="disp pos" to="/fav"><h3>Favorite</h3></NavLink>
       </div>
    );
}
 
export default Navigation;
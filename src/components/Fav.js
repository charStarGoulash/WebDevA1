import React from 'react';
import Favorite from './Favorite'
import Navigation from'./Navigation'
 
const Fav = () => {
    var storageArray = [];
    var keys = Object.keys(localStorage);
    keys.forEach(key=>{
        var json_str =JSON.parse(localStorage.getItem(key));
        try {
            storageArray.push(json_str);
        } catch (e) {
            console.log(e)
        }
   });

    return (
        <div className="App">
            <header className="App-header">
            <div class="disp pos">
                <Navigation />
            </div>
                <h3 class="disp">FAVORITES</h3>
            </header>
            <div className="articles">
                {
                    (storageArray !== null) ? storageArray.map((article, index) => <Favorite key={index} article={article.article} />) : ''
                }
            </div> 
        </div>      
    );
}
 
export default Fav;

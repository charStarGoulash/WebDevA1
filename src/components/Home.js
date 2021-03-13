import React, {useState, useEffect} from 'react'
import Article from './Article'
import Navigation from'./Navigation'
 
const Home = () => {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('wallstreet');
    
    useEffect(() =>{
        fetch("https://www.reddit.com/r/" + subreddit + "/hot.json?limit=9").then(res =>{
        if (res.status !== 200){
            console.log("ERROR");
            return;
        }
    
        res.json().then(data => {
            if(data !== null){
                setArticles(data.data.children);
            }
            
        });
        })
    },[subreddit]);
    
    return (
    <div className="App">
        <header className="App-header">
            <div class="disp">
                <Navigation />
            </div>
            <h3 class="disp pos">SEARCH</h3>
            <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
        </header>
        <div className="articles">
            {
                (articles !== null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
            }
        </div>
    </div>
    );
}
 
export default Home;
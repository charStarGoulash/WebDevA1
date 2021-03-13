import React from 'react'

function AddFav(props){
    if(window.localStorage.getItem(props.article.id) === null){
        window.localStorage.setItem(props.article.id, JSON.stringify(props));
    } 
    else{
        alert("This post is already in your favorites!");
    }
}

function Article(props){
    return(
        <article>
            <a href={"https://reddit.com" + props.article.permalink } target="_blank">
                <h3>{ props.article.title }</h3>
            </a>
            <div>
                <a className="button1" onClick={() => AddFav(props)}>Add To Favorites</a>
            </div>
            <p>Score : {props.article.score}</p>
        </article>
   )
}

export default Article
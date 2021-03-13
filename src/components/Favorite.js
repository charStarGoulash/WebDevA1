import React from 'react'

function Favorite(props){
    return(
        <article>
            <a href={"https://reddit.com" + props.article.permalink } target="_blank">
                <h3>{ props.article.title }</h3>
            </a>
            <div>
                <a className="button1" onClick={() => RemoveFav(props)} >Remove From Favorites</a>
            </div>
            <p>Score : {props.article.score}</p>
        </article>
   )
}

function RemoveFav(props){
    window.localStorage.removeItem(props.article.id);
    window.location.reload();
}

export default Favorite
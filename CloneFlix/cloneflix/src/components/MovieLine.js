import React from 'react';
import './MovieLine.css';

export default ({title, items}) => {
  return (
    <div>
		  <h2>{title}</h2>
			<div className="movieRow--linearea">
				{items.results.length > 0 && items.results.map((elem, index) => (
					<img 
						key={index}
						src={`http://image.tmdb.org/t/p/w300${elem.poster_path}`}
						alt={elem.original_title}
					/>
				))}
			</div>
    </div>
  );
}


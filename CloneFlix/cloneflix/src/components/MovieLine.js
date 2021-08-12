import React from 'react';
import './MovieLine.css';

export default ({title, items}) => {
  return (
    <div className="movieRow--container">
		  <h2>{title}</h2>
			<div className="movieRow--linearea">
				<div className="movieRow--list">
					{items.results.length > 0 && items.results.map((elem, index) => (
						<div key={index} className="movieRow--item">
							<img 
								src={`http://image.tmdb.org/t/p/w300${elem.poster_path}`}
								alt={elem.original_title}
							/>
						</div>
					))}
				</div>
			</div>
    </div>
  );
}


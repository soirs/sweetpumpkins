// Movie.js

import React from 'react';
import './Movie.css';
import LoadingMovie from './LoadingMovie.js';

class Movie extends React.Component {
	state = {
		isLoading: true,
		movie: {},
	};

	componentDidMount(url, id) {
		const { movieId } = this.props.match.params;
		const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
			process.env.REACT_APP_TMDB_API_KEY
		}&language=en-US`;
		fetch(movieUrl)
			.then(response => response.json())
			.then(data => this.setState({ movie: data, isLoading: false }))
			.catch(error => console.log('Error:', error));
	}

	render() {
		const {
			title,
			backdrop_path,
			poster_path,
			release_date,
			genres,
			overview,
			vote_average,
			runtime,
			original_title,
			tagline,
		} = this.state.movie;

		// const hej = render.map();
		const releaseYear = release_date ? release_date.substring(0, 4) : null;
		// Top backdrop img
		const backdropUrl = backdrop_path
			? `http://image.tmdb.org/t/p/w1280/${backdrop_path}`
			: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
		// Poster
		const posterUrl = poster_path ? `http://image.tmdb.org/t/p/w500/${poster_path}` : null;
		const backgroundStyle = {
			backgroundImage: `url(${backdropUrl})`,
		};
		return (
			<div className="movie-page">
				{this.state.isLoading ? ( // Ternary operator
					<LoadingMovie />
				) : (
					<div className="movie-page">
						<div className="movie-image" style={backgroundStyle} alt="No image yet" />
						<div className="content">
							<div className="poster">
								<img src={'http://image.tmdb.org/t/p/w185/' + poster_path} alt="" />
							</div>
							<div className="movie-details">
								<h1>
									{title}
									<span>({releaseYear})</span>
								</h1>
								<blockquote>"{tagline}"</blockquote>
								<br />
								<h5>Original title: {original_title}</h5>
								<section className="genres">
									{genres.map((genre, index) => (
										<div key={genre.id}>
											<span>{genre.name}</span>
											{index < genres.length - 1 && <span className="separator">|</span>}
										</div>
									))}
								</section>
								<h5>
									Rating:
									<span>{vote_average}</span>
								</h5>
								<h5>
									Runtime:
									<span>{`${runtime} min`}</span>
								</h5>
								<h4>Overview</h4>
								<p>{overview}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Movie;

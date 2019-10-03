import React from 'react';
import { IMovie } from '../../../models/Movie';
import MovieDetailsView from './MovieDetailsView';
import { useStore } from '../../../store';
import { observer } from 'mobx-react';

export interface IProps {
  movie: IMovie;
}

const MovieDetails = ({ movie }: IProps) => {
  const store = useStore();
  const backgroundImageUrl = store.movie.getMovieBackgroundUrl(movie);
  const genre = Array.isArray(movie.genres) && movie.genres.length ? movie.genres[0] : null;
  return (
    <MovieDetailsView movie={movie} backgroundImageUrl={backgroundImageUrl} genre={genre} />
  );
}

export default observer(MovieDetails);

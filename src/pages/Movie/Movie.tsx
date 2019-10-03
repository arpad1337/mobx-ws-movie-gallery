import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

import MovieView from './MovieView';

import { observer } from 'mobx-react';
import { useStore } from '../../store';

interface IRouteParams {
  id: string;
}

const Movie = ({ match }: RouteComponentProps<IRouteParams>) => {
  const store = useStore();
  useEffect(() => {
    store.movie.getMovie(match.params.id);
  }, [match.params.id]);
  return (
    <MovieView movie={store.movie.data} isLoading={false} />
  );
}

export default observer(Movie);

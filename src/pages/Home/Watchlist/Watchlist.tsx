import React from 'react';
import WatchlistView from './WatchlistView';
import { useStore } from '../../../store';
import { observer } from 'mobx-react';

const Watchlist = () => {
  const store = useStore();
  return <WatchlistView myMovies={store.myMovies.data} isEmpty={store.myMovies.isEmpty} />;
}

export default observer(Watchlist);
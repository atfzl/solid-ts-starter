import { fetchMovieListing } from '#/models/movie/movie.model';
import { setHomeState } from './home.state';

export function homeLoadPipeline() {
  fetchMovieListing('top_rated').subscribe(result => {
    setHomeState({ topRatedMovies: result });
  });

  fetchMovieListing('now_playing').subscribe(result => {
    setHomeState({ nowPlaying: result });
  });
}

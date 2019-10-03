import AsyncStore from "./AsyncStore";
import RootStore from "./RootStore";
import { IMovie } from "../models/Movie";
import ApiService from "../services/api";
import { Nullable } from "../util";

export default class MovieStore extends AsyncStore<IMovie> {
  private apiService: ApiService;

  constructor(rootStore: RootStore, apiService: ApiService) {
    super(rootStore);
    this.apiService = apiService;
  }

  public async getMovie(id: string) {
    try {
      const response = await this.apiService.movie(id);
      this.handleSuccess(response);
    } catch(e) {
      console.log("MovieStore.getMovie", {e});
      this.handleError(e.message);
    }
  }

  getMovieBackgroundUrl(movie: Nullable<IMovie>) {
    if (movie) {
      return `${movie.backdrop_path}`;
    }
    return null;
  }


}

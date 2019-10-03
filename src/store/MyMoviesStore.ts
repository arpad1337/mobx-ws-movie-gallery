import RootStore from "./RootStore";
import { observable, action, computed } from "mobx";
import { IMovie } from "../models/Movie";

export default class MyMoviesStore {
  private rootStore: RootStore;

  @observable
  public data = [] as IMovie[];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public addMovie(movie: IMovie) {
    this.data.push(movie);
  }

  @action
  public removeMovie(movie: IMovie) {
    const index = this.data.findIndex(m => m.id === movie.id);
    if (index > 0) {
      this.data.splice(index, 1);
    }
  }

  public contains(movie: IMovie) {
    const index = this.data.findIndex(m => m.id === movie.id);
    if (index > 0) {
      return true;
    }
    return false;
  }

  @computed
  public get isEmpty() {
    return this.data.length === 0;
  }
}
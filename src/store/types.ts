import { HomeState } from "./home/types";
import { AboutState } from "./about/types";

export interface RootState {
  home: HomeState
  about: AboutState
}
import { combineReducers } from "redux";
import actionMoviesReducer from "./action.reducer";
import adventureMoviesReducer from "./adventure.reducer";
import comedyMoviesReducer from "./comedy.reducer";
import horrorMoviesReducer from "./horror.reducer";
import netflixMoviesReducer from "./netflix.reducer";
import romanceMoviesReducer from "./romance.reducer";
import topRatedMoviesReducer from "./topRated.reducer";
import trendingMoviesReducer from "./trending.reducer";

export default combineReducers({
    topRatedMovies: topRatedMoviesReducer,
    trendingMovies: trendingMoviesReducer,
    netflixMovies: netflixMoviesReducer,
    actionMovies: actionMoviesReducer,
    adventureMovies: adventureMoviesReducer,
    comedyMovies: comedyMoviesReducer,
    romanceMovies: romanceMoviesReducer,
    horrorMovies: horrorMoviesReducer
})
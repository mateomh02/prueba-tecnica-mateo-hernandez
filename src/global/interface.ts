export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  }

  export interface MovieInfoActing{
    id: number,
    known_for_department: string,
    name: string
  }

  export interface MovieInfo {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    genres: {
        id: number;
        name: string;
      }[];
    
  }

  export interface MovieTrailer{
    key: string;
    id: number;
  }

  export interface SearchMovieProps {
    setMovies: (movies: Movie[]) => void;
    setTotalPages: (total: number) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
  }


import axios from 'axios';

export const tmdbServices = {
  getPopularMovies: async (page: number) => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=es&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
      }
    };

    try {
      const response = await axios(url, options);
      return response.data;
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
      throw error;
    }
  },
 
  moreInformationMovie : async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=es`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
      }
    };

    try {
      const response = await axios(url, options);
      return response.data;
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
      throw error;
    }
  },

  moreInformationMovieActing : async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
      }
    };

    try {
      const response = await axios(url, options);
      return response.data;
    } catch (error) {
      console.error('Error al obtener mas informacion sobrepelículas populares:', error);
      throw error;
    }
  },

  moreInformationMovieTrailer : async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
      }
    };

    try {
      const response = await axios(url, options);
      return response.data;
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
      throw error;
    }
  },

  searchMovies : async (query: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?language=es&query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
      }
    };

    try {
      const response = await axios(url, options);
      return response.data;
    } catch (error) {
      console.error('Error al buscar películas populares:', error);
      throw error;
    }
  }

}
import { useState, useEffect } from 'react';
import { Movie } from '@/global/interface';

export function useFavorites() {
    const [favorites, setFavorites] = useState<Movie[]>([]);
  
    useEffect(() => {
      const storedFavorites = localStorage.getItem('movieFavorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }, []);
  
    const toggleFavorite = (movie: Movie) => {
      const storedFavorites = localStorage.getItem('movieFavorites');
      let currentFavorites: Movie[] = storedFavorites ? JSON.parse(storedFavorites) : [];
      
      const exists = currentFavorites.some(fav => fav.id === movie.id);
      
      if (exists) {
        currentFavorites = currentFavorites.filter(fav => fav.id !== movie.id);
      } else {
        currentFavorites = [...currentFavorites, movie];
      }
      
      setFavorites(currentFavorites); // Esto actualizará la UI inmediatamente
      localStorage.setItem('movieFavorites', JSON.stringify(currentFavorites));
    };
  
    const isFavorite = (movieId: number) => {
      return favorites.some(fav => fav.id === movieId);
    };
  
    return { favorites, toggleFavorite, isFavorite };
  }
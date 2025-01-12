'use client'

import { useState, useEffect } from 'react';
import { tmdbServices } from '@/services/tmdb';
import { SearchMovieProps } from '@/global/interface';
import './style-search.scss'

export function SearchMovie({ setMovies, setTotalPages, setLoading, setError }: SearchMovieProps) {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const searchMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                if (searchTerm.trim().length < 2) {
                    const data = await tmdbServices.getPopularMovies(1);
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                    return;
                }

                const data = await tmdbServices.searchMovies(searchTerm);
                if (data.results.length === 0) {
                    setError('No se encontro tu busquedad');
                    setMovies([]);
                } else {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(searchMovies, 500);
        return () => clearTimeout(timeoutId);
    }, [searchTerm, setMovies, setTotalPages, setLoading, setError]);

    return (
        <div className='search-form search'>
            <div className="search-inner">
                <input
                    id="searchInput"
                    placeholder="Busca tu pelicula..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border"
                />
                <label className="Label" htmlFor="searchInput"></label>
            </div>
        </div>
        // <input
        //     type="text"
        //     value={searchTerm}
        //     onChange={(e) => setSearchTerm(e.target.value)}
        //     placeholder="Buscar películas..."
        //     className="w-full px-4 py-2 rounded-lg border"
        // />
    )
}
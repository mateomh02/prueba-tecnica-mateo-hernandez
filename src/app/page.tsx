'use client'
import React, { useState, useEffect } from 'react';
import { tmdbServices } from '../services/tmdb';
import { Card } from "./components/card/card";
import { Movie } from "@/global/interface";
import { SearchMovie } from "./components/searchMovie/searchMovie";
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';


export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadMovies = async (page: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await tmdbServices.getPopularMovies(page);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log('error: '+ error)
      setError('Error');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="container-global container-global--space">
      <div className="container-global--des-search">
        <div className="container-global--description">
          <h1>Peliculas ABC</h1>
          <p>Encuentra tu pelicula favorita</p>
        </div>
        <div className="container-global__search">
          <SearchMovie
            setMovies={setMovies}
            setTotalPages={setTotalPages}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>
      {error ? (
        <div className="container-global__error">
          <h1 className="container-global__error__title">Intenta de nuevo</h1>
          <button
            onClick={() => loadMovies(currentPage)}
            className="container-global__error__button"
          >
            Intentar de nuevo dando click
          </button>
        </div>
      ) : (
        <div className="container-global__movies">
          {loading ? (
            <div className="container-global__movies--loading"> <h2 className="loader">Cargando...</h2></div>
          ): (
            <>
              <div className="container-global__movies__favorites">
                <i className="fa-solid fa-star container-global__movies__favorites--icon"></i>
                <Link
                  href="/favorites"
                  className="container-global__movies__favorites--link"
                >
                  Mis Favoritos
                </Link>
              </div>
              <div className="container-global__movies__pager">
                <button
                  className="container-global__movies__pager--prev"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  Anterior
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <p className="container-global__movies__pager--page">Página <strong>{currentPage}</strong> de {totalPages}</p>
                <button
                  className="container-global__movies__pager--next"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                  <i className="fa-solid fa-angle-right"></i>

                </button>
              </div>
              <div className="container-global__movies__cards">
                {movies.map((movie) => (
                  <div key={movie.id} className="container-global__movies__cards--item">
                    <Card
                      id={movie.id}
                      title={movie.title}
                      overview={movie.overview}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      release_date={movie.release_date}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

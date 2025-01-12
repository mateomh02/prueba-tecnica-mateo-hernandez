// app/favorites/page.tsx
'use client'

import { useFavorites } from '@/hooks/useFavorites';
import { Card } from '../components/card/card';
import Link from 'next/link';
import './favorites.scss'


export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="container-global">
      <div className='container-global--space'>
        <div className='container-global__description'>
          <div className='container-global__description--link'>
            <i className="fa-solid fa-arrow-left"></i>
            <Link
              href="/"
            >
              Regresar
            </Link>

          </div>
          <h1 className="">Mis Películas Favoritas</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="not-favorites">
            <h1>No tienes películas favoritas aún.</h1>
          </div>
        ) : (
          <div className="container-global__movies__cards">
            {favorites.map(movie => (
              <div key={movie.id} className='container-global__movies__cards--item'>
                <Card
                  key={movie.id}
                  {...movie}
                />

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

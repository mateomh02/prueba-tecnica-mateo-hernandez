import { Movie } from "@/global/interface";
import { useFavorites } from '@/hooks/useFavorites';
import Image from 'next/image'
import Link from 'next/link';
import './cardStyle.scss';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

export function Card({ id, title, overview, poster_path, vote_average, release_date }: Movie) {
  // const url = 
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const { isFavorite, toggleFavorite } = useFavorites();
  const isLiked = isFavorite(id);

  const handleLikeClick = () => {
    toggleFavorite({
      id,
      title,
      overview,
      poster_path,
      vote_average,
      release_date
    });
  };

  return (
    <div className="card">
      <div className="card--image">
        <Image
        src= {imageUrl }
        width={500}
        height={500}
        alt={title}
        />

      </div>
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{overview}</p>
        </div>
        <div className="card__points">Puntuación: <strong>{vote_average}</strong></div>
        <button 
        className={`card__button ${isLiked ? 'card__button--liked' : ''}`}
        onClick={handleLikeClick}
        >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 27238.3 23388.41"
        width="70"
        height="60"
      >
        <path 
          d="M2815.88 13604.94l9379.85 8756.97c389.29 363.37 903.21 565.81 1437.86 565.81 534.65 0 1048.57-202.44 1437.86-565.81l9379.85-8756.97c1578.03-1469.02 2470.86-3529.77 2470.86-5683.99v-301.06c0-3628.39-2621.37-6722.14-6197.87-7319.1-2367.04-394.49-4775.59 378.95-6467.81 2071.18l-622.89 622.89-622.89-622.89c-1692.23-1692.23-4100.77-2465.66-6467.81-2071.14-3576.51 596.92-6197.87 3690.67-6197.87 7319.06v301.06c0 2154.22 892.83 4214.97 2470.86 5683.99z"
          fill="currentColor"  // Esto permite que el color sea heredado del padre
        />
      </svg>
        </button>
        <Link href={`/movie/${id}`} className="card__view-more">Ver más</Link>

      </div>
    </div>
  )
}
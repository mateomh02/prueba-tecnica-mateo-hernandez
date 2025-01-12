'use client'
import Image from 'next/image'
import { MovieInfoActing, MovieInfo, MovieTrailer } from '@/global/interface'
import { useEffect, useState } from 'react'
import { tmdbServices } from '@/services/tmdb'
import Link from 'next/link'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import './cardsInfo.scss'

export function CardsInfo({ params }: { params: { id: number } }) {
    const [movie, setMovie] = useState<MovieInfo | null>(null);
    const [acting, setActing] = useState<MovieInfoActing[]>([]);
    const [trailer, setTrailer] = useState<MovieTrailer[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const data = await tmdbServices.moreInformationMovie(params.id);
                const dataActing = await tmdbServices.moreInformationMovieActing(params.id);
                const dataTrailer = await tmdbServices.moreInformationMovieTrailer(params.id);
                // console.log(dataActing.cast)
                setActing(dataActing.cast)
                setTrailer(dataTrailer.results)

                setMovie(data);
            } catch (error) {
                console.error('Error cargando película:', error);
            } finally {
                setLoading(false);
            }
        };

        loadMovie();
    }, [params.id]);

    if (loading) return <div>Cargando...</div>;
    if (!movie) return <div>No se encontró la película</div>;
    return (
        <div className="container-global info">
            <div className='container-global__description--link'>
                <i className="fa-solid fa-arrow-left"></i>
                <Link
                    href="/"
                >
                    Regresar
                </Link>

            </div>
            <div className='container-global-back' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`, }}>
            </div>
            <div className='container-global__image'>
                <Image
                    src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
                    width={500}
                    height={500}
                    alt={movie.title}
                />
            </div>
            <div className='container-global__info'>
                <div className='container-global__info--title'>
                    <h1>{movie.title}</h1>
                </div>
                <div className='container-global__info--overview'>
                    <p>{movie.overview}</p>
                </div>
                <div className='container-global__info--date'>
                    <p>Fecha de publicación: <strong>{movie.release_date}</strong></p>
                </div>
                <div className='container-global__info--points'>
                    <p>Valoración: <strong>{movie.vote_average}</strong></p>
                </div>
                <div className='container-global__info--genres'>
                    <p className='title'>Generos: </p> {movie.genres.map((item) => (<p key={item.id}>{item.name},</p>))}
                </div>
                <div className='container-global__info--acting'>
                    <p className='title'>Actores: </p>
                    {acting
                        .filter(person => person.known_for_department === 'Acting')
                        .map(person => (
                            <p key={person.id}>{person.name},</p>
                        ))
                    }
                </div>
                <div className='container-global__info--iframe'>
                    <iframe src={`https://www.youtube.com/embed/${trailer[0].key}`}></iframe>
                </div>

            </div>
        </div>)
}
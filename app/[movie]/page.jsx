import Image from "next/image";

export async function generateStaticParams()
{
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
      );
      const rest = await data.json();
      return rest.results.map((movie) => ({
        movie: toString(movie.id),
      }))
}
export default async function MovieDetails({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return (
    <div>
      <h1>{res.title}</h1>
      <h2>{res.release_date}</h2>
      <h2>{res.runtime} minute</h2>
      <h2>{res.status}</h2>
      <Image
        src={imagePath + res.backdrop_path}
        alt={res.title}
        height={1000}
        width={1000}
      />
      <p>{res.overview}</p>
    </div>
  );
}

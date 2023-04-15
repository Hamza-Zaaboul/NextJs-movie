import Movie from "./movie";
import styles from "./page.module.scss";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const rest = await data.json();

  return (
    <main className={styles.main}>
       <h1>Home Page</h1>
      <div className={styles.grid}>
       
        {rest.results.map((movie) => (
           <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date}/>
        ))}
      </div>
    </main>
  );
}

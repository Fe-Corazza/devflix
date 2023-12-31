import styles from "./movieDescription.module.css";
import devFlix from "/favicon.png";

const MovieDesc = ({ movies, click }) => {
  const movie = movies;

  return (
    <div className={styles.modalBackdrop} onClick={click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movie.Poster} alt={movie.Title} />
          <button className={styles.btnClose} onClick={click}>X</button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="Logo DEVFLIX" />
              {movie.Type}
              <h2>{movie.Title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;

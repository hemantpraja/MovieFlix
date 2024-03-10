import Link from 'next/link';
import styles from "@/app/styles/common.module.css";
import MovieCard from "@/app/components/MovieCard.js";

const MoviePage = async (props) => {

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const url = process.env.NETFLIX_URL;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NETFLIX_KEY,
            'X-RapidAPI-Host': process.env.NETFLIX_HOST
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const main_data = result.titles; `   `
    console.log("result : " + result);
    return (
        <>
            <section className={styles.movieSection}>
                <div classNmae={styles.container}>
                    <h1>Movies</h1>
                    <div className={[styles.card_section]}>
                        {
                            main_data.map((curElem) => {
                                return (
                                    <MovieCard key={curElem.id} {...curElem} />
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default MoviePage;
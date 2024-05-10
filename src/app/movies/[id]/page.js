import React from 'react';
import styles from "@/app/styles/common.module.css";
import Image from 'next/image';

const Movie = async ({params}) => {
    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    console.log(url);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NETFLIX_KEY,
            'X-RapidAPI-Host': process.env.NETFLIX_HOST
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const main_data = result[0].details;
    console.log("result : ", main_data);
    return (
        <div className={styles.container}>
            <h2 classnmae={styles.movie_title}>Netflix \ <span> {main_data.type}</span></h2>
            <div classNmae={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300}></Image>
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>

        </div>
    );
}

export default Movie;
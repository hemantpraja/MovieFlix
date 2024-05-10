import React from 'react';
import styles from "@/app/styles/common.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function movieCard(curElem) {
    const { id, title, synopsis, type } = curElem.jawSummary;
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={curElem.jawSummary.backgroundImage.url} alt={title} height={200} width={260} />
            </div>
            <div className={styles.card_data}>
                <h2>{title.substring(0,18)}</h2>
                <p>{`${synopsis.substring(0,66)}...`}</p>
                <Link href={`/movies/${id}`}>
                    <button>
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    )
}

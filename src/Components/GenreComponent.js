import Searchbar from "../Components/Searchbar";
import '../css/Genretop.css';
import Footer from "../Components/footer";
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';

export default function GenreComponent({ genre_id }) {
    const [genreData, setGenreData] = useState(null);

    useEffect(() => {
        const fetchGenreData = async () => {
            try {
                const docRef = doc(db, "genres", genre_id.toString());
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setGenreData(docSnap.data());
                } else {
                    console.warn("No document found with ID =", genre_id);
                }
            } catch (error) {
                console.error("Error fetching genre data: ", error);
            }
        };

        fetchGenreData();
    }, [genre_id]);  // genre_id を依存配列に追加

    return (
        <div>
            <div className="genreBox bbox">
                <div className="genreDescription">
                    <h2>{genreData ? genreData.name : 'Loading...'}</h2>
                    <p>{genreData ? genreData.comment : 'Loading...'}</p>
                </div>
                <div className="creator">
                    <h3>Top clips</h3>
                    <div className="onevoneimages">
                        <img
                            src={genreData ? genreData.thunbnail1 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.thunbnail2 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.thunbnail3 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.thunbnail4 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.thunbnail5 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.thunbnail6 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                    </div>
                </div>
                <div className="soldArts">
                    <h3>Works</h3>
                    <div className="onevoneimages">
                        <img
                            src={genreData ? genreData.product1 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.product2 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.product3 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                    </div>
                </div>
                <div className="tools">
                    <h3>Tools</h3>
                    <div className="onevoneimages">
                        <img
                            src={genreData ? genreData.good1 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.good2 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                        <img
                            src={genreData ? genreData.good3 : "https://placehold.jp/150x150.png"}
                            alt="Item"
                            className="item-icon"
                        />
                    </div>
                </div>
                <div className="keyWords">
                    {genreData ? genreData.keywords.map((keyword, index) => (
                        <Link to={`/products/${keyword}`} key={index}>
                            <p>{keyword}</p>
                        </Link>
                    )) : (
                        <>
                            <p>Pencil</p>
                            <p>Eraser</p>
                            <p>Paper or Canvas</p>
                            <p>Paint</p>
                            <p>Brushes</p>
                            <p>Palette</p>
                            <p>Water Container</p>
                            <p>Masking Tape</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

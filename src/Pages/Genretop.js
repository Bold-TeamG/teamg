import Searchbar from "../Components/Searchbar";
import'../css/Genretop.css'
import Footer from "../Components/footer";
import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState, createRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import {db, storage} from '../firebase/index';

export default function Genretop() {
    const {genreId} = useParams();
    const genre_id = genreId.toString();

    const [genreData, setGenreData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "genres", genre_id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setGenreData(docSnap.data());
        } else {
          console.warn("No document found with ID = 1");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

    return(
        <div>
            <Searchbar />
            <div  className="genreBox">
            <div className="genreDesccription">
                <h2>{genreData ? genreData.name : 'Loading...'}</h2>
                <p>{genreData ? genreData.comment : 'Loading...'}</p>
            </div>
            <div className="creator">
                <h3>Top clips</h3>
                <div className="onevoneimages">
                    <img src={genreData ? genreData.thunbnail1 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.thunbnail2 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.thunbnail3 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.thunbnail4 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.thunbnail5 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.thunbnail6 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                </div>
            </div>
            <div className="soldArts">
                <h3>Works</h3>
                <div className="onevoneimages">
                    <img src={genreData ? genreData.product1 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.product2 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.product3 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                </div>
            </div>
            <div className="tools">
                <h3>Tools</h3>
                <div className="onevoneimages">
                    <img src={genreData ? genreData.good1 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.good2 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                    <img src={genreData ? genreData.good3 : "https://placehold.jp/150x150.png"}
                        alt="Item"
                        className="item-icon"></img>
                </div>
            </div>
            <div className="keyWords">
                {genreData ? genreData.keywords.map((keyword, index) => (
                        <p key={index}>{keyword}</p>
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
            <Footer />
        </div>
    );
}
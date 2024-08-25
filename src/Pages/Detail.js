import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/index';
import { doc, getDoc } from 'firebase/firestore';
import '../css/Community.css'; // CSSファイルをインポート
import comment from '../image/comment.svg';
import heart from '../image/heart.svg';
import star from '../image/star.svg';
import share from '../image/share.svg';
import person from '../image/person.svg';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';
import Searchbar from '../Components/Searchbar';

export default function Detail() {
    const { postId } = useParams();
    const post_id = postId.toString();

    const [postData, setPostData] = useState(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const docRef = doc(db, "posts", post_id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setPostData(data);
                } else {
                    console.warn("No document found with ID = " + post_id);
                }
            } catch (error) {
                console.error("Error fetching post data: ", error);
            }
        };

        fetchPostData();
    }, [post_id]);

    useEffect(() => {
        const fetchProductThumbnail = async () => {
            if (postData && !postData.img_url) {  // img_url がまだ設定されていない場合にのみ実行
                try {
                    console.log('Fetching product thumbnail for Product ID:', postData.product_id);
                    const productId = String(postData.product_id);
                    const productRef = doc(db, 'products', productId);

                    const productSnap = await getDoc(productRef);

                    if (productSnap.exists()) {
                        setPostData(prevData => ({
                            ...prevData,
                            img_url: productSnap.data().img_url,
                        }));
                    } else {
                        console.log('No product found for ID:', postData.product_id);
                    }
                } catch (error) {
                    console.error("Error fetching product data: ", error);
                }
            }
        };

        fetchProductThumbnail();
    }, [postData?.product_id]); // postDataのproduct_idが変更されたときにのみ実行

    useEffect(() => {
        const fetchUserIcon = async () => {
            if (postData && !postData.icon_photo) {  // icon_photo がまだ設定されていない場合にのみ実行
                try {
                    console.log('Fetching user icon for User ID:', postData.user_id);
                    const userId = String(postData.user_id);
                    const userRef = doc(db, 'users', userId);

                    const userSnap = await getDoc(userRef);

                    if (userSnap.exists()) {
                        setPostData(prevData => ({
                            ...prevData,
                            icon_photo: userSnap.data().icon_photo,
                        }));
                    } else {
                        console.log('No user found for ID:', postData.user_id);
                    }
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                }
            }
        };

        fetchUserIcon();
    }, [postData?.user_id]); // postDataのuser_idが変更されたときにのみ実行

    if (!postData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='detail-content'>
            <Searchbar />
            <div className="video-container">
                <video
                    src={postData.video_url}
                    muted={muted}
                    autoPlay
                    playsInline
                    className="video"
                    onClick={() => setMuted(false)}
                />
                <div className="icons">
                    <Link to={`/profile/${postData.user_id}`}>
                        <img
                            src={postData.icon_photo || person} // icon_photo がなければデフォルトの person アイコン
                            alt="user icon"
                            className="person-icon icon"
                        />
                    </Link>
                    <img
                        src={heart}
                        alt="heart"
                        className="heart-icon icon"
                        onClick={() => alert('Heart icon clicked!')}
                    />
                    <img
                        src={comment}
                        alt="Comment"
                        className="comment-icon icon"
                        onClick={() => alert('Comment icon clicked!')}
                    />
                    <img
                        src={share}
                        alt="share"
                        className="share-icon icon"
                        onClick={() => alert('Share icon clicked!')}
                    />
                    <img
                        src={star}
                        alt="Star"
                        className="star-icon icon"
                        onClick={() => alert('Star icon clicked!')}
                    />
                </div>
                <div className="texts">
                    <h3>{postData.title || 'Recommend名'}</h3>
                    <p>{postData.comment || 'コメントコメントコメント'}</p>
                </div>
                <div className="recoms">
                    <Link to={`/product/${postData.product_id}`}>
                        <img
                            src={postData.img_url}
                            alt="Item"
                            className="item-icon"
                        />
                    </Link>
                    <Link to={`/products/${postData.goods_name}`}>
                        <img
                            src={postData.goods_url}
                            alt="Item"
                            className="item-icon"
                        />
                    </Link>
                    <Link to={`/genre/${postData.genre_id}`}>
                        <img
                            src={postData.genre_url}
                            alt="Item"
                            className="item-icon"
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

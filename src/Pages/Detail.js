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
import '../css/Detail.css'

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
                    className="video video-detail"
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
                <div className="under-box">
                <div className="texts">
                    <h3>{postData.title || 'Recommend名'}</h3>
                    <p>{postData.comment || 'コメントコメントコメント'}</p>
                </div>
                <div className="recoms">
                    <Link to={`/product/${postData.product_id}`}>
                    <div className="comp-each">
                        <img
                            src={postData.img_url}
                            alt="Item"
                            className="item-icon"
                        />
                    <svg className='leftUp' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" stroke-linecap="round" stroke-linejoin="round" stroke="#626262" id="Cart--Streamline-Mynaui" height="20" width="20"><desc>Cart Streamline Icon: https://streamlinehq.com</desc><path d="M15.8125 20.125a1.4375 1.4375 0 1 0 0 -2.875 1.4375 1.4375 0 0 0 0 2.875m-7.666666666666667 0a1.4375 1.4375 0 1 0 0 -2.875 1.4375 1.4375 0 0 0 0 2.875M3.555416666666667 5.175000000000001h14.580083333333334c1.3205833333333332 0 2.274125 1.2170833333333333 1.9118750000000002 2.4418333333333333l-1.5850833333333334 5.366666666666666C18.217916666666667 13.807666666666666 17.437833333333334 14.375 16.550416666666667 14.375H7.774c-0.888375 0 -1.6694166666666668 -0.5682916666666666 -1.9128333333333334 -1.3915zm0 0L2.875 2.875" stroke-width="1"></path></svg>
                    </div>
                    </Link>
                    <Link to={`/products/${postData.goods_name}`}>
                    <div className="comp-each">
                        <img
                            src={postData.goods_url}
                            alt="Item"
                            className="item-icon"
                        />
                        <svg className='leftUp' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 20 20" height="20" width="20" id="Orders--Streamline-Rounded----Material-Symbols">
                        <path fill="#626262" d="M3.245920416666667 14.645912500000001V5.601120833333334L1.8802954166666668 2.6521783333333335C1.814321875 2.5070381250000002 1.8077233333333336 2.3553033333333335 1.8605037500000001 2.19697C1.9132802083333333 2.038636666666667 2.0122385416666666 1.9264812500000004 2.1573787500000003 1.8605116666666668C2.3157120833333336 1.7813450000000002 2.4773427083333335 1.771449166666667 2.6422745833333336 1.8308241666666667C2.8072025000000003 1.8901991666666669 2.9226552083333335 1.9990533333333333 2.9886287500000006 2.157386666666667L4.512579166666667 5.601120833333334H14.507370833333335L16.03132916666667 2.157386666666667C16.1017875 2.0034075000000002 16.215075000000002 1.8956735416666668 16.371152083333335 1.8341887500000003C16.527229166666668 1.772569375 16.68445416666667 1.7813450000000002 16.8427875 1.8605116666666668C16.987939583333333 1.9264812500000004 17.090183333333332 2.0419339583333334 17.149558333333335 2.2068658333333335C17.208933333333334 2.37179375 17.20564791666667 2.5268297916666667 17.1396625 2.67197L15.774037500000002 5.601120833333334V14.645912500000001C15.774037500000002 14.972475000000003 15.657781250000001 15.252012500000001 15.425308333333335 15.484485416666667C15.192677083333336 15.71711666666667 14.9131 15.833412500000001 14.586537500000002 15.833412500000001H4.433412500000001C4.1068500000000006 15.833412500000001 3.827332291666667 15.71711666666667 3.5948475000000006 15.484485416666667C3.362228125 15.252012500000001 3.245920416666667 14.972475000000003 3.245920416666667 14.645912500000001ZM7.837579166666668 9.9552875H11.202162500000002C11.370391666666668 9.9552875 11.511466666666669 9.898050000000001 11.625308333333335 9.783495833333335C11.739070833333335 9.6691 11.795912500000002 9.527272916666668 11.795912500000002 9.357975000000001C11.795912500000002 9.188835416666667 11.739070833333335 9.048195833333335 11.625308333333335 8.936016666666667C11.511466666666669 8.823877083333333 11.370391666666668 8.7677875 11.202162500000002 8.7677875H7.837579166666668C7.6693500000000006 8.7677875 7.528393750000001 8.825064583333333 7.414631250000001 8.939579166666666C7.300789583333334 9.053975000000001 7.243829166666668 9.195841666666668 7.243829166666668 9.3651C7.243829166666668 9.534279166666668 7.300789583333334 9.674918750000002 7.414631250000001 9.787058333333334C7.528393750000001 9.899237500000002 7.6693500000000006 9.9552875 7.837579166666668 9.9552875ZM4.433412500000001 14.645912500000001H14.586537500000002V6.788620833333335H4.433412500000001V14.645912500000001Z" stroke-width="1"></path>
                        </svg>
                    </div>
                    </Link>
                    <Link to={`/genre/${postData.genre_id}`}>
                    <div className="comp-each">
                        <img
                            src={postData.genre_url}
                            alt="Item"
                            className="item-icon"
                        />
                        <svg className='leftUp' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.715 -0.715 20 20" id="Good-Health-And-Well-Being--Streamline-Core" height="20" width="20"><desc>Good Health And Well Being Streamline Icon: https://streamlinehq.com</desc><g id="good-health-and-well-being"><path id="Vector" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" d="M13.392684000000001 16.53791142857143 9.714152700000001 13.194701271428572c-2.029541828571429 -2.018545735714286 0.9513543642857144 -5.866382378571429 3.6785313000000004 -2.7124137857142863 2.7906730714285715 -3.090896914285714 5.708152714285714 0.7569529928571429 3.6785843571428574 2.7124137857142863L13.392684000000001 16.53791142857143Z" stroke-width="1.43"></path><path id="Vector 801" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" d="M0.8236750028571429 8.075615485714286H2.63703285l2.4178007357142857 4.2311612357142865 5.4400682357142855 -10.275682971428573 2.4178007357142857 4.835614735714286" stroke-width="1.43"></path></g></svg>
                        </div>
                    </Link>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

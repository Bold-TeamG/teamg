import React, { useEffect, useRef, useState, createRef } from 'react';
import Footer from './footer';
import '../css/Community.css'; // CSSファイルをインポート
import comment from '../image/comment.svg';
import heart from '../image/heart.svg';
import heartRed from '../image/heartRed.svg';
import star from '../image/star.svg';
import share from '../image/share.svg';
import person from '../image/person.svg';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase/index';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { useModal } from 'react-hooks-use-modal';

export default function Recommend() {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    focusTrapOptions : { 
       clickOutsideDeactivates : false
    },  
  });
  const [posts, setPosts] = useState([]);
  const videoRefs = useRef([]);
  const scrollViewRef = useRef(null);  // scrollViewRef を useRef で定義

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('fetchPosts function is running'); // ここで fetchPosts 関数が実行されているか確認

      try {
        const postsCollection = collection(db, 'posts');
        const q = query(postsCollection, where('type_id', '==', 6)); // type_id == 1 の条件を追加
        const postsSnapshot = await getDocs(q);
        const postsList = postsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Fetched posts:', postsList); // ここで取得した posts を確認

        const postsWithThumbnailsAndIcons = await Promise.all(postsList.map(async post => {
          console.log('Product ID:', post.product_id);
          const productId = String(post.product_id);
          const productRef = doc(db, 'products', productId);
          console.log('Product Reference Path:', productRef.path);
        
          const productSnap = await getDoc(productRef);
        
          let updatedPost = { ...post };
        
          if (productSnap.exists()) {
            console.log('Product found:', productSnap.data());
            updatedPost = {
              ...updatedPost,
              img_url: productSnap.data().img_url, // product の thumbnail を追加
            };
          } else {
            console.log('No product found for ID:', post.product_id);
          }
        
          // user_id から users コレクションの icon_photo を取得
          console.log('User ID:', post.user_id);
          const userId = String(post.user_id);
          const userRef = doc(db, 'users', userId);
          console.log('User Reference Path:', userRef.path);
        
          const userSnap = await getDoc(userRef);
        
          if (userSnap.exists()) {
            console.log('User found:', userSnap.data());
            updatedPost = {
              ...updatedPost,
              icon_photo: userSnap.data().icon_photo, // user の icon_photo を追加
            };
          } else {
            console.log('No user found for ID:', post.user_id);
          }
        
          return updatedPost;
        }));
        
        setPosts(postsWithThumbnailsAndIcons);        
  
        // posts のデータが取得された後に videoRefs を設定する
        videoRefs.current = postsWithThumbnailsAndIcons.map(() => createRef());
      } catch (error) {
        console.error("Error fetching posts: ", error.message);
        console.error(error.stack); // ここでスタックトレースを出力
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const scrollView = scrollViewRef.current;
    if (!scrollView) return;
    const observers = [];

    for (let i = 0; i < posts.length; i++) {
      const video = videoRefs.current[i]?.current;
      if (!video) continue;

      const callback = (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio === 1.0) {
            videoRefs.current.forEach((ref) => {
              const video2 = ref.current;
              video2 === entry.target ? video2.play() : video2?.pause();
            });
          }
        }
      };
      const options = { root: scrollView, threshold: 1 };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(video);
      observers.push(observer);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, [posts]);

  const View = ({ posts }) => {
    const [muted, setMuted] = useState(true);
    const [liked, setLiked] = useState([]);
    const handleLikeClick = (index) => {
      setLiked((prevLiked) => {
        const newLiked = [...prevLiked];
        newLiked[index] = !newLiked[index]; // Toggle like state
        return newLiked;
      });
    };
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        navigate(-1); 
    };
    return (
      <div ref={scrollViewRef} className="scroll-view"> {/* scrollViewRef を div に割り当て */}
        {posts.map((post, i) => (
          <div key={post.id} className="content">
            <Modal>
               <div className = "joboffer-container ">
            
                  <section className="joboffer-description">
                      <div className = "joboffer-title">
                          <label>JOB OFFER</label>
                      </div>
                      <div className="joboffer-input">
                           <input type="text" placeholder="Name"></input>
                          <input type="text" placeholder="Phonenumber"></input>
                          <input type="text"   placeholder="Job content"></input>
                          <input type="text"  placeholder="Place"></input>
                          <input type="text" placeholder="Time"></input>
                          <input type="text" placeholder="Pay"></input>
                          <input type="text" placeholder="Description"></input>
                      </div>

                  </section>
                  <div className = "joboffer-submitbutton">
                      <button>Submit</button>
                      <button onClick={close}>Back</button>
                  </div>
                </div>
            </Modal>
            <div className="video-container">
              <video
                src={post.video_url}
                muted={muted}
                autoPlay
                playsInline
                ref={videoRefs.current[i]}
                className="video"
                onClick={() => setMuted(false)}
              />
              <div className="icons">
              <Link to={`/profile/${post.user_id}`}>
                  <img
                    src={post.icon_photo}
                    alt="person icon"
                    className="person-icon icon"
                  /></Link>
                <img
                  src={liked[i] ? heartRed : heart}
                  alt="heart"
                  className="heart-icon icon"
                  onClick={() => handleLikeClick(i)}
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
                <svg className="star-icon icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 30 30" height="30" width="30" id="Volunteer-Activism-Fill--Streamline-Rounded-Fill---Material-Symbols" onClick={open}>
                <path fill="#ffffff" d="M16.584374999999998 27.398958333333333C16.74550625 27.439256249999996 16.916666666666664 27.459375 17.097916666666666 27.459375C17.279166666666665 27.459375 17.45032708333333 27.439256249999996 17.61145833333333 27.398958333333333L26.583333333333332 24.649999999999995C26.583333333333332 23.5625 26.276235416666665 22.75188958333333 25.661979166666665 22.218229166666664C25.047722916666665 21.68456875 24.166666666666664 21.417708333333334 23.01875 21.417708333333334H17.732291666666665C16.826041666666665 21.417708333333334 16.126235416666667 21.372395833333332 15.632812499999998 21.281770833333333C15.139389583333331 21.191145833333334 14.731577083333331 21.09550625 14.409375 20.994791666666664L12.566666666666666 20.360416666666666C12.445833333333333 20.32011875 12.360222916666666 20.244597916666663 12.309895833333332 20.133854166666666C12.259568749999998 20.023110416666665 12.25449375 19.907291666666666 12.294791666666667 19.786458333333332C12.335089583333332 19.665625 12.410610416666666 19.58001458333333 12.521354166666667 19.5296875C12.632097916666666 19.479360416666665 12.747916666666667 19.474285416666664 12.86875 19.51458333333333L14.651041666666666 20.088541666666664C15.134375 20.249672916666665 15.577410416666666 20.360416666666666 15.980208333333332 20.42083333333333C16.38300625 20.48125 16.846160416666663 20.511458333333334 17.369791666666664 20.511458333333334H19.575C19.73613125 20.511458333333334 19.86699375 20.46113125 19.96770833333333 20.360416666666666C20.068422916666666 20.25970208333333 20.11875 20.12883958333333 20.11875 19.96770833333333C20.11875 19.504493749999998 19.957618749999998 19.046354166666664 19.635416666666664 18.593229166666664C19.31321458333333 18.140104166666664 18.849999999999998 17.802797916666666 18.24583333333333 17.58125L10.844791666666666 14.802083333333332C10.744077083333334 14.761785416666665 10.638347916666666 14.731577083333331 10.527604166666666 14.711458333333333C10.416860416666667 14.691339583333333 10.31113125 14.68125 10.210416666666665 14.68125H7.703124999999999V24.86145833333333L16.584374999999998 27.398958333333333ZM1.2083333333333333 24.770833333333332C1.2083333333333333 25.274285416666665 1.384550625 25.702277083333332 1.7369791666666665 26.0546875C2.0894077083333333 26.407097916666665 2.5173631249999997 26.583333333333332 3.020833333333333 26.583333333333332H4.047916666666667C4.5513868749999995 26.583333333333332 4.979342291666666 26.407097916666665 5.331770833333333 26.0546875C5.6841993749999995 25.702277083333332 5.860416666666666 25.274285416666665 5.860416666666666 24.770833333333332V16.49375C5.860416666666666 15.990297916666666 5.6841993749999995 15.562306249999999 5.331770833333333 15.209895833333333C4.979342291666666 14.857485416666666 4.5513868749999995 14.68125 4.047916666666667 14.68125H3.020833333333333C2.5173631249999997 14.68125 2.0894077083333333 14.857485416666666 1.7369791666666665 15.209895833333333C1.384550625 15.562306249999999 1.2083333333333333 15.990297916666666 1.2083333333333333 16.49375V24.770833333333332ZM19.51458333333333 14.5C19.293035416666665 14.5 19.071547916666667 14.4546875 18.849999999999998 14.364062499999998C18.628452083333332 14.2734375 18.427083333333332 14.147589583333332 18.24583333333333 13.986458333333331L14.560416666666667 10.391666666666666C13.95625 9.80761875 13.452797916666666 9.158139583333334 13.05 8.443229166666667C12.647202083333331 7.72831875 12.445833333333333 6.947916666666666 12.445833333333333 6.102083333333333C12.445833333333333 5.075 12.803318749999999 4.203991041666667 13.518229166666666 3.4890625C14.233139583333331 2.774133958333333 15.104166666666666 2.4166666666666665 16.131249999999998 2.4166666666666665C16.815952083333332 2.4166666666666665 17.440297916666665 2.592883958333333 18.004166666666666 2.9453125C18.568035416666664 3.2977410416666664 19.071547916666667 3.7357618749999997 19.51458333333333 4.2593749999999995C19.957618749999998 3.7357618749999997 20.46113125 3.2977410416666664 21.025 2.9453125C21.58886875 2.592883958333333 22.213214583333333 2.4166666666666665 22.897916666666664 2.4166666666666665C23.925 2.4166666666666665 24.796027083333332 2.774133958333333 25.5109375 3.4890625C26.225847916666662 4.203991041666667 26.583333333333332 5.075 26.583333333333332 6.102083333333333C26.583333333333332 6.947916666666666 26.381964583333332 7.72831875 25.979166666666664 8.443229166666667C25.57636875 9.158139583333334 25.072916666666664 9.80761875 24.46875 10.391666666666666L20.78333333333333 13.986458333333331C20.602083333333333 14.147589583333332 20.400714583333333 14.2734375 20.179166666666664 14.364062499999998C19.957618749999998 14.4546875 19.73613125 14.5 19.51458333333333 14.5Z" stroke-width="1"></path>
                </svg>
              </div>
              <div className='under-box'>
              <div className="texts">
                <h3>{post.title || 'Recommend名'}</h3>
                <p>{post.comment || 'コメントコメントコメント'}</p>
              </div>
              <div className="recoms">
                <Link to={`/product/${post.product_id}`}>
                <div className='comp-each'>
                  <img src={post.img_url}
                    alt="Item"
                    className="item-icon side-item"
                  />
                  <svg className='leftUp' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" stroke-linecap="round" stroke-linejoin="round" stroke="#626262" id="Cart--Streamline-Mynaui" height="20" width="20"><desc>Cart Streamline Icon: https://streamlinehq.com</desc><path d="M15.8125 20.125a1.4375 1.4375 0 1 0 0 -2.875 1.4375 1.4375 0 0 0 0 2.875m-7.666666666666667 0a1.4375 1.4375 0 1 0 0 -2.875 1.4375 1.4375 0 0 0 0 2.875M3.555416666666667 5.175000000000001h14.580083333333334c1.3205833333333332 0 2.274125 1.2170833333333333 1.9118750000000002 2.4418333333333333l-1.5850833333333334 5.366666666666666C18.217916666666667 13.807666666666666 17.437833333333334 14.375 16.550416666666667 14.375H7.774c-0.888375 0 -1.6694166666666668 -0.5682916666666666 -1.9128333333333334 -1.3915zm0 0L2.875 2.875" stroke-width="1"></path></svg>
                </div>
                </Link>
                <Link to={`/products/${post.product_id}`}>
                <div className='comp-each'>
                  <img src={post.goods_url}
                    alt="Item"
                    className="item-icon side-item"
                  />
                  <svg className='leftUp' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 20 20" height="20" width="20" id="Orders--Streamline-Rounded----Material-Symbols">
                  <path fill="#626262" d="M3.245920416666667 14.645912500000001V5.601120833333334L1.8802954166666668 2.6521783333333335C1.814321875 2.5070381250000002 1.8077233333333336 2.3553033333333335 1.8605037500000001 2.19697C1.9132802083333333 2.038636666666667 2.0122385416666666 1.9264812500000004 2.1573787500000003 1.8605116666666668C2.3157120833333336 1.7813450000000002 2.4773427083333335 1.771449166666667 2.6422745833333336 1.8308241666666667C2.8072025000000003 1.8901991666666669 2.9226552083333335 1.9990533333333333 2.9886287500000006 2.157386666666667L4.512579166666667 5.601120833333334H14.507370833333335L16.03132916666667 2.157386666666667C16.1017875 2.0034075000000002 16.215075000000002 1.8956735416666668 16.371152083333335 1.8341887500000003C16.527229166666668 1.772569375 16.68445416666667 1.7813450000000002 16.8427875 1.8605116666666668C16.987939583333333 1.9264812500000004 17.090183333333332 2.0419339583333334 17.149558333333335 2.2068658333333335C17.208933333333334 2.37179375 17.20564791666667 2.5268297916666667 17.1396625 2.67197L15.774037500000002 5.601120833333334V14.645912500000001C15.774037500000002 14.972475000000003 15.657781250000001 15.252012500000001 15.425308333333335 15.484485416666667C15.192677083333336 15.71711666666667 14.9131 15.833412500000001 14.586537500000002 15.833412500000001H4.433412500000001C4.1068500000000006 15.833412500000001 3.827332291666667 15.71711666666667 3.5948475000000006 15.484485416666667C3.362228125 15.252012500000001 3.245920416666667 14.972475000000003 3.245920416666667 14.645912500000001ZM7.837579166666668 9.9552875H11.202162500000002C11.370391666666668 9.9552875 11.511466666666669 9.898050000000001 11.625308333333335 9.783495833333335C11.739070833333335 9.6691 11.795912500000002 9.527272916666668 11.795912500000002 9.357975000000001C11.795912500000002 9.188835416666667 11.739070833333335 9.048195833333335 11.625308333333335 8.936016666666667C11.511466666666669 8.823877083333333 11.370391666666668 8.7677875 11.202162500000002 8.7677875H7.837579166666668C7.6693500000000006 8.7677875 7.528393750000001 8.825064583333333 7.414631250000001 8.939579166666666C7.300789583333334 9.053975000000001 7.243829166666668 9.195841666666668 7.243829166666668 9.3651C7.243829166666668 9.534279166666668 7.300789583333334 9.674918750000002 7.414631250000001 9.787058333333334C7.528393750000001 9.899237500000002 7.6693500000000006 9.9552875 7.837579166666668 9.9552875ZM4.433412500000001 14.645912500000001H14.586537500000002V6.788620833333335H4.433412500000001V14.645912500000001Z" stroke-width="1"></path>
                  </svg>
                  </div>
                  </Link>
                <Link to={`/genre/${post.genre_id}`}>
                <div className='comp-each'>
                  <img src={post.genre_url}
                    alt="Item"
                    className="item-icon side-item"
                  />
                  <svg className='leftUp' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.715 -0.715 20 20" id="Good-Health-And-Well-Being--Streamline-Core" height="20" width="20"><desc>Good Health And Well Being Streamline Icon: https://streamlinehq.com</desc><g id="good-health-and-well-being"><path id="Vector" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" d="M13.392684000000001 16.53791142857143 9.714152700000001 13.194701271428572c-2.029541828571429 -2.018545735714286 0.9513543642857144 -5.866382378571429 3.6785313000000004 -2.7124137857142863 2.7906730714285715 -3.090896914285714 5.708152714285714 0.7569529928571429 3.6785843571428574 2.7124137857142863L13.392684000000001 16.53791142857143Z" stroke-width="1.43"></path><path id="Vector 801" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" d="M0.8236750028571429 8.075615485714286H2.63703285l2.4178007357142857 4.2311612357142865 5.4400682357142855 -10.275682971428573 2.4178007357142857 4.835614735714286" stroke-width="1.43"></path></g></svg>
                  </div>
                  </Link>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <View posts={posts} />
  );
}

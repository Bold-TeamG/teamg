import React, { useEffect, useRef, useState, createRef } from 'react';
import Footer from './footer';
import '../css/Community.css'; // CSSファイルをインポート
import comment from '../image/comment.svg';
import heart from '../image/heart.svg';
import star from '../image/star.svg';
import share from '../image/share.svg';
import person from '../image/person.svg';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase/index';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

export default function Recommend() {
  const [posts, setPosts] = useState([]);
  const videoRefs = useRef([]);
  const scrollViewRef = useRef(null);  // scrollViewRef を useRef で定義

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('fetchPosts function is running'); // ここで fetchPosts 関数が実行されているか確認

      try {
        const postsCollection = collection(db, 'posts');
        const q = query(postsCollection, where('type_id', '==', 1)); // type_id == 1 の条件を追加
        const postsSnapshot = await getDocs(q);
        const postsList = postsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Fetched posts:', postsList); // ここで取得した posts を確認

        // 各 post について、product の thumbnail を取得
        const postsWithThumbnails = await Promise.all(postsList.map(async post => {
          console.log('Product ID:', post.product_id); // ここで product_id をログ出力
          // product_id を文字列に変換
          const productId = String(post.product_id);
          const productRef = doc(db, 'products', productId);
          console.log('Product Reference Path:', productRef.path); // ここで doc に渡されるパスをログ出力

          const productSnap = await getDoc(productRef);

          if (productSnap.exists()) {
            console.log('Product found:', productSnap.data());
            return {
              ...post,
              img_url: productSnap.data().img_url, // ここで product の thumbnail を追加
            };
          } else {
            console.log('No product found for ID:', post.product_id);
            return post; // product が見つからない場合はそのまま
          }
        }));

        setPosts(postsWithThumbnails);
  
        // posts のデータが取得された後に videoRefs を設定する
        videoRefs.current = postsWithThumbnails.map(() => createRef());
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

    return (
      <div ref={scrollViewRef} className="scroll-view"> {/* scrollViewRef を div に割り当て */}
        {posts.map((post, i) => (
          <div key={post.id} className="content">
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
                    src={person}
                    alt="person icon"
                    className="person-icon icon"
                  /></Link>
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
                <h3>{post.title || 'Recommend名'}</h3>
                <p>{post.comment || 'コメントコメントコメント'}</p>
              </div>
              <div className="recoms">
                <Link to={`/product/${post.product_id}`}>
                  <img src={post.img_url}
                    alt="Item"
                    className="item-icon"
                  /></Link>
                <Link to={`/products/${post.goods_name}`}>
                  <img src={post.goods_url}
                    alt="Item"
                    className="item-icon"
                  /></Link>
                <Link to={`/genre/${post.genre_id}`}>
                  <img src={post.genre_url}
                    alt="Item"
                    className="item-icon"
                  /></Link>
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

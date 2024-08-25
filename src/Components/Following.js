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
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function Recommend() {
  const [posts, setPosts] = useState([]);
  const videoRefs = useRef([]);
  const scrollViewRef = useRef(null);  // scrollViewRef を useRef で定義

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const q = query(postsCollection, where('type_id', '==', 2)); // type_id == 1 の条件を追加
        const postsSnapshot = await getDocs(q);
        const postsList = postsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsList);
  
        // posts のデータが取得された後に videoRefs を設定する
        videoRefs.current = postsList.map(() => createRef());
      } catch (error) {
        console.error("Error fetching posts: ", error);
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
                <Link to={`/product/${post.product_id}`}><img src={post.thunbnail_url}
                  alt="Item"
                  className="item-icon"
                /></Link>
                <Link to={`/products/${post.goods_name}`}>
                  <img src={post ? post.goods_url : "https://placehold.jp/150x150.png"}
                    alt="Item"
                    className="item-icon"
                  /></Link>
                <Link to={`/genre/${post.genre_id}`}>
                  <img src={post ? post.genre_url : "https://placehold.jp/150x150.png"}
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

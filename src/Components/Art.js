import React, { useEffect, useRef, useState, createRef } from 'react';
import Footer from './footer';
import '../css/Community.css'; // CSSファイルをインポート
import comment from '../image/comment.svg';
import heart from '../image/heart.svg';
import star from '../image/star.svg';
import share from '../image/share.svg';
import person from '../image/person.svg';
import { Link } from 'react-router-dom';

export default function Art ({ links }) {
  const scrollViewRef = useRef(null);
  const videoRefs = useRef(links.map(() => createRef()));

  useEffect(() => {
    const scrollView = scrollViewRef.current;
    if (!scrollView) return;
    const observers = [];

    for (let i = 0; i < links.length; i++) {
      const video = videoRefs.current[i].current;
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
  }, [links]);

  const View = ({ links }) => {
    const [muted, setMuted] = useState(true);

    return (
      <div ref={scrollViewRef} className="scroll-view">
        {links.map((link, i) => (
          <div key={i} className="content">
            <div className="video-container">
                <video
                    src={link}
                    muted={muted}
                    autoPlay
                    playsInline
                    ref={videoRefs.current[i]}
                    className="video"
                    onClick={() => setMuted(false)}
                />
                <div className='icons'>
                    <Link to="/profile">
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
                <div className='texts'>
                    <h3>Art名</h3>
                    <p>コメントコメントコメント</p>
                </div>
                <div className='recoms'>
                  <Link to="/product"><img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"
                    /></Link>
                    <Link to="/discover">
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"
                    /></Link>
                    <Link to="/genre">
                    <img src="https://placehold.jp/150x150.png"
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
    <View links={links} />
  );
}

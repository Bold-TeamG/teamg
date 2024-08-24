import React, { useEffect, useRef, useState, createRef } from 'react';
import styled from 'styled-components';
import Footer from '../Components/footer';

export default function Community({ links }) {

    const ScrollView = styled.div`
        width: 100vw;
        height: 100dvh;
        overflow: scroll;
        scroll-snap-type: y mandatory;
    `;

    const Content = styled.div`
        width: 100vw;
        height: 100dvh;
        scroll-snap-stop: always;
        background: #111;
    `;

    const Video = styled.video`
        width: 100%;
        height: 100%;
    `;

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
          <ScrollView ref={scrollViewRef}>
            {links.map((link, i) => (
              <Content key={i}>
                <Video
                  src={link}
                  muted={muted}
                  autoPlay
                  playsInline
                  ref={videoRefs.current[i]}
                  onClick={() => setMuted(false)}
                />
              </Content>
            ))}
          </ScrollView>
        );
    };

    return (
        <div className="App">
            <View links={links} />
            <Footer />
        </div>
    );
}
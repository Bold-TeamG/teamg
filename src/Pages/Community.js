import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Recommend from '../Components/Recomend';
import Art from "../Components/Art";
import Handmade from "../Components/Handmade";
import Music from "../Components/Music";
import Following from "../Components/Following";
import Footer from '../Components/footer';
import FooterBlack from '../Components/footer-black';
import '../css/Community.css';

export default function Community() {
  const [activeTab, setActiveTab] = useState(0);
  const tabCount = 5; // タブの数

  useEffect(() => {
    // 初回レンダリング時にインジケーターの位置を調整
    updateIndicatorPosition(0);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActiveTab((prevTab) => {
        const newTab = (prevTab + 1) % tabCount;
        updateIndicatorPosition(newTab);
        return newTab;
      });
    },
    onSwipedRight: () => {
      setActiveTab((prevTab) => {
        const newTab = (prevTab - 1 + tabCount) % tabCount;
        updateIndicatorPosition(newTab);
        return newTab;
      });
    },
    trackMouse: true,
  });

  const updateIndicatorPosition = (newTab) => {
    const indicatorWrapper = document.querySelector('.tab-indicator-wrapper');
    const tabWidth = indicatorWrapper.offsetWidth / tabCount;
    const translateX = tabWidth * (newTab - (tabCount / 2 - 0.5)); 
    indicatorWrapper.style.transform = `translateX(${-translateX}px)`;
  };

  return (
    <div className="App com">
      <div {...handlers} style={{ touchAction: "pan-y" }}>
        {activeTab === 0 && <div key="tab1"><Recommend/></div>}
        {activeTab === 1 && <div key="tab2"><Following/></div>}
        {activeTab === 2 && <div key="tab3"><Art/></div>}
        {activeTab === 3 && <div key="tab4"><Music/></div>}
        {activeTab === 4 && <div key="tab4"><Handmade/></div>}
      </div>  
      <div className="tab-indicator">
        <div className="tab-indicator-wrapper">
          <span 
            className={activeTab === 0 ? 'tab active' : 'tab'}
            onClick={() => { setActiveTab(0); updateIndicatorPosition(0); }}
          >
            Recommend
          </span>
          <span 
            className={activeTab === 1 ? 'tab active' : 'tab'}
            onClick={() => { setActiveTab(1); updateIndicatorPosition(1); }}
          >
            Following
          </span>
          <span 
            className={activeTab === 2 ? 'tab active' : 'tab'}
            onClick={() => { setActiveTab(2); updateIndicatorPosition(2); }}
          >
            Art
          </span>
          <span 
            className={activeTab === 3 ? 'tab active' : 'tab'}
            onClick={() => { setActiveTab(3); updateIndicatorPosition(3); }}
          >
            Music
          </span>
          <span 
            className={activeTab === 4 ? 'tab active' : 'tab'}
            onClick={() => { setActiveTab(4); updateIndicatorPosition(4); }}
          >
            Handmade
          </span>
        </div>
      </div>
      <FooterBlack />
    </div>
  );
}

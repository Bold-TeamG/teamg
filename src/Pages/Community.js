import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Recommend from '../Components/Recomend';
import Art from "../Components/Art";
import Following from "../Components/Following";
import Footer from '../Components/footer';
import '../css/Community.css';
export default function Community() {
  const videoLinks = [
    'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-30s.mp4'
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("Swiped left");
      setActiveTab((prevTab) => {
        if (prevTab === 2) {
          return 0; // tab3から右にスワイプしたらtab1に切り替える
        }
        const newTab = prevTab < 2 ? prevTab + 1 : prevTab;
        console.log("New Active Tab:", newTab);
        return newTab;
      });
    },
    onSwipedRight: () => {
      console.log("Swiped right");
      setActiveTab((prevTab) => {
        if (prevTab === 0) {
          return 2; // tab1から右にスワイプしたらtab3に切り替える
        }
        const newTab = prevTab > 0 ? prevTab - 1 : prevTab;
        console.log("New Active Tab:", newTab);
        return newTab;
      });
    },
    trackMouse: true,
  });

  return (
    <div className="App com">
      <div {...handlers} style={{ touchAction: "pan-y" }}>
        {activeTab === 0 && <div key="tab1"><Recommend links={videoLinks} /></div>}
        {activeTab === 1 && <div key="tab2"><Art links={videoLinks} /></div>}
        {activeTab === 2 && <div key="tab3"><Following links={videoLinks} /></div>}
      </div>  
      <div className="tab-indicator">
        <span 
          className={activeTab === 0 ? 'tab active' : 'tab'}
          onClick={() => setActiveTab(0)}
        >
          Recommend
        </span>
        <span 
          className={activeTab === 1 ? 'tab active' : 'tab'}
          onClick={() => setActiveTab(1)}
        >
          Art
        </span>
        <span 
          className={activeTab === 2 ? 'tab active' : 'tab'}
          onClick={() => setActiveTab(2)}
        >
          Following
        </span>
      </div>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Recommend from '../Components/Recomend';

export default function Community() {
  const videoLinks = [
    'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-30s.mp4'
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeTab === "tab1") setActiveTab("tab2");
      else if (activeTab === "tab2") setActiveTab("tab3");
    },
    onSwipedRight: () => {
      if (activeTab === "tab3") setActiveTab("tab2");
      else if (activeTab === "tab2") setActiveTab("tab1");
    },
    trackMouse: true,
  });

  return (
    <div {...handlers} style={{ touchAction: "pan-y" }}>
      {activeTab === "tab1" && <div key="tab1"><Recommend links={videoLinks} /></div>}
      {activeTab === "tab2" && <div key="tab2">Content of Tab 2</div>}
      {activeTab === "tab3" && <div key="tab3">Content of Tab 3</div>}
    </div>
  );
};

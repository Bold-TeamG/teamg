import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Recommend from '../Components/Recomend';
import Art from "../Components/Art";
import Handmade from "../Components/Handmade";
import Music from "../Components/Music";
import Following from "../Components/Following";
import Tradingcard from '../Components/Tradingcard';
import FooterBlack from '../Components/footer-black';
import '../css/Community.css';

export default function Community() {
  const [activeTab, setActiveTab] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const tabCount = 6; // Number of tabs

  // Toggle button states
  const [toggleStates, setToggleStates] = useState({
    Recommend: true,
    Following: true,
    Art: true,
    Music: true,
    Handmade: true,
    Tradingcard: true
  });

  useEffect(() => {
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

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const handleNavLinkClick = () => {
    setNavActive(false);
  };

  const handleToggleChange = (tabName) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [tabName]: !prevStates[tabName]
    }));
  };

  return (
    <div className="App com">
      <div {...handlers} style={{ touchAction: "pan-y" }}>
        {toggleStates.Recommend && activeTab === 0 && <div key="tab1"><Recommend/></div>}
        {toggleStates.Following && activeTab === 1 && <div key="tab2"><Following/></div>}
        {toggleStates.Art && activeTab === 2 && <div key="tab3"><Art/></div>}
        {toggleStates.Music && activeTab === 3 && <div key="tab4"><Music/></div>}
        {toggleStates.Handmade && activeTab === 4 && <div key="tab5"><Handmade/></div>}
        {toggleStates.Tradingcard && activeTab === 5 && <div key="tab6"><Tradingcard/></div>}
      </div>  
      <div className="tab-indicator">
        <div className={`openbtn ${navActive ? 'active' : ''}`} onClick={toggleNav}>
          <span></span><span></span><span></span>
        </div>
        <nav id="g-nav" className={navActive ? 'panelactive' : ''}>
          <div className="community-icon-items">
              {['Art','Music','Handmade','Tradingcard', 'Handbags', 'Home', 'Vintage', 'Beauty', 'Kids', 'Sports',  'Office', 'Pet', 'Outdoor', 'Tools', 'Books', 'Other'].map((item, index) => (
                  <div key={item} className="community-icon-item">
                      <h6>{item}</h6>
                      <label className="toggle" htmlFor={`toggle-${index}`}>
                          <input
                            className="toggle__input"
                            type="checkbox"
                            id={`toggle-${index}`}
                            checked={toggleStates[item] ?? false}
                            onChange={() => handleToggleChange(item)}
                          />
                          <div className="toggle__fill"></div>
                      </label>
                  </div>
              ))}
          </div>
        </nav>
        <div className="tab-indicator-wrapper">
          {toggleStates.Recommend && (
            <span
              className={activeTab === 0 ? 'tab active' : 'tab'}
              onClick={() => { setActiveTab(0); updateIndicatorPosition(0); }}
            >
              Recommend
            </span>
          )}
          {toggleStates.Following && (
            <span
              className={activeTab === 1 ? 'tab active' : 'tab'}
              onClick={() => { setActiveTab(1); updateIndicatorPosition(1); }}
            >
              Following
            </span>
          )}
          {toggleStates.Art && (
            <span
              className={activeTab === 2 ? 'tab active' : 'tab'}
              onClick={() => { setActiveTab(2); updateIndicatorPosition(2); }}
            >
              Art
            </span>
          )}
          {toggleStates.Music && (
            <span
              className={activeTab === 3 ? 'tab active' : 'tab'}
              onClick={() => { setActiveTab(3); updateIndicatorPosition(3); }}
            >
              Music
            </span>
          )}
          {toggleStates.Handmade && (
            <span
              className={activeTab === 4 ? 'tab active' : 'tab'}
              onClick={() => { setActiveTab(4); updateIndicatorPosition(4); }}
            >
              Handmade
            </span>
          )}
          {toggleStates.Tradingcard && (
            <span
              className={activeTab === 5 ? 'tab active' : 'tab'}
              onClick={() => { setActiveTab(5); updateIndicatorPosition(5); }}
            >
              Tradingcard
            </span>
          )}
        </div>
      </div>
      <FooterBlack />
    </div>
  );
}

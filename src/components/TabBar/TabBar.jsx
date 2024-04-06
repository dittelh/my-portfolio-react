import React, { useState, useRef, useEffect, useContext } from 'react';
import './TabBar.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const TabBar = () => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const hideTabBar =
    location.pathname === '/tools-details' ||
    location.pathname === '/projects-details';

  const allTabs = [
    {
      id: 'home',
      name: 'Home',
      backgroundColor: 'rgba(147, 163, 252, 0.74)',
      focusColor: 'rgba(46, 75, 245, 1)',
      themeColor: 'rgba(231, 233, 248, 1)',
      route: '/',
      tabIndex: 0,
    },
    {
      id: 'tools',
      name: 'Tools',
      backgroundColor: 'rgba(206, 239, 198, 0.8)',
      focusColor: 'rgba(102, 186, 81, 1)',
      themeColor: 'rgba(242, 250, 240, 1)',
      route: '/tools',
      tabIndex: 1,
    },
    {
      id: 'projects',
      name: 'Projects',
      backgroundColor: 'rgba(211, 198, 239, 1)',
      focusColor: 'rgba(102, 79, 152, 1)',
      themeColor: 'rgba(237, 233, 245, 1)',
      route: '/projects',
      tabIndex: 2,
    },
    {
      id: 'contact',
      name: 'Contact',
      backgroundColor: 'rgba(244, 107, 107, 1)',
      focusColor: 'rgba(203, 20, 20, 1)',
      themeColor: 'rgba(248, 225, 225, 1)',
      route: '/contact',
      tabIndex: 3,
    },
  ];

  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(
    allTabs.find((tab) => tab.route === location.pathname)?.tabIndex !==
      undefined
      ? allTabs.find((tab) => tab.route === location.pathname)?.tabIndex
      : location.pathname.includes('projects')
      ? 2
      : location.pathname.includes('tools')
      ? 1
      : 0
  );
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab);
      console.log(currentTab.offsetLeft);
      console.log(currentTab.clientWidth);
      setTabUnderlineLeft(currentTab.offsetLeft);
      setTabUnderlineWidth(currentTab.clientWidth);
    };

    const tab = allTabs.find((tab) => tab.tabIndex === activeTabIndex);
    if (location.pathname !== '/tools-details') {
      theme.changeTheme(tab.id, tab.themeColor);
    }

    setTimeout(() => {
      setTabPosition();
    }, 60);
  }, [activeTabIndex]);

  const handleTabClick = (index, tab) => {
    setActiveTabIndex(index);
    theme.changeTheme(tab.id, tab.themeColor);
    navigate(tab.route, { state: { prevLocation: location.pathname } });
  };

  return (
    <div
      className={'sliding-tab-bar ' + (hideTabBar ? 'hideTabBar' : '')}
      style={{ backgroundColor: allTabs[activeTabIndex].backgroundColor }}
    >
      <div
        className="tab-underline"
        style={{
          left: tabUnderlineLeft,
          width: tabUnderlineWidth,
          backgroundColor: allTabs[activeTabIndex].focusColor,
        }}
      ></div>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;
        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`tab-button ${isActive ? 'active' : ''}`}
            onClick={() => handleTabClick(index, tab)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;

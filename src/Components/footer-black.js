import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';


export default function FooterBlack() {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <footer>
        <Link 
          to="/community"
          onClick={() => handleClick('community')}
          className={`community-white black-component component ${activeLink === 'community' ? 'active' : ''}`}
        >
         <svg className='black-fill' width="32" data-e2e="" height="32" viewBox="0 0 48 48" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"></path></svg>
        <p>Home</p>
        </Link>
        <Link 
          to="/discover"
          onClick={() => handleClick('discover')}
          className={`black-component component ${activeLink === 'discover' ? 'active' : ''}`}
        ><svg
        className='black-stroke' 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        fill="none" 
        stroke="#000" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    
            <p>Discover</p>
        </Link>
        <Link 
          to="/postswitcher"
          onClick={() => handleClick('postswitcher')}
          className={`black-component component ${activeLink === 'postswitcher' ? 'active' : ''}`}
        >
            <svg 
            className='black-stroke'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="none" 
            stroke="#000" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>

            <p>Post</p>
        </Link>
        <Link to="/dmnotification"
          className={`black-component component ${activeLink === '/DMNotification' ? 'active' : ''}`}
        >
        <svg 
          fill="#000000" 
          height="20px" 
          width="20px" 
          version="1.1" 
          viewBox="0 0 455.862 455.862" 
          className='white-fill balck-fill dm'
        >
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g> 
            <g> 
              <path d="M441.088,63.154H14.774C6.615,63.154,0,69.77,0,77.93v300.003c0,8.16,6.615,14.775,14.774,14.775h426.313 c8.16,0,14.775-6.614,14.775-14.775V77.93C455.862,69.77,449.248,63.154,441.088,63.154z M403.394,316.659 c6.256,5.43,6.926,14.903,1.497,21.16c-5.43,6.254-14.901,6.928-21.161,1.496c-3.876-3.364-101.683-88.252-105.452-91.523 l-40.515,35.164c-2.82,2.448-6.326,3.672-9.832,3.672s-7.012-1.224-9.832-3.672l-40.515-35.164 c-3.77,3.272-101.576,88.159-105.452,91.523c-6.257,5.43-15.731,4.761-21.161-1.496c-5.43-6.257-4.76-15.73,1.497-21.16 L154.7,227.93L52.468,139.203c-6.256-5.43-6.926-14.903-1.497-21.16c5.431-6.256,14.904-6.928,21.161-1.496 c5.07,4.4,146.594,127.231,155.799,135.22c7.972-6.919,150.305-130.451,155.799-135.22c6.256-5.431,15.731-4.762,21.161,1.496 c5.43,6.257,4.76,15.731-1.497,21.16L301.162,227.93L403.394,316.659z"></path> 
            </g> 
          </g>
        </svg>

        <p>DM</p>
        </Link>
        <Link 
          to="/myprofile"
          onClick={() => handleClick('myprofile')}
          className={`black-component component ${activeLink === 'myprofile' ? 'active' : ''}`}
        >
          <div width="24" height="24" font-size="24" class="css-1jz9tkv-DivIconPaddingContainer e14l9ebt17"><svg className='balck-fill' width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"></path></svg></div>
            <p>Me</p>
        </Link>
    </footer>
  );
}

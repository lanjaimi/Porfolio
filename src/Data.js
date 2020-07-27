import node from './images/node.png';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import express from './images/express.png';
import mongo from './images/mongo.png';
import react from './images/react.png';
import market from './images/market.png';
import note from './images/note.png';
import musicPlayer from './images/musicPlayer.png';
import java from './images/java.png';
import JavaFx from './images/JavaFX.png';
import SQLite from './images/SQLite.png';
import portfolio from './images/portfolio.png';

export const typingText = [
  ['my name is', ['Lahcen']],
  ["it's pronounced ", ['la-sin']],
  [
    "I'm a",
    [
      'Computer science student at BU',
      'full stack developer',
      'home chef',
      'beer enthusiast',
    ],
  ],
];

export const projects = [
  {
    title: 'MarketPlace',
    description:
      'Ecommerce website built using react in the front-end and node, express and mondodb in the back-end. The site is composed of multiple reusable components. Major features include:<ul><li>  The ability to add products to the site and upload images </li><li>A big customizable carousel with multiple components. </li><li>A small carousel to showcase products that can be used throughout the site with different API requests. </li><li>The ability to specify quantity and add products to a shopping cart. </li><li> The ability to search the site </li><li> And much more</li></ul>',
    technologies: [html, css, javascript, react, node, express, mongo],
    image: market,
    source: '#',
    demo: 'https://lahcenmarketplace.herokuapp.com/',
  },
  {
    title: 'NoteTaker',
    description:
      'Note taking app that allow the users to create accounts to store, edit, delete and search notes. <bt> I used JSON Web Tokens stored on local storage for authentication and bcrypt for password encryption.',
    technologies: [html, css, javascript, react, node, express, mongo],
    image: note,
    source: '#',
    demo: 'https://notetakerlahcen.herokuapp.com/',
  },
  {
    title: 'MusicPlayer',
    description:
      'A music player built using Java, JavaFx and an imbedded SQLite database. The player offers all the standard functionalities of a music player such as: play, pause, skip, play, or play on shuffle. As well as the ability to add songs to a playlist stored internally on a dedicated database. The player also a feature a beautiful UI with song progression tracking.',
    technologies: [java, JavaFx, SQLite],
    image: musicPlayer,
    source: '#',
    demo: '#',
  },
  {
    title: 'My Personal Website',
    description:
      'I built this website with React, and Node.<br> More of my work can be found om my GitHub account by clicking the icon on the navbar.',
    technologies: [html, css, javascript, react, node],
    image: portfolio,
    source: '#',
    demo: '#',
  },
];

export const social = {
  github: 'https://github.com/lanjaimi',
  linkedin: 'https://www.linkedin.com/in/anjaimi-lahcen/',
};

export default {
  typingText,
  projects,
};

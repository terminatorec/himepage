import logo from './logo.svg';
import './App.css';
import Link from './components/Link';
import { useState } from 'react';

const links = [
    {
      link: 'https://terminatorec.github.io/column-cards/',
      title: 'Kanban desks',
      img: 'kanbandesks.png',
      desc: 'in your HTML <head> tag for making all of page links which not include target attribute to be opened in a new blank window by default. otherwise you can set target attribute for each link like this:',
    },
    {
      link: 'https://terminatorec.github.io/chat/#/chat/login',
      title: 'Online chat',
      img: 'chat.png',
      desc: '',
    },
    {
      link: 'https://terminatorec.github.io/todo2/#/todo2',
      title: 'ToDo2 RandomSmile',
      img: 'todo2.png',
      desc: '',
    },
    {
      link: 'https://terminatorec.github.io/react-gh-pages-reactposts/#/react-gh-pages-reactposts/posts',
      title: 'Posts',
      img: 'posts.png',
      desc: 'UlbiTV lesson',
    },
  ]


function App() {
  return (
    <div className="App">
      <div className='Links'>

        {links.map(item=>
            <Link 
              link={item.link}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
        )}

      </div>
    </div>
  );
}

export default App;

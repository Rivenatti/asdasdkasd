import React from 'react';
import './Home.scss';

 const Home = () => {
  return (
    <main>
        <header>
            <h1>Documentation your users will love!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eum corporis sit sequi, adipisci maiores sapiente fugiat ab excepturi nemo.</p>

            <button>Sign up for GitBook</button>
            <p><small>Or log in with your GitHub account</small></p>
        </header>

        <article className="organizations">
            <p>Redux</p>
            <p>realm</p>
            <p>coursera</p>
            <p>DuckDuckGo</p>
        </article>
    </main>
  )
}

export default Home;
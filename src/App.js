import React, { useState } from 'react';
import './App.css';
import './index.css';
import App2 from './App2';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      setSearched(true);
    }
  };

  if (searched) {
    return <App2 query={query} />;
  }

  return (
    <search>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          placeholder="검색어를 입력하세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
    </search>
  );
}

function Header() {
  return (
    <header>
      <h1>
        <a href="index.html">Balanced diet</a>
        </h1>        
    </header>
  );
}


function Nav() {
  return (
    <nav>
      <SearchBar />
    </nav>
  );
}


function Main() {
  const isIndexPage = window.location.pathname === '/index.html';

  return (
    <section id="main">
      <article>
        <header>
          {isIndexPage && (
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 450px' }}>
            </h1>
          )}
        </header>
        {isIndexPage && (
          <p style={{ textAlign: 'center', marginBottom: '1' }}>
            Balanced diet는 건강한 식단과 영양 정보를 제공하는 웹사이트입니다. 우리의 목표는 균형 잡힌 식단을 통해 건강한
            삶을 지원하는 것입니다. 검색 기능을 사용하여 다양한 레시피와 영양 정보를 확인해보세요.
          </p>
        )}
      </article>
    </section>
  );
}
function Footer() {
  return <footer>Food Nutrition Analysis Web Example 2023</footer>;
}

function App() {
  return (
    <div>
      <aside id="right">
        <button onClick={() => (window.location.href = 'Login.html')} className="login">
          Login
        </button>
        <button onClick={() => (window.location.href = 'mypage.html')} className="my button">
          My
        </button>
        <button onClick={() => (window.location.href = '')} className="X">
          X
        </button>
      </aside>
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
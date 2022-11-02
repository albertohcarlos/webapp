import { React, Fragment, useState, useEffect } from 'react'
import './NavBar.scss'
import { useQueryParams } from 'app/hooks/useQueryParams';

const App = () => {

  const [inputSearch, setInputSearch] = useState(useQueryParams().search || '')
  const search = (e) => {
    e.preventDefault();

    if (!inputSearch.trim()) return;

    window.location.href = `/items?search=${inputSearch}`   

  }

  return (
    <Fragment>
      <nav>
        <div className='nav-content container'>

          <a href='/'>
            <div className='nav-logo'></div>
          </a>

          <form onSubmit={search} className='nav-form' >
            <input className='nav-search-input'
              placeholder='Nunca dejes de buscar'
              value={inputSearch}
              onChange={e => setInputSearch(e.target.value)}
            />
            <button className='nav-search-btn' type="submit"></button>
          </form>

        </div>
      </nav>
    </Fragment >
  )
}

export default App;
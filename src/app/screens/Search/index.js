import { React, Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Search.scss'
import { searchQuery } from 'services/productsServices'
import Item from 'app/components/Item';
import Navbar from 'app/components/Navbar';
import { useQueryParams } from 'app/hooks/useQueryParams';

const Search = () => {  

  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const queries = useQueryParams();

  useEffect(() => {
    document.title = 'Mercado Libre Argentina - Envíos gratis en el día';

    const getQuery = async () => {
      const search = queries.search
      const result = (await searchQuery(search))?.data

      if (!result?.items?.length) { setError(true); return }
      setCategories(result.categories)
      setItems(result.items.slice(0, 4))
    }
    
    getQuery();

  }, [queries.search])
  
  return (
    <Fragment>
      <Navbar />

      {error
        ? <div className='search-null'>No hay publicaciones que coincidan con tu búsqueda.</div>
        : !items.length
          ? <></>
          : (
            <main className='container'>

              <section className='breadcrumbs'>
                <div className='ui-search-categories'>
                  {categories.map((cat, idx) =>
                  (
                    <div key={idx} className='ui-search-category'>{cat}</div>
                  )
                  )}
                </div>
              </section>

              <section className='ui-search-container'>
                {
                  items.map((item, idx) => (
                    <div key={idx} className='ui-search-item' >
                      <Item  {...item} />
                    </div>
                  ))
                }
              </section>

            </main>
          )
      }

    </Fragment >
  )
}

export default Search;
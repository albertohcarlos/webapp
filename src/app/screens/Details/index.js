import { React, Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Details.scss'
import Navbar from 'app/components/Navbar';
import { getItem } from 'services/productsServices'

const Details = () => {

  let [id] = useState(useParams().id || '')
  const [item, setItem] = useState(null)
  const [error, setError] = useState(false)


  const getItemDetail = async (id) => {

    let result
    try {

      result = (await getItem(id))?.data
      if (!result.item) {
        setError(true);
        return;
      }
      setItem(result.item);
      return;
    } catch (error) {
      setError(true);
      return;
    }
  }


  useEffect(() => {
    getItemDetail(id)
  }, [id])


  return (
    <Fragment>
      <Navbar />
      {error
        ? <div className='search-null'>No hay publicaciones que coincidan con tu búsqueda.</div>
        : !item
          ? null
          : (
            <main className='container'>

              <section className='breadcrumbs'>
                <div className='ui-search-categories'>
                  {/* {categories.map((cat, idx) =>
                  (
                    <div key={idx} className='ui-search-category'>{cat}</div>
                  )
                  )} */}
                </div>
              </section>

              <div className='ui-det-itemContainer' >
                <div className='ui-det-itemContent' >

                  <div className='ui-det-picContainer'>
                    <img src={item.picture} alt={item.title} title={item.title} className='ui-det-itemPic' ></img>
                  </div>

                  <div className='ui-det-info'>
                    <h3 className='ui-det-status'>{item.condition} - {item.sold_quantity} vendidos</h3>
                    <h2 className='ui-det-title-1'>{item.title}</h2>
                    {item.price ?
                      <h2 className='ui-det-price'>
                        {new Intl.NumberFormat('es-AR', { style: 'currency', currency: item.price.currency, maximumFractionDigits: 0 }).format(item.price.amount)}
                        <sup><span className='ui-det-price-dec'>{String(item.price.decimals).padStart(2, '0')}</span></sup>
                      </h2> : null
                    }
                    <button className='ui-det-btnComprar'>Comprar</button>
                  </div>


                  <div className='ui-det-inf'>
                    <h2 className='ui-det-title-2'>Descripcion del producto</h2>
                    <p className='ui-det-desc'>{item.description}</p>
                  </div>

                </div>
              </div>

            </main>
          )
      }
    </Fragment>
  )
}

export default Details;

// {error
//   ? <div className='search-null'>No hay publicaciones que coincidan con tu búsqueda.</div>
//   : item ? (
//     <div className='ui-det-containerBound'>
//       <div className='ui-det-container' >

//         <div className='ui-det-categories'></div>

//         <div className='ui-det-itemContainer' >
//           <div className='ui-det-itemContent' >
//             <div className='ui-det-sup'>
//               <div className='ui-det-picContainer'>
//                 <img src={item.picture} alt={item.title} title={item.title} className='ui-det-itemPic' ></img>
//               </div>

//               <div className='ui-det-info'>
//                 <h3 className='ui-det-status'>{item.condition} - {item.sold_quantity} vendidos</h3>
//                 <h2 className='ui-det-title-1'>{item.title}</h2>
//                 {item.price ?
//                   <h2 className='ui-det-price'>
//                     {new Intl.NumberFormat('es-AR', { style: 'currency', currency: item.price.currency, maximumFractionDigits: 0 }).format(item.price.amount)}
//                     <span className='ui-det-price-dec'>{String(item.price.decimals).padStart(2, '0')}</span>
//                   </h2> : null
//                 }
//                 <button className='ui-det-btnComprar'>Comprar</button>
//               </div>

//             </div>
//             <div className='ui-det-inf'>
//               <h2 className='ui-det-title-2'>Descripcion del producto</h2>
//               <p className='ui-det-desc'>{item.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : null
// }
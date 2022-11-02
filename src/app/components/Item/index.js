import { React, Fragment } from 'react'
import './Item.scss'

const Item = ({
  id,
  picture,
  price,
  title,
  location,
  free_shipping
}) => {

  return (
    <Fragment>


      <div className='ui-item-container'>

        <a href={`/items/${id}`}>
          <div className='ui-item-picContainer'>
            <img src={picture} alt={title} title={title} className='ui-item-itemPic' ></img>
          </div>
        </a>



        <div className='ui-item-itemInfo'>
          <a className='ui-item-link' href={`/items/${id}`}>
            <div className='ui-item-pricing'>
              {price ?
                <p className='ui-item-price'>
                  {new Intl.NumberFormat('es-AR', { style: 'currency', currency: price.currency, maximumFractionDigits: 0 }).format(price.amount)}
                </p> : null
              }
              {
                free_shipping ?
                  (
                    <div className='ui-item-freeShipping'>
                    </div>
                  ) : null
              }
            </div>
          </a>
          <a style={{ textDecoration: 'none', color: '#333' }} href={`/items/${id}`}>
            <h2 className='ui-item-title'>{title}</h2>
          </a>
        </div>

        <div className='ui-item-locationBounds'>
          <p className='ui-item-location'>{location}</p>
        </div>
      </div >


    </Fragment >
  )
}

export default Item;
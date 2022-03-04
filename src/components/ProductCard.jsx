import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommas from '../utils/NumberWithComma'

const ProductCard = ({ img01, img02, title, price, slug }) => {

  return (
    <div className='product-card'>
      <Link to={`/product/${slug}`}>
        <div className="product-card__image">
          <img src={img01} alt="Image" />
          <img src={img02} alt="Image" />
        </div>
        <div className="product-card__name">{title}</div>
        <div className="product-card__price">
          {numberWithCommas(price)}
          <span className='product-card__price-old'><del>{numberWithCommas((price))}</del></span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size='sm'
          icon='cart'
          animate={true}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default ProductCard
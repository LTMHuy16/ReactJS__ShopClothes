import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Grid from './Grid'
import ProductCard from './ProductCard'


const InfinityList = props => {

  const listRef = useRef(null)
  
  const perLoad = 6
  
  const [load, setLoad] = useState(true)

  const [index, setIndex] = useState(0)

  const [data, setData] = useState([])


  useEffect(() => {
    setData(props.data.slice(0, perLoad))
    setIndex(1)
  }, [props.data])


  useEffect(() => {
    const checkLoadMore = () => {
      if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
        setLoad(true)
      }
    }

    window.addEventListener('scroll', checkLoadMore) 
    
    return () => {
      window.removeEventListener('scroll', checkLoadMore)
    }
  }, [listRef])


  useEffect(() => {
    const getItem = () => {
      const pages = Math.floor(props.data.length / perLoad)
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

      if (load && index < maxIndex) {
        const start = perLoad * index
        const end = start + perLoad

        setData(data.concat(props.data.slice(start, end)))
        setIndex(index + 1)
      }
    }
    getItem()
    setLoad(false)

  }, [load, index, data, props.data])
  
  

  

  return (
    <div 
      className="infinity-list"
      ref={listRef}
    >
      <Grid 
        col={3}
        mdCol={2}
        smCol={1}
        gap={20}
      >
        {
          data.map((item, index) => (
            <ProductCard
              key={index}
              img01={item.image01}
              img02={item.image02}
              title={item.title}
              price={item.price}
              slug={item.slug}
            />
          ))
        }
      </Grid>
    </div>
  )
}

InfinityList.propTypes = {
  data: PropTypes.array.isRequired
}

export default InfinityList
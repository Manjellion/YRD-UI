import React from 'react'
import { Button } from 'react-bootstrap'
import CSS from '../index.module.css'
import '../../../Global.css'
import ColoredLine from '../../Homepage/Components/ColoredLine'
import {
  Search,
  Price,
  Rooms,
  Rating,
  Options
} from './export-filter'

// Each filter is a seperate component as they will all be used to produce a specified result upon the data collected by end user input

function Filter() {
  return (
    <div className={CSS.filter_container}>
      <div className={CSS.filter_innerContainer}>
        <div className={CSS.filer_header}>
              <h2>Filters</h2>
              <Button>Clear all</Button>
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.search_filter}>
            <Search />
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.price_filter}>
            <Price />
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.room_filter}>
            <Rooms />
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.rating_filter}>
            <Rating />
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.options_filter}>
            <Options />
        </div>
      </div>
    </div>
  )
}

export default Filter
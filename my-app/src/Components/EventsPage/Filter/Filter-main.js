import Button from 'react-bootstrap/Button'
import React from 'react'
import CSS from '../index.module.css'
import ColoredLine from '../../Homepage/Components/ColoredLine'
import {
  Pricing,
  NumPeople,
  Options
} from './export-filter'

function filterMain() {
  return (
    <div className={CSS.filter_container}>
      <div className={CSS.filter_innerContainer}>
        <div className={CSS.filter_header}>
              <h2>Filters</h2>
              <Button>Clear all</Button>
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.price_filter}>
            <Pricing />
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.room_filter}>
            <NumPeople />
          </div>
          <ColoredLine color='grey' />
          <div className={CSS.options_filter}>
            <Options />
        </div>
      </div>
    </div>
  )
}

export default filterMain
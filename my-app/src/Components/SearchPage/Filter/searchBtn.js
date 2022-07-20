import React from 'react'
import { TextField } from '@mui/material'
import CSS from '../index.module.css'

function searchBtn() {
  return (
    <div className={CSS.search_container}>
        <TextField id="outlined-basic" label="Search" variant="outlined" className={CSS.searchBtn} />
    </div>
  )
}

export default searchBtn
import React from 'react'
import Cards from './Card'
import contacts from './tempArr'
import CSS from '../index.module.css'

function ResultMain() {
  return (
    <div className={CSS.result_container}>
        <Cards 
            imgUrl={contacts[0].imgURL}
            title={contacts[0].title}
            date={contacts[0].date}
            capacity={contacts[0].capacity}
            catergory={contacts[0].catergory}
            price={contacts[0].price}
        />
        <Cards 
            imgUrl={contacts[0].imgURL}
            title={contacts[0].title}
            date={contacts[0].date}
            capacity={contacts[0].capacity}
            catergory={contacts[0].catergory}
            price={contacts[0].price}
        />
        <Cards 
            imgUrl={contacts[0].imgURL}
            title={contacts[0].title}
            date={contacts[0].date}
            capacity={contacts[0].capacity}
            catergory={contacts[0].catergory}
            price={contacts[0].price}
        />
        <Cards 
            imgUrl={contacts[0].imgURL}
            title={contacts[0].title}
            date={contacts[0].date}
            capacity={contacts[0].capacity}
            catergory={contacts[0].catergory}
            price={contacts[0].price}
        />
        <Cards 
            imgUrl={contacts[0].imgURL}
            title={contacts[0].title}
            date={contacts[0].date}
            capacity={contacts[0].capacity}
            catergory={contacts[0].catergory}
            price={contacts[0].price}
        />
        <Cards 
            imgUrl={contacts[0].imgURL}
            title={contacts[0].title}
            date={contacts[0].date}
            capacity={contacts[0].capacity}
            catergory={contacts[0].catergory}
            price={contacts[0].price}
        />
    </div>
  )
}

export default ResultMain
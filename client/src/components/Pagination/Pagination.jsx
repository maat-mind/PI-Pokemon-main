import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({
  pokemonPerPage,
  allPokemons,
  pagination,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 0; i <= Math.ceil(allPokemons / pokemonPerPage) - 1; i++)
    pageNumbers.push(i + 1)

  return (
    <ul className={styles.pagination}>
      {pageNumbers?.map((n) => {
        return (
          <li
            className={currentPage === n ? styles.active : ''}
            key={n}
            onClick={() => pagination(n)}>
            <p className={styles.current}>{n}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination

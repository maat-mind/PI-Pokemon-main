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
          <li key={n} onClick={() => pagination(n)}>
            <button className={styles.btnPage}>
              <p className={styles.page}>{n}</p>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination

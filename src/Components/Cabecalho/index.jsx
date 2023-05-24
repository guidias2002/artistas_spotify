import CabecalhoLink from 'Components/CabecalhoLink'
import React from 'react'
import logo from './spotify-2.svg'
import styles from './Cabecalho.module.css'

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="" />
        <nav>
          <CabecalhoLink to='/'>Inicio</CabecalhoLink>
          <CabecalhoLink to='/favoritos'>Favoritos</CabecalhoLink>
        </nav>
      </div>
    </header>
  )
}
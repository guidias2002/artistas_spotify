import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './CabecalhoLink.module.css'

export default function CabecalhoLink({ to, children }) {

  const location = useLocation()

  return (
    <Link className={`
    ${styles.link}
    ${location.pathname === to ? styles.linkDestacado : ''}
    `} to={to}>
      {children}
    </Link>
  )
}

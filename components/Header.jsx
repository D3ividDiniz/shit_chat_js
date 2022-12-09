import Image from 'next/image'
import React from 'react'
import {signOut} from "next-auth/react"
import styles from '../styles/Home.module.css'
import Button from './Button'

export default function Header(props) {
  const user = props.user;

  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="Vercel Logo" width={180} height={88} />
      <div>
        <h2>Deivid Diniz</h2>
        <Button text='Criar' type="g"/>
        <div onClick={()=>signOut()}><Button text='Log-Of' type="r"/></div>
      </div>
      <style jsx>{`
        div{
          display: flex;
          gap: 0.8rem;
          align-items: center;
          height: 88px;
        }
        h2{
          font-weight: normal;
          margin-right:0.8rem;
          font-size:32px;
        }
      `}</style>
    </header>
  )
}

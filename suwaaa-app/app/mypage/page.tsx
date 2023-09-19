// pages/login.tsx
'use client'
import { useState } from 'react';
import { Button, Container } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './page.module.css';

export default function Login() {

  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [likes, setLikes] = useState([
    {
      name: "店舗1"
    },
    {
      name: "店舗1"
    },
    {
      name: "店舗1"
    }
  ])

  return (
    <Container className={styles.container}>
      <div className={styles.profileWrap}>
        <div>
          <img className={styles.profileImg} />
        </div>
        <div>
          <h4>{ name }</h4>
          <span>SuwaaaID: { id }</span>
        </div>
        <div>
          <Button variant="outlined">
            <MoreHorizIcon />
          </Button>
        </div>
      </div>
      <div className={styles.likeWrap}>
        <h2>
          お気に入り
        </h2>
        <div className={styles.shopsWrap}>
          {likes.map((like, index) => {
            return (
              <div className={styles.shopCard} key={ index }>
                <img />
                <p>{ like.name }</p>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  );
}


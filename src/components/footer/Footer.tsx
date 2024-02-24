import React from 'react';
import css from './footer.module.css';

type Props = {}

export default function Footer({}: Props) {

  return (
    <>
      <footer className={css.foot} >I am a footer</footer>
    </>
  )
}
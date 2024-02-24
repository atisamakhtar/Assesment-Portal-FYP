import React from 'react';
import css from './footer.module.css';

type Props = {}

export default function Footer({}: Props) {

  return (
    <>
      <footer className={`text-center py-3 text-white bg-slate-900 ${css.foot}`} >&copy; 2024, All rights reserved</footer>
    </>
  )
}
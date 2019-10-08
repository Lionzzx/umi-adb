import React from 'react';
import styles from './Title.css';

export default function Title(props: any) {
  return <div className={styles.hight}>{props.title}</div>;
}

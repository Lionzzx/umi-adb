import React from 'react';
import styles from './company.css';
import Title from '@/components/Title';
export default function() {
  return (
    <div>
      <div style={{ fontSize: '18px', color: '#666666', marginTop: '50px' }}>
        当前位置：首页→<span style={{ fontSize: '18px', color: '#009FE9' }}> 院士工作站</span>
      </div>
      <Title title="公司介绍" />
      <Title title="公司荣耀" />
      <Title title="生产基地" />
    </div>
  );
}

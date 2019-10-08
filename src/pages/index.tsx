/**
 * title: 爱丁堡首页
 * Routes:
 *   - ./src/routes/PrivateRoute.tsx
 */
import React, { useState } from 'react';
import styles from './index.css';
import leftArrow from '@/assets/arrow.png';
import company from '@/assets/company.png';

function Title(props: any) {
  return (
    <div className={styles.hight}>
      {props.title}
      {props.hasMore ? <span className={styles.more}>更多<img src={leftArrow} /></span> : null}
    </div>
  );
}

export default function() {
  const [isActive, setIsActive] = useState([false]);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.left}>
          <video className={styles.video} src="" />
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={isActive[0] ? styles.title : styles.active}>
              集医疗、教学、科研于一体的大型等综合医院，是国家卫生计生委指定已高速发展成集重症诊治指导中心
            </div>
            <div className={styles.time}>2018-11-12</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              集医疗、教学、科研于一体的大型等综合医院，是国家卫生计生委指定已高速发展成集重症诊治指导中心
            </div>
            <div className={styles.time}>2018-11-12</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              集医疗、教学、科研于一体的大型等综合医院，是国家卫生计生委指定已高速发展成集重症诊治指导中心
            </div>
            <div className={styles.time}>2018-11-12</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              集医疗、教学、科研于一体的大型等综合医院，是国家卫生计生委指定已高速发展成集重症诊治指导中心
            </div>
            <div className={styles.time}>2018-11-12</div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <Title hasMore={true} title="最新活动" />
        <Title hasMore={true} title="最新资讯" />
      </div>
      <div>
        <Title title="合作企业" />

        <div className={styles.flist}>
          <div>
            <img src={company} alt="" />
            <div className={styles.flistTitle}>广州仁爱医院</div>
          </div>
          <div>
            <img src={company} alt="" />
            <div className={styles.flistTitle}>广州仁爱医院</div>
          </div>
        </div>
      </div>
    </>
  );
}

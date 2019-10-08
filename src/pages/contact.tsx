import React from 'react';

import styles from './contact.css';

export default function() {
  return (
    <>
      <div style={{ fontSize: '18px', color: '#666666', marginTop: '50px' }}>
        当前位置：首页→<span style={{ fontSize: '18px', color: '#009FE9' }}> 联系我们</span>
      </div>
      <div className={styles.contact}>
        <div className={styles.img}>
          <img />
        </div>
        <div>
          <div className={styles.title}>
            联系我们
            <span>Contact us</span>
          </div>
          <div className={styles.company}>爱丁堡医疗科技有限公司</div>
          <div className={styles.desc}>电话：0731-88243056</div>
          <div className={styles.desc}>邮编：696969</div>
          <div className={styles.desc}>地址：广东省广州市白云区龙兴中路132号附近</div>
        </div>
      </div>
    </>
  );
}

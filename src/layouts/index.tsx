import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'antd';
import styles from './index.css';
import NavLink from 'umi/NavLink';
import { logo, carouselList } from '@/serve';

const BasicLayout: React.FC = props => {
  const [carousel, setCarousel] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    logo().then((resp: any) => {
      setLogoUrl(resp.logo);
    });
    carouselList().then((resp: any) => {
      setCarousel(resp.data);
    });
  }, []);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <img src={logoUrl} alt="" />
        </NavLink>
        <nav className={styles.nav}>
          <NavLink exact to="/" activeClassName={styles.active}>
            首页
          </NavLink>
          <NavLink activeClassName={styles.active} to="/company">
            公司介绍
          </NavLink>
          <NavLink activeClassName={styles.active} to="/work">
            院士工作站
          </NavLink>
          <NavLink activeClassName={styles.active} to="/product">
            产品
          </NavLink>
          <NavLink activeClassName={styles.active} to="/activity">
            活动
          </NavLink>
          <NavLink activeClassName={styles.active} to="/news">
            资讯
          </NavLink>
          <NavLink activeClassName={styles.active} to="/contact">
            联系我们
          </NavLink>
        </nav>
      </header>
      <Carousel autoplay className={styles.carousel}>
        <div>
          <img src={logoUrl} alt="" />
        </div>
        <div>
          <img src={logoUrl} alt="" />
        </div>
        <div>
          <img src={logoUrl} alt="" />
        </div>
        <div>
          <img src={logoUrl} alt="" />
        </div>
      </Carousel>
      <div className={styles.body}>{props.children}</div>
      <footer className={styles.footer}>
        Copyright © 2018爱丁堡医疗科技(广州)有限公司粤P备16058660号-1
      </footer>
    </>
  );
};

export default BasicLayout;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './page404.module.css';
import Pic404 from '../../components/assets/404Pic.png';
import { CARS_LIST_PAGE } from '../../routers/routers';

const Page404 = () => {
  return (
    <div className={styles._wrapper}>
      <div className={styles._container}>
        <div className={styles._img_container}>
          <img alt="404 Page" src={Pic404} />
        </div>
        <div className={styles._tags_container}>
          <div className={styles._tag_title_wrapper}>
            <div className={styles._tag_title_container}>
              <div className={styles._tag_title}> Hey, you!</div>
            </div>
            <div className={styles._tag_title_container}>
              <div className={styles._tag_title}> Can't you be serious?</div>
            </div>
            <div className={styles.tag_title_container}>
              <Link to={CARS_LIST_PAGE}>
                <input
                  type="button"
                  className={styles._tag_title_green}
                  value="Get back to our offers"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;

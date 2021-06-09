import React, { useState } from 'react';
import styles from './aboutUsPage.module.css';
import { ReactComponent as AvatarAG } from '../../components/assets/AvatarAG.svg';
import { ReactComponent as AvatarXJ } from '../../components/assets/AvatarXJ.svg';
import { ReactComponent as FunPic } from '../../components/assets/FunPic.svg';

const AboutUsPage = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      {active && (
        <>
          <div className={styles._about_us_container}>
            <div className={styles._about_us_text}>
              <span className={styles._about_us_title}>Thank you Profs, </span>
              <span className={styles._about_us_title}>
                that was great fun sharing those 5 months with you
              </span>
            </div>
          </div>
          <div className={styles._about_us_avatar_container}>
            <AvatarAG className={styles._avatar} />
            <AvatarXJ className={styles._avatar} />
          </div>
        </>
      )}
      {!active && (
        <>
          <div className={styles._about_us_container}>
            <div className={styles._about_us_text}>
              <span className={styles._about_us_title}>
                Bye Bye, we've got a few things to prepare for tomorrow
              </span>
            </div>
          </div>
          <div className={styles._about_us_avatar_container}>
            <FunPic className={styles._fun_pic} />
          </div>
        </>
      )}
      <div className={styles._about_us_button_container}>
        <input
          className={styles._button}
          type="button"
          value="but last... and not least ... "
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default AboutUsPage;

import React from 'react';
import styles from './menuItem.module.css';

const MenuItem = ({ menuItemName }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu_item}>
                <div className={styles.link_item}>
                    {menuItemName}
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

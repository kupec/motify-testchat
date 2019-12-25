import React from 'react';
import styles from './TextChatHeader.module.scss';

export default function TextChatHeader() {
    return (
        <div className={styles.textChatHeader}>
            <div className={styles.title}>Чат</div>
            <div className={styles.closeButton}>x</div>
        </div>
    );
}

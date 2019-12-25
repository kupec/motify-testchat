import React, {useEffect, useRef} from 'react';
import styles from './TextChatMessageItem.module.scss';
import classNames from 'classnames';

export default function TextChatMessageItem(props) {
    const {author, text} = props;

    const ref = useRef(null);
    useEffect(() => {
        ref.current.scrollIntoView();
    }, []);

    const className = author === 'user' ? styles.messageByUser : styles.messageByCustomer;

    return (
        <div ref={ref} className={classNames(styles.message, className)}>
            {text}
        </div>
    );
}

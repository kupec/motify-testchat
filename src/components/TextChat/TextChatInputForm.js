import React, {useState} from 'react';
import styles from './TextChatInputForm.module.scss';
import classNames from 'classnames';

export default function TextChatInputForm(props) {
    const {onSend} = props;
    const [currentText, setCurrentText] = useState('');

    function submit() {
        if (currentText.trim().length === 0) {
            return;
        }

        onSend(currentText);
        setCurrentText('');
    }

    return (
        <div className={styles.inputForm}>
            <input type='text'
                className={styles.input}
                value={currentText}
                placeholder='Сообщение...'
                onChange={({target: {value}}) => setCurrentText(value)}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        submit();
                    }
                }}
            />
            <div className={styles.sendButton} onClick={submit}/>
        </div>
    );
}

import React from 'react';
import styles from './TextChat.module.scss';
import TextChatHeader from './TextChatHeader';
import TextChatMessages from './TextChatMessages';
import TextChatInputForm from './TextChatInputForm';

export default function TextChat(props) {
    const {textMessageList, onSendTextMessage} = props;

    return (
        <div className={styles.textChatPanel}>
            <TextChatHeader/>
            <TextChatMessages messages={textMessageList}/>
            <TextChatInputForm onSend={onSendTextMessage}/>
        </div>
    );
}

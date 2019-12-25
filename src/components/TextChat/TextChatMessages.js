import React  from 'react';
import styles from './TextChatMessages.module.scss';
import TextChatMessageItem from './TextChatMessageItem';

export default function TextChatMessages(props) {
    const {messages} = props;

    return (
        <div className={styles.textChatMessages}>
            {messages.map(renderMessage)}
        </div>
    );
}

function renderMessage(message, index) {
    const {author, text} = message;

    return (
        <TextChatMessageItem key={index} author={author} text={text}/>
    );
}

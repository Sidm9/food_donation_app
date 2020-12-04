
import firebase from '../../firestore.js';

const db = firebase.firestore();

export const send = (message) => {
    messages.forEach(item => {
        const message = {
            text: item.text,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: item.user
        };
        db.push(message);
    });
}

export const parse = (message) => {
    const { user, text, timestamp } = message.val()
    const { key: _id } = message;
    const createAt = new Date(timestamp);

    return {
        _id, createAt, text, user
    };
};
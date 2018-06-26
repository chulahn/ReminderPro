import { ADD_REMINDER } from '../constants';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;

    switch(action.type) {
        case ADD_REMINDER:
            //copies state into reminder
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;
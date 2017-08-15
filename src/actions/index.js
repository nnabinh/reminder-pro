import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
	type: ADD_REMINDER,
	text,
	dueDate
    }
    console.log(`action in add reminder: ${text}`);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
	type: DELETE_REMINDER,
	id
    }
    console.log(`action in delete reminder: ${id}`);
    return action;
}

export const clearReminder = () => {
    console.log('action in clear reminder');
    return {
	type: CLEAR_REMINDER
    }
}

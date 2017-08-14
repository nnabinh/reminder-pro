import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text) => {
    const action = {
	type: ADD_REMINDER,
	text
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

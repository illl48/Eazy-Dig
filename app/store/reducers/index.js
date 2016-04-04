import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import feedbackReducer from './feedback_reducer';
import eventsReducer from './events_reducer';
import modalReducer from './modal_reducer';

import searchReducer from './search_reducer';
import queryReducer from './query_reducer';

import { routeReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	auth: authReducer,
	feedback: feedbackReducer,
    events: eventsReducer,
	routing: routeReducer,
    form: formReducer,
    showModal: modalReducer,
    search: searchReducer,
    query: queryReducer
});

export default rootReducer;

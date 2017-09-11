/**
 * Created by Bien on 2017-09-11.
 */
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
    }

    return state;
}
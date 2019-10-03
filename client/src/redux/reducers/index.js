import {
    MYPRODUCT,
    COMMUNITY,
    CAMPAIGNVIDEO,
    MARKETINGANDSALES,
    REWARDSANDBUDGETS,
    CAMPAIGNCONTENT,
    PRODUCTION,
    LOGISTICSANDVAT,
    CUSTOMERSERVICE,
    CAMPAIGNLAUNCH
} from '../actions/types'

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function todos(state = initialState, action) {
    switch (action) {
        case MYPRODUCT:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]

        case COMMUNITY:
            return state.filter(todo =>
                todo.id !== action.id
            )

        case CAMPAIGNVIDEO:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, text: action.text } :
                    todo
            )

        case MARKETINGANDSALES:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, completed: !todo.completed } :
                    todo
            )

        case REWARDSANDBUDGETS:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        case CAMPAIGNCONTENT:
            return state.filter(todo => todo.completed === false)


        case PRODUCTION:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        case LOGISTICSANDVAT:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        case CUSTOMERSERVICE:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        case CAMPAIGNLAUNCH:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))

        default:
            return state
    }
}

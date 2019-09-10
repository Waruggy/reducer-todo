const reducer (state, action) => {
    if (action.type === 'CHANGE_NAME') {
        return{}
    } else if (action.type === 'CHANGE_RACE') {
        return{}
    } else if (action.type === 'CHANGE_CLASS'){
        return{}
    } else{
    return state;
    }
    
    switch(action.type) {
        case  'CHANGE_NAME': 
            return{}
        
    }
}

const currentState = {
    name: 'Name',
    race: 'Race',
    class: 'Class' 
}

const action = {
    type: 'CHANGE_NAME',
    payload: 'Drizzt'
}

const action = {
    type: 'CHANGE_RACE',
    payload: 'Drow'
}

const action = {
    type: 'CHANGE_CLASS',
    payload: 'Ranger'
}

const newState ={
    name: 'Drizzt',
    race: 'Drow',
    class: 'Ranger'
}
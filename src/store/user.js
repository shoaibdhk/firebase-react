import firestore from '../firebase';
export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';

const initState = {
  lists: []
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        lists: [...payload]
      };
    case ADD_USER:
      return {
        ...state
      };
    case REMOVE_USER:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== payload)
      };
    case UPDATE_USER:
      return {};
    default:
      return state;
  }
};
export default reducer;
export const getUsers = lists => dispatch => {
  firestore
    .collection('user')
    .orderBy('fullname')
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          let data = change.doc.data();
          data['id'] = change.doc.id;
          lists.unshift(data);
        } else if (change.type === 'removed') {
          lists = lists.filter(list => list.id !== change.doc.id);
        }
        dispatch({ type: GET_USERS, payload: lists });
      });
    });
};

export const addUser = user => dispatch => {
  const { fullname, email } = user;

  firestore
    .collection('user')
    .add({ fullname, email })
    .then(doc => {
      user['id'] = doc.id;
      dispatch({ type: ADD_USER });
    })
    .catch(e => console.log(e));
};
export const removeUser = id => dispatch => {
  firestore
    .collection('user')
    .doc(id)
    .delete();
  dispatch({ type: REMOVE_USER, payload: id });
};
export const updateUser = user => ({ type: UPDATE_USER, payload: user });

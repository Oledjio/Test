import React from 'react';
import ListItem from './ListItem';
import UsersData from '../data/UsersData';
import { useState } from 'react';


function List(){
    const [users, setUsers] = useState(UsersData);
    function deleteUser(userId){
        console.log(users);
        setUsers(users.filter(gandon=> gandon.id !==userId));
    }
    return(
        <ul className='list'>
            {users.map((userInfo) => <ListItem user={userInfo} deleteUser={deleteUser}/>)}
        </ul>
    )
}

export default List;

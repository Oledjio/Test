import React from 'react';






function ListItem(props) {
    return (
        <li className='list__item'>
            <p className='list__userinfo_marg_bot'>{props.user.name}</p>
            <p className='list__userinfo_marg_bot'>{props.user.mobile}</p>
            <p className='list__userinfo_marg_bot'>{props.user.mail}</p>
            <p className='list__userinfo_marg_bot'>{props.user.country}</p>
            <p className='list__userinfo_marg_bot'>{props.user.age}</p>
            <div className="list__btn">


                <button className='list__edit'>Изменить</button>
                <button className='list__remove' onClick={() => props.deleteUser(props.user.id)}>Удалить</button>
            </div>
        </li>
    );
}



export default ListItem;
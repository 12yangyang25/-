import React from "react";

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b style={{
                cursor: `pointer`,
                color: user.active ? 'green' : 'black'
            }}

                onClick={() => onToggle(user.id)}>
                {user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {users.map(user => ( //users의 요소 하나하나를 user에 담아서
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} /> //User의 매개변수 user에 {user}를 대입?? 
            ))}
        </div>
    );
}

export default UserList;
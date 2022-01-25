import React from "react";

function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList(){
    const users = [
        {
            id: 1,
            username: 'DDIONG',
            email: 'ddd.gmail.com'
        },
        {
            id: 2,
            username: 'KYEOM',
            email: 'kkk.gmail.com'
        },
        {
            id: 3,
            username: 'MOOMIN',
            email: 'mmm.gmail.com'
        }
    ];

    return (
        <div>
            <div>
            <User user={users[0]} /> 
             {/*User 컴포넌트의 매개변수 객체 user로 user(배열)의 값을 전달  */}
            <User user={users[1]} />
            <User user={users[2]} />
            </div>
        </div>
    );
}

export default UserList;
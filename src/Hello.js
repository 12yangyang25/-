import React from 'react';

function Hello({color, name, isSpecial}){ //props 객체의 멤버 이름을 적어줌으로써 
                                          //props.어쩌구로 적지 않아도 됨
    return <div style = {{color}}> 
    {isSpecial && <b>*</b>}
    {name} 안녕하세요
    </div>
}

Hello.defaultProps ={
    name : '이름없음'
}

export default Hello;
import React, { useState } from "react";

function Counter(){

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1); //setState라는 함수에 파라미터로 함수를 넘겨주면
                                                 //이전 값을 넣어주는 걸로 개발이 됨?
                                                 //prevNuber => prevNumber + 1 자체가 임의로 정의한 함수
                                                 //따라서 변수 명을 뭐로 쓰던 상관 없음
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter
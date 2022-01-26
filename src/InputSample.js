import React, { useState, useRef } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({ //객체 형태의 상태를 관리,
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    // 그냥 inputs.name 반복해서 쓰는거 싫어서, 
    // 단순히 짧게 쓰기 
    const { name, nickname } = inputs;  //*질문*: setInputs에서 복사본을 쓰기 위해 
    //        inputs의 현재 상태를 비구조화 할당하는 것??

    const onChange = (e) => {
        const { value, name } = e.target; //name과 value 추출, *질문*: 여기서 value는 e.target이 자동으로 받아오는 값?
        setInputs({
            ...inputs, name: value //name(name이거나 nickname이거나) 키를 가진 값을 value(변수)로 설정
            //객체 수정할 때, 직접 수정 X
            //새로운 객체를 만들어 변화를 주고 이를 상태로 사용
            //기존 상태를 직접 수정하면 상태의 변화를 감지할 수 없어,
            //값을 바꿔도 리렌더링이 되지 않음 => 불변성을 지켜야 업데이트 성능 최적화
        })
    }
    // 이유 1. coding style 
    // 이유 2. scoped variable 
    //      변수마다 적용되는 범위가
    //      global, 함수안에 있는 변수, 
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange}
                value={name}
                ref={nameInput} />
            {/* *질문*: setInputs로 변경된 key값이 변수로서 value에 설정?? */}

            {/* input 태그의 name 속성은 e.target.name ,
                value 속성은 e.target.value */}
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />


            <button onClick={onReset}>초기화</button>

            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
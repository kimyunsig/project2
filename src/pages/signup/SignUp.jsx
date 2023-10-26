import { useState } from "react";
import axios from 'axios'
import "./signUp.css";
import FormInput from "../../components/formInput/FormInput";

const SignUp = () => {
    const [values, setValues] = useState({
        //2023. 10 19 수정 -HYH
        // DATA 변수 이름 수정
        // 이하  inputs 안에 있는 변수 의 "name : 값도 전부 변경"

        user_Num: null,
        user_Id: "",
        user_Pw: "",
        user_Pwcheck: "",
        user_Name: "",
        user_Phone: "",
    });

    const inputs = [
        {
            
            name: "user_Id",
            type: "text",
            placeholder: "아이디를 입력하세요",
            errorMessage:
                "아이디는 3~16글자이고, 특수문자는 사용할 수 없습니다!",
            label: "아이디",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            
            name: "user_Pw",
            type: "password",
            placeholder: "비밀번호를 입력하세요",
            errorMessage:
                "비밀번호는 8~20글자이고, 최소 1개의 글자, 숫자, 특수문자를 사용해야 합니다!",
            label: "비밀번호",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            
            name: "user_Pwcheck",
            type: "password",
            placeholder: "비밀번호를 다시 한번 입력하세요",
            errorMessage: "비밀번호가 일치하지 않습니다",
            label: "비밀번호 확인",
            pattern: values.user_Pw,
            required: true,
        },
        {
            
            name: "user_Name",
            type: "text",
            placeholder: "이름을 입력하세요",
            label: "이름",
        },
        {
            
            name: "user_Phone",
            type: "number",
            placeholder: "전화번호를 입력하세요",
            errorMessage: "전화번호는 숫자여야 합니다",
            label: "연락처",
            pattern: `/^[0-9]+$/`,
            required: true,
        },

    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // 2023.10.19 -HYH
        // http://localhost:3001/signup 주소로 수정
        axios.post('http://localhost:3001/signup', { values })
            .then(response =>{ console.dir(response.data.message);
                if (response.data.message == 0)
                {
                    alert('ID 가 중복 되었습니다');
                }
                else if(response.data.message == 1)
                {
                    alert('회원가입 완료!');
                    var link = 'http://localhost:3001/';
                    window.open(link);
                }
            })
            .catch(err => console.log(err))
        console.log(values);
        
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <h1 className="signUpH1">가입하기</h1>
                {/* {inputs.map((input) => (
                    <FormInput
                        key={input.user_Num}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))} */}

                {inputs.map((input, index) => (
    <FormInput
        key={index}  // 각 요소에 고유한 키를 설정
        {...input}
        value={values[input.name]}
        onChange={onChange}
    />
))}

                <button className="signUpbutton">제출하기</button>
            </form>
        </div>
    );
};

export default SignUp;
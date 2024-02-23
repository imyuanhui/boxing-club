/*import React from 'react';
import { IoMdClose } from "react-icons/io";

import userData from '../../constants/userData';
import Button from '../Button/Button';
import LoginCard from "./LoginCard";

const SignupCard = () => {
    const [userID, setUserID] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = React.useState();

    const handleSignup = () => {
        if (isIdExist(identifier)) {
            alert("用户已存在");
        } else {
            if (!isPasswordMatch(identifier,password)) {
                alert("密码错误，请重新输入");
            } else {
                console.log("成功登录", identifier);
            }
        }
    };

    const isIdExist = (identifier) => {
        return userData.some(user => user.email === identifier || user.tel === identifier || user.userID === identifier);
    };

    

}*/
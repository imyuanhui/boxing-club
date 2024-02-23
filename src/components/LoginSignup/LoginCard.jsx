/*import React from 'react';
import { IoMdClose } from "react-icons/io";
import Button from '../Button/Button';
import userData from '../../constants/userData';
import './LoginSignupCard.css';
import SignupCard from './SignupCard'

const LoginCard = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);


    const handleLogin = () => {
        if (!isIdExist(identifier)) {
            setShowSignup(true);
            console.log("用户不存在，跳转至注册界面");
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

    const isPasswordMatch = (identifier, password) => {
        const user = userData.find(user => user.email === identifier || user.tel === identifier || user.userID === identifier);
        return user && user.password === password;
    };


    return (
        showSignup ? <SignupCard /> :
        <div className='app_loginCard'>
            <div className='app_card-container'>
                <IoMdClose />
                <div className='app_card-input'>
                    <input type='text' 
                            placeholder='请输入邮箱/手机号/用户名' 
                            value={identifier} 
                            onChange={(e) => setIdentifier(e.target.value)} 
                            required 
                    />
                    <input type='password' 
                        placeholder='请输入密码' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <Button text="登录" onClick={handleLogin}/>
            </div>
        </div>
    ); 
}

export default LoginCard;*/
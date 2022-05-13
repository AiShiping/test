import React, { useEffect, useState } from 'react';
import "../style/login.css"
import { useNavigate } from 'react-router-dom'


const users = [
    {
        username: 'wang',
        password: '123456'
    },
    {
        username: 'wang2',
        password: '1234562'
    }
]

function Login() {
    //登陆成功跳转
    const navigate = useNavigate();
    //用户名
    const [username, setUsername] = useState('');
    //密码
    const [password, setPassword] = useState('');
    //按钮点击次数
    const [click, setClick] = useState(0);
    //登录验证账号密码
    const checkUser = () => {
        setClick(click+1)
        const usercheck = users.find(user => (user.username === username && user.password === password));
        if (username.length == 0) {
            alert("用户名不能为空")

        } else if (password == 0) {
            alert("密码不能为空")
        }
        else {
            var j = /^[0-9a-zA-Z]+$/
            if (j.test(username)) {
                if (usercheck) {
                    navigate('/form')
                } else {
                    alert("账号密码错误！")
                }
            } else {
                alert("账号请输入字母或数字")
            }
        }
    }
    //登录滑块验证
    function buttonSlide() {

        var bx = 0;
        //获取到滑块盒子的宽度
        var sliderOffsetW = document.getElementById("slider").scrollWidth;
        //获取到按钮
        var btn = document.getElementById("slider-button");
        //获取到按钮的自身宽度
        var buttonOffsetW = btn.offsetWidth;
        //获取文字
        var text = document.getElementById("text");
        //获取遮罩层
        var masklayer = document.getElementById("masklayer");
        btn.onmousedown = function () {
            //鼠标按下后显示滑动中...
            text.innerText = "滑动中..."
            btn.onmousemove = function (e) {
                if (bx + buttonOffsetW >= sliderOffsetW) {
                    text.innerText = "验证成功"
                    btn.onmousedown = null;
                    btn.onmousemove = null;
                    document.onmouseup = null;
                    document.getElementById("Slider").innerHTML = ""


                } else {
                    bx += e.offsetX;
                    btn.style.left = bx + "px";
                    masklayer.style.width = bx + "px";
                }
            }
            document.onmouseup = function () {
                if (bx + buttonOffsetW < sliderOffsetW) {
                    btn.style.left = 0;
                    bx = 0;
                    masklayer.style.width = 0;
                    text.innerText = "请向右滑动滑块"
                    document.onmouseup = null;
                    text.innerText = "验证失败"
                    btn.onmousemove = null;
                }
            }



        }

    }

    return (
        <div id="loginform">
            <label id="labelu">
                用户名:
                <input
                    id="inputu"
                    placeholder='请输入账号'
                    type="text"
                    name="username"
                    value={username}
                    onChange={event => setUsername(event.target.value)}

                />
            </label>
            <br /><br /><br /><br />
            <label id="labelp">
                密  码:
                <input
                    id="inputp"
                    placeholder='请输入密码'
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
            </label>
            <br />
            <div id="Slider" style={{opacity: click < 4 || click == 0 ? "0" : "1" }}>
                <div id='slider'>
                    <div id="masklayer"></div>
                    <div id="text" >登陆验证</div>
                    <div id="slider-button" onMouseDownCapture={buttonSlide} > &gt;&gt;&gt;</div>
                </div>
            </div>
            <button id="login-button" type='primary' onClick={checkUser}>
                登 录
            </button>
        </div>

    )
}

export default Login
import { useEffect, useState } from 'react'
import '../style/addpage.css'
import axios from 'axios'


function Addpage() {


    const [name, setName] = useState([])

    const [age, setAge] = useState([])

    const [sex, setSex] = useState([])

    const [number, setNumber] = useState([])

    const [department, setDepartment] = useState([])

    const [detail, setDetail] = useState([])


    function add() {
        if (name == "" || age == "" || sex == "" || number == "" || department == "") {
            alert("需要填入全部信息")
        } else {
            alert("添加成功！")
            axios({
                url: 'http://localhost:3001/data',
                method: "post",
                data: {
                    name: name,
                    age: age,
                    sex: sex,
                    number: number,
                    department: department,
                    detail: detail
                }
            })
        }

    }

    return (

        <div id='form'>
            <label >姓 名 :</label>
            <input
                id="i"
                type="text"
                name="name"
                placeholder="请输入用户名"
                onChange={event => setName(event.target.value)}
            >
            </input>
            <p style={{ color: 'rgb(131, 96, 55)', opacity: name.length < 4 || name == "" ? "0" : "1" }}>
                请输入长度小于五的名字
            </p>


            <label >年 龄 :</label>
            <input
                id="i"
                type="text"
                name="age"
                placeholder="请输入年龄"
                onChange={event => setAge(event.target.value)}
            >
            </input>
            <p style={{ color: 'rgb(131, 96, 55)', opacity: age > 18 && age < 70 || age == "" ? "0" : "1" }}>
                请输入真实年龄
            </p>

            <label >性 别 :</label>
            <input
                id="i"
                type="text"
                name="sex"
                placeholder="请输入性别"
                onChange={event => setSex(event.target.value)}
            >
            </input>
            <p style={{ color: 'rgb(131, 96, 55)', opacity: sex == "男" || sex == "女" || sex == "" ? "0" : "1" }}>
                请输入男 或 女
            </p>

            <label >电 话 :</label>
            <input
                id="i"
                type="text"
                name="number"
                placeholder="请输入电话(11位)"
                onChange={event => setNumber(event.target.value)}
            >
            </input>
            <p style={{ color: 'rgb(131, 96, 55)', opacity: number.length < 12 || number == "" ? "0" : "1" }}>
                请输入11位电话号
            </p>

            <label > 部 门 :</label>
            <input
                id="i"
                type="text"
                name="department"
                placeholder="请输入部门"
                onChange={event => setDepartment(event.target.value)}
            >
            </input>
            <p style={{ color: 'rgb(131, 96, 55)', opacity: department == 'D1' || department == 'D2' || department == 'D3' || department == '' ? "0" : "1" }}>
                请填入 D1 D2 或 D3
            </p>

            <label >详 情 :</label>
            <input
                id="i"
                type="text"
                name="detail"
                placeholder="请输入详情"
                onChange={event => setDetail(event.target.value)}

            >
            </input><br/>

            <button
                id="add-button"
                type="submit"
                value="Submit"
                onClick={add}
            >

                添加员工
            </button >


        </div >

    )
}
export default Addpage

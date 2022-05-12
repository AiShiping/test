import "../style/form.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from './modal'
import { useNavigate } from 'react-router-dom'


function Form() {

  //获取列表
  const [list, setList] = useState([])

  //模态框获取数据
  const [item, setItem] = useState({})

  //模态框开关
  const [modalVisible, setModalVisible] = useState(false);

  //高亮
  const [d, setD] = useState([])
  const [d1, setD1] = useState([])
  const [d2, setD2] = useState([])
  const [d3, setD3] = useState([])

  //获取列表
  const loadList = async () => {
    const res = await axios.get('http://localhost:3001/data')
    setList(res.data)
  }
  useEffect(() => {
    loadList()
  }, [])

  //删除
  const del = async (id) => {
    await axios.delete(`http://localhost:3001/data/${id}`)
    loadList()
  }
  //查找(按部门查找）
  const select = async (D1, D2, D3) => {
    const res = await axios.get(`http://localhost:3001/data/?department=${D1}&department=${D2}&department=${D3}`)
    setList(res.data)
  }
  //详情modal
  const departmentPersonModalDetail = (
    <div className="pop-up">
      <span onClick={() => setModalVisible(false)} className="closeButton">x</span>
      <div>个人详情</div>
      {item.detail}
    </div>
  )
  const modalConfig = {
    visible: modalVisible,
    closeModal: () => {
      setModalVisible(false);
    }
  }



  //增加
  const navigate = useNavigate();
  const add = () => {
    navigate('/addpage')
  }

  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-button">部 门</button>
        <div className="dropdown-content" >
          <a style={{backgroundColor:d==1?"rgba(211, 154, 89, 0.733)":"#dee9dfcb"}} onClick={() => {{select("D1", "D2", "D3")};setD(1);setD1(0);setD2(0);setD3(0)}}>all</a>
          <a style={{backgroundColor:d1==1?"rgba(211, 154, 89, 0.733)":"#dee9dfcb"}} onClick={() => {{select("D1")};setD(0);setD1(1);setD2(0);setD3(0)}}>D 1</a>
          <a style={{backgroundColor:d2==1?"rgba(211, 154, 89, 0.733)":"#dee9dfcb"}} onClick={() => {{select("D2")};setD(0);setD1(0);setD2(1);setD3(0)}}>D 2</a>
          <a style={{backgroundColor:d3==1?"rgba(211, 154, 89, 0.733)":"#dee9dfcb"}} onClick={() => {{select("D3")};setD(0);setD1(0);setD2(0);setD3(1)}}>D 3</a>
        </div>
      </div>
      <div>
        <button className="add-button" onClick={add}>添加员工</button>
      </div>
      <div>
        <table id="Table">
          <thead>
            <tr>
              <th>用户名</th>
              <th>年龄</th>
              <th>性别</th>
              <th>电话</th>
              <th>部门</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>

            {list.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.sex}</td>
                  <td>{data.number}</td>
                  <td>{data.department}</td>
                  <td>
                    <button
                      id="details"
                      onClick={() => {
                        setModalVisible(true);
                        setItem(data)
                      }}>
                      详情
                    </button>

                    |<button id="delete" onClick={() => del(data.id)}>删除</button>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Modal {...modalConfig}>
          {departmentPersonModalDetail}
        </Modal>
      </div>
    </div>
  )
}


export default Form

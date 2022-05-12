import React from 'react'
import '../style/modal.css'
import { createPortal } from 'react-dom'


const Modal = (props) => {

    const { children, visible, closeModal } = props
    function handleClick(event) {
        // 点击蒙层本身时关闭模态框，点击模态框的内容时不关闭
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    const modal = createPortal(
        <div className="modal" onClick={handleClick}>
            {children}
        </div>,
        document.body
    )

    return (
        <div>
            {visible && modal}
        </div>
    )
}
export default Modal
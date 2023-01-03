import React from 'react'
import {HiX} from 'react-icons/hi'
const Modal = ({modal, setModal, setTodos}) => {
  const handleSure = () => {
    setModal(false);
    setTodos([]);
  }
  return (
    <div className='modal-container' style={modal ?  {animation: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'} : {animation: 'fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'}}>
        <div className='overlay' style={modal ?  {animation: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'} : {animation: 'fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'}}> 
            <div className='modal-content'style={modal ?  {animation: 'scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'} : {animation: 'scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'}}>
                <div className='modal-header'>
                    <h3>Alert❗</h3>
                    <HiX size={24} role="button" onClick={() => setModal(false)}/>
                </div>
                <p>Are you sure to clear all your to do?</p>
                <button className='btn-sure' onClick={handleSure}>Sure</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
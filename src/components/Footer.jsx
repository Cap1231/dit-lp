import React, {useState} from 'react'
import './Footer.scss'

const Footer = () => {

  return (
    <div className="footer">
      <div className='item'>
        <a href="#">プライバシーポリシー</a>
      </div>
      <div className='copyright'>
        copyright©2007-2021 Develop IT Co.,Ltd. all rights reserved.<br/>
      </div>
    </div>
  )
}
export default Footer
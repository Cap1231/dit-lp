import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className="footer">
      <div className='item'>
        <Link to="#" >プライバシーポリシー</Link>
      </div>
      <div className='copyright'>
        copyright©2007-2021 Develop IT Co.,Ltd. all rights reserved.<br/>
      </div>
    </div>
  )
}
export default Footer
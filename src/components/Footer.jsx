import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const foundationYear = 2007

  return (
    <div className="footer">
      <div className='item'>
        <Link to="./privacy-policy">プライバシーポリシー</Link>
      </div>
      <div className='copyright'>
        Copyright © {foundationYear} - {currentYear} Develop IT Co.,Ltd. all rights reserved.<br/>
      </div>
    </div>
  )
}
export default Footer
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.scss'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const Header = () => {
  const isPC = useMediaQuery('(min-width:768px)')
  const [isSideBarOpen, SetIsSideBarOpen] = useState(false)
  const navItems = [
    {name: '会社概要', to: '/overview'},
    {name: '企業理念', to: '/mission'},
    // {name: 'サービス/製品一覧', to: '/'},
    {name: '採用情報', to: '/recruitment'},
    {name: 'お問い合わせ', to: '/'},
  ]

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    SetIsSideBarOpen(open);
  }

  // SP用のサイドバー
  const list = () => (
    <div
      className="sidebar"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem className='item' key={index}>
            <ListItemText>
              <Link to={item.to} className="nav-link">{item.name}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <div className='header'>
      <AppBar position="static" className='appbar'>
        <Toolbar className="navbar">
          <h1 className="navbar-brand">
            <Link to="/" >Develop IT</Link>
          </h1>
          { isPC ? (
            <Typography variant="h6" className="nav-item">
              {navItems.map((item) => (
                <Link to={item.to} className="nav-link">{item.name}</Link>
              ))}
            </Typography>
          ) : (
            <React.Fragment key='right'>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='right'
                open={isSideBarOpen}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header

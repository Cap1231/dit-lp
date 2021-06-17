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
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Header = () => {
  const isPC = useMediaQuery('(min-width:768px)')
  const [isSideBarOpen, SetIsSideBarOpen] = useState(false)

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
        <ListItem href="/">
          <ListItemText primary="会社概要"/>
        </ListItem>
        <ListItem href="/">
          <ListItemText primary="企業理念"/>
        </ListItem>
        <ListItem href="/">
          <ListItemText primary="サービス/製品一覧"/>
        </ListItem>
        <ListItem href="/">
          <ListItemText primary="採用情報"/>
        </ListItem>
        <ListItem href="/">
          <ListItemText primary="お問い合わせ"/>
        </ListItem>
      </List>
      <Divider />
    </div>
  )

  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar">
          <h1 className="navbar-brand">
            Develop IT
          </h1>
          { isPC ? (
            <Typography variant="h6" className="nav-item">
              <Link to="/" className="nav-link">会社概要</Link>
              <Link to="/" className="nav-link">企業理念</Link>
              <Link to="/" className="nav-link">サービス/製品一覧</Link>
              <Link to="/" className="nav-link">採用情報</Link>
              <Link to="/" className="nav-link">お問い合わせ</Link>
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

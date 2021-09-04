import React from "react"
import './Contact.scss'
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import BlurOnIcon from "@material-ui/icons/BlurOn"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "@material-ui/core/Container"

const Contact = () => {
  const contacts = [
    {name: 'Tel', value: '03-6869-3445'},
    {name: 'Email', value: 'info@developit.jp'},
  ]
  return (
    <Container maxWidth="md" className="contact">
      <div className="content">
        <h2>お問い合わせ</h2>
        <p>弊社製品についてのお問い合わせは、こちらで受付しております。</p>
      </div>

      <div className='content'>
        <h3>電話・Email</h3>
        <Grid item xs={12} md={10}>
          <List dense={false}>
            {contacts.map((contact, index) => (
              <ListItem key={index}>
                <ListItemIcon className='list-item-head'>
                  <BlurOnIcon style={{ color: '#58A6F2'}}/>
                  <span>{contact.name}</span>
                </ListItemIcon>
                <ListItemText className="list-item-body">
                  {contact.name === 'Email' ? (
                    <a href={`mailto:${contact.value}`}>{contact.value}</a>
                  ) : (
                    contact.value
                  )}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </div>
    </Container>
  )
}

export default Contact

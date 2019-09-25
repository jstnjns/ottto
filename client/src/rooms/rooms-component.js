import React from 'react'
import { Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default ({ rooms }) =>
  <div>
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
          >
            Rooms
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>

    <Container>
      <Box my={2}>
        <List>
          {rooms.map((room) =>
            <ListItem
              key={room._id}
              component={Link}
              to={`/rooms/${room._id}`}
              button
            >
              <ListItemText primary={room.name} />
            </ListItem>
          )}
        </List>
      </Box>
    </Container>
  </div>

import React from 'react'
import { Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default ({ room }) =>
  <div className="room">
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            component={Link}
            to="/"
          >
            <ChevronLeftIcon />
          </IconButton>

          <Typography
            variant="h6"
            color="inherit"
          >
            {room.name}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>

    <Container>
      <Box my={2}>
        <Grid container spacing={2}>
          {room.modules.map((module) =>
            <Grid
              item
              xs={3}
              key={module._id}
            >
              <Card>
                <CardContent>
                  <Typography
                    component={Link}
                    to={`/modules/${module._id}`}
                  >
                    {module.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  </div>

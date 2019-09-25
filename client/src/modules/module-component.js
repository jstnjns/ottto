import React from 'react'
import { Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Attribute from '../attributes'


export default ({ module, onChange }) =>
  <div className='module'>
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            component={Link}
            to={`/rooms/${module.group._id}`}
          >
             <ChevronLeftIcon />
          </IconButton>

          <Typography
            variant='h6'
            color='inherit'
          >
            {module.name}
            {' '}
            ({module.type.name})
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>

    <Container>
      <Box my={2}>
        <Grid container spacing={2} alignItems="stretch">
          {module.attributes.map((attribute) =>
            <Grid item xs={3} key={attribute._id}>
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <Attribute
                    module={module}
                    attribute={attribute}
                  />
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  </div>

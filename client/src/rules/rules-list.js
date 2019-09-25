import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'


class RulesList extends Component {
  render() {
    return (
      <List>
        {this.props.rules.map(this.renderRule.bind(this))}
      </List>
    )
  }

  renderRule(rule) {
    return (
      <ListItem
        key={rule._id}
        component={Link}
        to={`/rules/${rule._id}`}
        button
      >
        <ListItemText primary={rule.name} />
      </ListItem>
    )
  }
}


export default RulesList

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText } from '@material-ui/core/List';


class RulesList extends Component {
  render() {
    return (
      <List>
        {this.props.rules.map(this.renderRule.bind(this))}
      </List>
    )
  }

  renderRule(rule, key) {
    return (
      <ListItem key={key} button
        component={Link} to={`/rules/${rule.id}`}>
        <ListItemText primary={rule.name} />
      </ListItem>
    )
  }
}


export default RulesList

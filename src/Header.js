import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddLogForm from './AddLogForm'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  state = {
    selected: this.props.selected,
    formActive: false
  }

  handleMenuClick = (event) => {
    this.setState({selected: event.key})
  }

  activateForm = () => {
    this.setState({formActive: true})
  }

  deactivateForm = () => {
    this.setState({formActive: false})
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Home
            </Typography>
            <Button variant="outlined" color="secondary" onClick={this.activateForm}>
              Add
              {this.state.formActive && 
                <AddLogForm deactivateForm={this.deactivateForm}/>
              }
            </Button>
          </Toolbar>
        </AppBar>
      </div> 
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
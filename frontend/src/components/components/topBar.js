import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const styles = {
  topBar: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};


class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Readable
            </Typography>
            {this.props.categories.map((category) =>
              <Button key={ category.name } color="inherit">{ category.name }</Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default withStyles(styles)(TopBar);

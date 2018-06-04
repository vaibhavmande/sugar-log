import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class TabBar extends Component {
    constructor(props) {
        super();
        this.state = {
            value: props.selected
        }
    }

    render = () => {
        return (<Tabs
            value={this.state.value}
            indicatorColor="secondary"
            textColor="secondary"
            fullWidth
        >
            <Tab label="LIST" />
            <Tab label="GRAPH" />
        </Tabs>)
    }
}

export default TabBar
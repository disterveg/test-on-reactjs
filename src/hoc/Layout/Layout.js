import React, {Component} from 'react';
import './Layout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }

        this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    }

    toggleMenuHandler() {
        this.setState({
            menu: !this.state.menu
        });
    }

    render() {
        return (
            <div className="Layout">
                <Drawer 
                 isOpen={this.state.menu}
                 onClose={this.toggleMenuHandler}
                />

                <MenuToggle 
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>
            </div>
        );
    };
}

export default Layout;
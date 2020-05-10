import React, {Component} from 'react';
import './Layout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

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
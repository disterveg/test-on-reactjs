import React, {Component} from 'react';
import './Layout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
                 isAuth={this.props.isAuth}
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

function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
    };
};
  
const withConnect = connect(
    mapStateToProps
);

export default compose(
    withConnect
)(Layout);
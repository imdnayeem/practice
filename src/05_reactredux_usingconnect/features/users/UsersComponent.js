import React, { Component } from 'react';
import { connect } from 'react-redux';

// connect API usage has been demonstrated in 4 different ways below.
// Approach no. 3 is the preferred approach and hence it has been uncommented below.

// 2.
// import { bindActionCreators } from '@reduxjs/toolkit';

// 1. and 4.
// import { addUser } from './usersSlice';

// 2. and 3.
import { usersSlice } from './usersSlice'

import UserForm from './UserForm';

// Container Component
class UsersComponent extends Component {
    addUser(user) {
        let payload = {
            id: user.id,
            name: user.name,
            location: user.location
        }
        // 1.        
        // this.props.dispatch(addUser(payload));

        // 2.
        // this.props.actions.addUser(payload);

        // 3. and 4.
        this.props.addUser(payload);
    }

    render() {
        return (
            <div>
                <h1>{this.props.heading}</h1>
                <UserForm onAddUser={(u) => this.addUser(u)} />
                <ul>
                    {this.props.users.map(user =>
                        <li key={user.id}> {user.name}, {user.location} </li>
                    )}
                </ul>
            </div>);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users,
        heading: ownProps.heading
    };
}

/*
// 2.
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(usersSlice.actions, dispatch)
    };
}
*/

/*
// 4.
function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => { dispatch(addUser(user)); }
    };
}
*/

// 1.
// export default connect(mapStateToProps)(UsersComponent);

// 2.
// export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

// 3. Preferred approach
export default connect(mapStateToProps, usersSlice.actions)(UsersComponent);

// 4.
// export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

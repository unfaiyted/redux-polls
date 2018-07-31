import React from 'react';
import { NavLink } from 'react-router-dom'


class Nav extends React.Component {
    render() {
        const items = [{
            loc: 'Home',
            to: '/',
        }, {
            loc:'Leaderboard',
            to: '/leaderboard'
        }, {
           loc: 'Add Poll',
            to: '/add'
        }];
        return (
            <div className='nav'>
                <ul>
                    {
                        items.map((item) => {
                           return    <li key={item.loc}> <NavLink exact activeClassName='active' to={item.to}>
                                   {item.loc}
                           </NavLink></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default Nav;


import React from 'react'
import Profile from './Profile';
import { Link, Route, NavLink } from 'react-router-dom';

function Profiles() {
    const activeStyle = {
        background: 'black',
        color: 'white'
    }
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/jaeseok">
                        jaeseok
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong">
                        gildong
                    </NavLink>
                </li>
            </ul>
            <Route path="/profiles" exact render={() =>
                <div>사용자를 선택해주세요</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}

export default Profiles

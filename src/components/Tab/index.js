import React, { Component } from 'react'

import './index.less';

// NavLink  可以加激活样式  link 不行
import {NavLink} from 'react-router-dom';

//底部tab切换
class Tab extends Component {
  render() {
    return (
      <nav className='footer'>
        <NavLink to={'/'} activeClassName='seleted'><span>首页</span></NavLink>
        <NavLink to={'/lesson'} activeClassName='seleted'><span>课程</span></NavLink>
        <NavLink to={'/profile'} activeClassName='seleted'><span>个人中心</span></NavLink>
      </nav>
    );
  }
}
export default Tab

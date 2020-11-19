import React from 'react'
import {compose} from 'redux';
import { useHistory} from 'react-router-dom';
import styles from './AppBar.module.css'
import {withAuth} from '../../components/Authentication/Authentication'

const AppBar = ({logout, isAuthenticated}) => {
    const history = useHistory();
    const handleLogout = async () => {

        const result = await logout();
        if(result) history.push('/login');

    }

    return (
        <div className={styles.container}>
            <a className={styles.active} href="#"><i className="fa fa-home"></i></a> 
            <a href="#"></a> 
            <a href="#"></a> 
            <a href="#"></a>
            <a href="#">{isAuthenticated &&( <i className="fa fa-sign-out" onClick={handleLogout}></i>)}</a> 
      </div>
    )
}

export default compose(withAuth)(AppBar)

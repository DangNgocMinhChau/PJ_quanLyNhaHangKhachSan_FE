import React from 'react';
import Aboute from '../components/Aboute';
import Home from '../components/Home';
import NotFound from '../pages/HomePage/404';
import PageQuanLyNhaHang from '../pages/quanlynhahang/pageQuanLyNhaHang';
import Login from '../pages/users/login';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/quanlynhahang',
        exact: true,
        main: ({match,location}) => <PageQuanLyNhaHang location={location} match={match}/>
    },
    {
        path: '/quanlynhahang/:id',
        exact: true,
        main: ({match}) => <Aboute  match={match}/>
    },
    {
        path: '/login',
        exact: true,
        main: ({ match, location }) =>
            <Login match={match} location={location} />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound/>
    }
]

export default routes;
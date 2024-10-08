import React from 'react';
import {Route, Redirect, Routes } from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {ADMIN_ROUTE} from "../utils/consts";
import {BASKET_ROUTE} from "../utils/consts";
import {SHOP_ROUTE} from "../utils/consts";
import {LOGIN_ROUTE} from "../utils/consts";
import {REGISTRATION_ROUTE} from "../utils/consts";
import {DEVICE_ROUTE} from "../utils/consts";
import Admin from '../pages/Admin';
import Basket from '../pages/Basket';
import Shop from '../pages/Shop';
import Auth from '../pages/Auth';
import DevicePage from '../pages/DevicePage';


const AppRouter = () => {
    const isAuth = false
    return (
      
        <Routes>
         { /* {isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={element}/>
            )}    */}
            <Route path={ADMIN_ROUTE} element={<Admin />} />
            <Route path={BASKET_ROUTE} element={<Basket />} />
            <Route path={SHOP_ROUTE} element={<Shop />} />
            <Route path={LOGIN_ROUTE} element={<Auth />} />
            <Route path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route path={DEVICE_ROUTE} element={<DevicePage />} />
        </Routes>
        
        
    );
};

export default AppRouter;
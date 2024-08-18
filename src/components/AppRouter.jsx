import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {publicRoutes} from "../routes";
import {INDEX_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user);
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path="*" element={<Navigate to={INDEX_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import CreatePerson from "../screens/createPerson/CreatePerson";
import UpdatePerson from "../screens/updatePerson/UpdatePerson";
import DeletePerson from "../screens/deletePerson/DeletePerson";
import ViewPersons from "../screens/viewPersons/ViewPersons";
import CreateCar from "../screens/createCar/CreateCar";
import UpdateCar from "../screens/updateCar/UpdateCar";
import DeleteCar from "../screens/deleteCar/DeleteCar";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path ="/" exact />
            <Route component = { Login } path="/login" />
            <Route component = { CreatePerson } path="/createPerson" />
            <Route component = { UpdatePerson } path="/updatePerson/:id" />
            <Route component = { DeletePerson } path="/deletePerson"/>
            <Route component = { ViewPersons } path="/viewPersons" />
            <Route component = { CreateCar } path="/createCar" />
            <Route component = { UpdateCar } path="/updateCar/:id" />
            <Route component = { DeleteCar } path="/deleteCar" />
        </BrowserRouter>
    );
}
export default AppRoutes;
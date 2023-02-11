import { Component, lazy } from 'solid-js';
import {Routes, Route} from '@solidjs/router'
import Nav from './components/Nav/Nav';

const Home = lazy(() => import("./pages/Home/Home"))
const User = lazy(() => import("./pages/User/User"))
const Counter = lazy(() => import("./components/Counter/Counter"))


const App: Component = () => {
 return (
  <div>
    <Nav />
  <Routes>
    <Route path="/" component={Home}></Route>
    <Route path={["log-in", "signup"]} element={<h1>Welcome to Login/Signup page</h1>}></Route>
    <Route path="/users" component={User}></Route>
    <Route path="/counter" component={Counter}></Route>
 </Routes>
 </div>
 )
};

export default App;

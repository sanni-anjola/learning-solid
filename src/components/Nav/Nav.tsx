import { Component } from "solid-js";
import { A } from "@solidjs/router";
import styles from "./Nav.module.css"

const Nav: Component = () => {
  return (
    <div class={styles.navigation}>
      <A href="/">Home</A>
      <A href="/user">User</A>
      <A href="/counter">Counter</A>
      <A href="/log-in">Log in</A>
      <A href="/signup">Signup</A>
    </div>
  );
};

export default Nav;

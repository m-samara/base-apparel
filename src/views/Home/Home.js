import React from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Home.module.css";

class Home extends React.Component {
  render() {
    return (
      <div className={classes.home}>
        <Logo />
        <div className={classes.main_img}></div>
        <div className={classes.main_content}>
          <div className={classes.focused + " " + classes.m_50_10}>
            WE'RE COMING SOON
          </div>
          <div className={classes.description + " " + classes.m_50_10}>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </div>
          <div className={classes.m_50_10}>
            <div className={classes.search_container}>
              <input placeholder="Email Address" />
              <button>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

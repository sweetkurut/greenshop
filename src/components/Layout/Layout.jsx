import { NavLink } from "react-router-dom";
import styles from "./layout.module.sass";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";
import cn from "clsx";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <NavLink className={styles.logo} to={"/"}>
            <img
              src="/public/img/logo.png"
              alt="logo-header"
              className={styles.logo_img}
            />
            Greenshop
          </NavLink>
          <nav className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                cn(styles.nav_link, isActive && styles.active)
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                cn(styles.nav_link, isActive && styles.active)
              }
              to={"/shop"}
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                cn(styles.nav_link, isActive && styles.active)
              }
              to={"#"}
            >
              Plant Care
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                cn(styles.nav_link, isActive && styles.active)
              }
              to={"#"}
            >
              Blogs
            </NavLink>
          </nav>
          <div className={styles.cart_login}>
            <div className={styles.wrapIcon}>
              <LuShoppingCart className={styles.cart_icon} />
            </div>
            <button className={styles.login}>
              <IoIosLogIn className={styles.login_icon} />
              Login
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

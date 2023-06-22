import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        fugiat deleniti suscipit amet nemo quidem dolores tenetur! Sed quod,
        tempora quia a ea nobis nostrum, consectetur rerum quasi quo
        perferendis!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;

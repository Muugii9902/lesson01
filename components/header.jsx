const Header = () => {
  const styles = {
    color: "red ",
    display: "flex",
    height: "80px",
    backgroundcolor: "#333",
  };
  return (
    <header style={styles}>
      <img src="" alt="" />
      <div>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;

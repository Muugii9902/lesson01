const Header = () => {
  const styles = {
    color: "white ",
    display: "flex",
    height: "80px",
    background: "black",
    justifycontent: "center",
    alignitems: "center",
  };
  return (
    <header style={styles}>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png"
        alt=""
      />
      <div className="head">
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <h3 className="bg-slate-400">Home</h3>
        <h3>Service</h3>
        <h3>About</h3>
      </div>
    </header>
  );
};
export default Header;

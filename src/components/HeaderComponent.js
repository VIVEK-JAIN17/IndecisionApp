const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    </div>
);

export default Header;
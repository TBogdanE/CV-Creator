import "../styles/style.css";

export default function Header({ title }) {
  return (
    <>
      <header>
        <div id="header-title"> {title} </div>
      </header>
    </>
  );
}

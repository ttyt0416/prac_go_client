export default function Header() {
  return (
    <header className="w-full py-4 bg-accent">
      <section className="w-11/12 max-w-screen-xl mx-auto">
        <div className="navbar">
          <DrawerButton />
        </div>
      </section>
    </header>
  );
}

function DrawerButton() {
  return (
    <label htmlFor="ui-drawer" className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </label>
  );
}

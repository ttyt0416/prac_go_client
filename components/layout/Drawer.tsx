import { useTheme } from "next-themes";

export default function Drawer() {
  return (
    <div className="drawer-side">
      <label htmlFor="ui-drawer" className="drawer-overlay"></label>
      <ul className="menu w-80 bg-base-100">
        <ThemeDropdown />
      </ul>
    </div>
  );
}

function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const themeList = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  return (
    <>
      <span className="px-4 mt-4 text-2xl font-semibold">
        Current theme
        <br /> {theme}{" "}
      </span>
      <li>
        <div className="mt-4 dropdown dropdown-bottom cursor-default w-full">
          <label
            className="w-full py-2 px-4 font-semibold cursor-pointer"
            tabIndex={0}
          >
            Change Theme
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu shadow bg-base-100 rounded-box w-52 max-h-[50vh] overflow-y-auto flex-nowrap"
          >
            {themeList.map((item, index) => (
              <li key={index}>
                <a onClick={() => setTheme(item)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}

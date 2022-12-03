import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <p
      className="mt-40 w-full text-center cursor-pointer"
      onClick={() => setTheme("custom")}
    >
      HI
    </p>
  );
}

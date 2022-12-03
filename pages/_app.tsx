import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Screen from "../components/layout/Screen";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Screen>
        <Component {...pageProps} />
      </Screen>
    </ThemeProvider>
  );
}

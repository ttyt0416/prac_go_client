import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Body from "../components/layout/Body";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Body>
        <Component {...pageProps} />
      </Body>
    </ThemeProvider>
  );
}

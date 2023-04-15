import { FontProvider } from "@/app/providers/font-provider";
import "@/app/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FontProvider>
      <Component {...pageProps} />
    </FontProvider>
  );
}

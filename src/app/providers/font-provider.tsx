import { Poppins } from "next/font/google";

interface Properties {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export function FontProvider({ children }: Properties): JSX.Element {
  return (
    <main className={`${poppins.variable} font-sans`}>
      {children}
    </main>
  );
}

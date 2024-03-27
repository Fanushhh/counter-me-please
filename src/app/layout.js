import { SearchProvider } from "./contexts/SearchContext";
import "./globals.css";

export const metadata = {
  title: "Counter me please",
  description:
    "A next-gen application for finding the best tips and tricks on how to counter a League of Legends champion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
}

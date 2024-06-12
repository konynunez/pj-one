import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";

export const metadata = {
  title: "pj-one",
  description: "app homework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}

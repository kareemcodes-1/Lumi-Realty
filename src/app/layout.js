import "./globals.css";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Lumi Realty",
  description: "Real estate website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
           <div className="">
            {children}
            <Footer />
           </div>
        </body>
    </html>
  );
}

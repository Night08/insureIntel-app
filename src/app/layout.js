import { Inter } from "next/font/google";
import "./globals.css";

import SessionWrapper from "@/components/sessionWrapper/SessionWrapper";
import HomeWrapper from "@/components/homeWrapper/HomeWrapper";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InsureIntel: Smart Defence Against Insurance Fraud",
  description:
    "Welcome to InsureIntel, where we leverage advanced machine learning and real-time analytics to combat insurance fraud. Our platform offers cutting-edge fraud detection, real-time alerts, an intuitive user interface, and robust data security. InsureIntel is your ideal partner for enhancing fraud prevention and securing your claims process. Discover how InsureIntel can transform your fraud detection strategy.",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <HomeWrapper>
            <div className="container min-h-screen">{children}</div>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
          </HomeWrapper>
        </body>
      </html>
    </SessionWrapper>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freestyle",
  description:
    "Freestyle is a cloud platform in early development that replaces traditional databases with eternal javascript object persistence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript async />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <MantineProvider defaultColorScheme="dark">
            {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

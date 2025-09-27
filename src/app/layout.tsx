import { Roboto } from "next/font/google";
import '@/styles/globals.css'
import '@/styles/sintec.css'
import '@/styles/responsive.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sintec - Modern Business Template',
  description: 'Professional business template built with Next.js 15',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"
        />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
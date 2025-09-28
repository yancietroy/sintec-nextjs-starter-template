import { Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import '@/styles/globals.css'
import '@/styles/sintec.css'
import '@/styles/responsive.css'
import AOSProvider from '@/components/AOSProvider/AOSProvider'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sponge Pro Cleaning Services - Professional Cleaning in Winnipeg',
  description: 'Professional cleaning services in Winnipeg, MB. Residential and commercial cleaning solutions you can trust.',
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
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"
        />
      </head>
      <body className={roboto.className}>
        <AOSProvider>
          {children}
        </AOSProvider>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </body>
    </html>
  )
}
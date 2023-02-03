import './globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let darkMode;

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    darkMode = localStorage.getItem('key')
  }

  return (
    <html lang="en" className={darkMode === "true" ? "dark" : "light"}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='dark:bg-slate-900 dark:text-white'>
        <Header />
        {children}
      </body>
    </html>
  )
}

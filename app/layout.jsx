import '@/app/ui/global.css';
import {NavBar} from './ui/navBar'
import { lato } from './ui/fonts';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <div><NavBar /></div> 
        <div>{children}</div> 
        </body>
    </html>
  );
}

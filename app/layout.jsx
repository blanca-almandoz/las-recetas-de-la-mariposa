import '@/app/ui/global.css';
import {NavBar} from './ui/navBar'
import { TopLevelWrapper } from './ui/TopLevelWrapper';
import { lato } from './ui/fonts';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <div><NavBar /></div> 
        <TopLevelWrapper>
          {children}
        </TopLevelWrapper> 
        </body>
    </html>
  );
}

import '@/app/ui/global.css';
import { NavBar } from './ui/NavBar';
import { TopLevelWrapper } from './ui/topLevelWrapper/TopLevelWrapper';
import { montserrat } from './ui/fonts';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div><NavBar /></div> 
        <TopLevelWrapper>
          {children}
        </TopLevelWrapper> 
        </body>
    </html>
  );
}

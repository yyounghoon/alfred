import Header from '@/app/header';
import ThemeProvider from '@/app/ThemeProvider';
import { container, mainSection } from './layout.css';
import '@/styles/globals.css';
import '@/styles/main.scss';

export const metadata = {
  title: '윤영훈 블로그',
  description: '어서오세요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html>
        <body>
          <div className={container}>
            <Header />
            <section className={mainSection}>{children}</section>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}

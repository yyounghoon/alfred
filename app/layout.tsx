import Header from '@/components/@shared/Header';
import { container, mainSection } from './layout.css';

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
    <html>
      <body>
        <div className={container}>
          <Header />
          <section className={mainSection}>{children}</section>
        </div>
      </body>
    </html>
  );
}

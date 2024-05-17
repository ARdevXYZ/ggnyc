import '#/styles/globals.css';
// import { AddressBar } from '#/ui/address-bar';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import GA4Tracking from '../components/GA4Tracking';

export const metadata: Metadata = {
  title: {
    default: 'Green Green NYC',
    template: '%s | Green Green NYC',
  },
  description: 'Advocating for more green space in NYC and beyond',
  openGraph: {
    title: 'Next.js App Router Playground',
    description: 'Advocating for more green space in NYC and beyond',
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="green-cone overflow-y-scroll bg-gray-700 bg-[url('/ggnyc-glyphs.svg')] bg-[length:7rem] pb-36">
        <GA4Tracking />
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            {/* <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div> */}

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            <Byline className="fixed sm:hidden" />
          </div>
        </div>
      </body>
    </html>
  );
}

import './globals.css';
export const metadata = { title: 'Olympia Automotive Detailing', description: 'Professional Auto Detailing & Ceramic Coating Services — Mobile or In-Shop in Olympia, WA' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}

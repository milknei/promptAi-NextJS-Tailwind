import '@styles/globals.css';

import { Nav } from '@components/Nav';
import { Provider } from '@components/Provider';

export const metadata = {
  title: 'PromptAI',
  description: 'Discover and Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

import '@styles/globals.css';

export const metadata = {
  title: 'PromptAI',
  description: 'Discover and Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

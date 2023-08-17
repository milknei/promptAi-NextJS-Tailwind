import { Feed } from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptAI is a website where you can find, create, and share AI prompts. It helps you explore ideas for various
        things using the power of AI.
      </p>

      <Feed />
    </section>
  );
};

export default Home;

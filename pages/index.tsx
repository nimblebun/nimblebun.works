import Head from 'next/head';

import HomePageLayout from '@/layouts/HomePageLayout';

const HomePage = () => {
  const title = 'nimble bun works';
  const description = 'indie game developer group with members all around the world';
  return (
    <HomePageLayout>
      we are a passionate game developer group with a love for fun, story-rich,
      and retro experiences

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimblebun.works/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://nimblebun.works/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>

      <a
        className="ua-banner"
        href="https://twitter.com/Ukraine/status/1497294422354055171"
        target="_blank"
        rel="noopener noreferrer"
      />
    </HomePageLayout>
  );
};

export default HomePage;

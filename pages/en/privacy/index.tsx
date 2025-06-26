import Head from "next/head";

import TermsLayout from "@/layouts/TermsLayout";
import Privacy from "@/content/Privacy.mdx";

const PrivacyPage = () => {
  const title = "privacy policy - nimble bun works";
  const description = "indie game developer group";
  return (
    <TermsLayout>
      <Privacy />

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimblebun.works/privacy" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://nimblebun.works/privacy" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
    </TermsLayout>
  );
};

export default PrivacyPage;

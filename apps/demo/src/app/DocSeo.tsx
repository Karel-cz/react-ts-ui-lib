//!#Imports: start
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
//!#Imports: end

//!#Constants: start
//!#Constants: end

//!#Styles: start
//!#Styles: end

//!#helpers: start
//!#helpers: end

//!#propTypes: start
type DocSeoProps = {
  title: string;
  description: string;
};
//!#propTypes: end

const DocSeo = ({ title, description }: DocSeoProps) => {
  //!#visualComponent: start
  const location = useLocation();
  const { language } = useLanguage();

  const canonicalPath = location.pathname;
  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${canonicalPath}`
      : canonicalPath;
  const htmlLang = language === "cz" ? "cs" : "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: canonicalUrl,
    inLanguage: htmlLang,
  };

  //!#render components: start
  return (
    <Helmet>
      <title>{`React TS Kit – ${title}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Helmet>
  );
  //!#render components: end
  //!#visualComponent: end
};

//!#export: start
export { DocSeo };
export default DocSeo;
//!#export: end


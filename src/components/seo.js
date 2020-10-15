/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { usePageContext } from "../../page-context"

function SEO({ description, meta, title }) {
  const { t } = useTranslation();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            supportedLanguages
            author
          }
        }
      }
    `
  )
  const { lang, originalPath } = usePageContext();

  const metaDescription = description || t('siteMetadata.description')
  const host = site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={`%s | ${t('siteMetadata.title')}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: `${host}/${lang}${originalPath}`,
        },
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: `${host}${originalPath}`,
        },
        ...site.siteMetadata.supportedLanguages.map(supportedLang => ({
          rel: 'alternate',
          hrefLang: supportedLang,
          href: `${host}/${supportedLang}${originalPath}`,
        })),
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

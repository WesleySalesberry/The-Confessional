import React from 'react'

import { Helmet } from "react-helmet-async";

export const Meta = ({ title, description, keywords, url }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={url} />
            <meta
                name="twitter:title"
                content={title}
            />
            <meta name="twitter:creator" content="@theconfessional" />
            <meta name="twitter:site" content="@theconfessional" />
            <meta
                name="twitter:description"
                content={description}
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta
                property="og:title"
                content={title}
            />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:image"
                content=""
            />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To The Confessional',
    description: 'Were people can confess their deepest darkest secrets',
    keywords: '',
    url: window.location.href
}
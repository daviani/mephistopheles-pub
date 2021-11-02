require('dotenv').config()

const withFonts = require("next-fonts")

module.exports = withFonts(
    {
        reactStrictMode: true,
        swcMinify: true,
        webpack5: true,
        webpack: (config) => {
            // load worker files as a urls with `file-loader`
            config.module.rules.unshift({
                test: /pdf\.worker\.(min\.)?js/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            publicPath: '_next/static/worker',
                            outputPath: 'static/worker',
                        },
                    },
                ],
            })
            return config
        },
        i18n: {
            locales: ['fr', 'en'],
            defaultLocale: 'fr'
        },
        env: {
            NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
            process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
        },
    }
)
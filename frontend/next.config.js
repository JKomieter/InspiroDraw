/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: [{ loader: "@svgr/webpack", options: { icon: true } }],
            },
            {
                test: /\.node$/,
                use: [
                    {
                        loader: "nextjs-node-loader",
                        options: {
                            // flags: os.constants.dlopen.RTLD_NOW,
                            outputPath: config.output.path
                        }
                    },
                ],
            }
        )

        return config;
    }
}

module.exports = nextConfig

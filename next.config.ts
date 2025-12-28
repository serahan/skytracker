import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                cesium: "cesium/Build/Cesium/Cesium.js",
            };

            config.module.rules.push({
                test: /\.js$/,
                include: /cesium/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            });
        }

        // 정적 파일 처리
        config.module.rules.push({
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: ["url-loader"],
        });

        return config;
    },
};

export default nextConfig;

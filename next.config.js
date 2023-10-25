/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "img.freepik.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "cdn.awsli.com.br",
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com",
                port: '',
                pathname: '/**'
            }
        ]
    }
}
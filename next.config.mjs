/** @type {import('next').NextConfig} */


const nextConfig = {
    async redirects() {
        return [
        // Basic redirect
        {
            source: '/website_analysis_sendmail.php',
            destination: '/',
            permanent: true,
        },
        ]
    },
};

export default nextConfig;
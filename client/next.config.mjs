/** @type {import('next').NextConfig} */
const bucketName =
  process.env.NEXT_PUBLIC_S3_BUCKET_NAME ?? "project-management-images-aws";
const region = process.env.NEXT_PUBLIC_AWS_REGION ?? "us-east-2";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${bucketName}.s3.${region}.amazonaws.com`,
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;

const S3_BUCKET_NAME =
  process.env.NEXT_PUBLIC_S3_BUCKET_NAME ?? "project-management-images-aws";

const S3_REGION = process.env.NEXT_PUBLIC_AWS_REGION ?? "us-east-2";

export const S3_HOSTNAME = `${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com`;

export const S3_BASE_URL = `https://${S3_HOSTNAME}`;

export const getS3Url = (key?: string | null) => {
  if (!key) return "";

  return `${S3_BASE_URL}/${key}`;
};

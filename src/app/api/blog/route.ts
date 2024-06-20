export async function GET() {
  if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
  }

  if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
  }

  const testData = await fetch(`https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY
    },
    next: { revalidate: 10 }
  })
  const resData = await testData.json()

  return Response.json(resData)
}
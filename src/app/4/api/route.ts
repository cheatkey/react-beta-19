export const dynamic = "force-dynamic";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request) {
  await sleep(1000);
  const req = await request.json();
  console.log(req);

  return Response.json({ status: "success", name: req.name });
}

// api/index.js
import { createApp } from "../src/app";
import awsLambdaFastify from "@fastify/aws-lambda";

const app = createApp();
const proxy = awsLambdaFastify(app);

export default async function handler(req: any, res: any) {
  return proxy(req, res);
}

// import { createApp } from "../src/app";

// export default async function handler(req: any, res: any) {
//   try {
//     const app = createApp();
//     await app.ready();
//     app.server.emit("request", req, res);

//     // res.status(200).json({ message: "API online na Vercel 🚀" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// }

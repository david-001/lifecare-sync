// Import the Pangea SDK
import { PangeaConfig } from "pangea-node-sdk";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.PANGEA_TOKEN);
const token = process.env.PANGEA_TOKEN;
const config = new PangeaConfig({ domain: process.env.PANGEA_DOMAIN });
const clientIpAddress = (req) => {
  return req?.headers["origin"] || req?.socket.remoteAddress || "localhost";
};

const hostIpAddress = (req) => {
  return req?.headers["host"] || req?.hostname || "localhost";
};
export { token, config, clientIpAddress, hostIpAddress };

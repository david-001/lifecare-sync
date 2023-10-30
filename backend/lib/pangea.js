// Import the Pangea SDK
import {
  PangeaConfig,
  AuthNService,
  AuthN,
  AuditService,
} from "pangea-node-sdk";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.PANGEA_TOKEN;
const config = new PangeaConfig({ domain: process.env.PANGEA_DOMAIN });
const authn = new AuthNService(token, config);
const audit = new AuditService(token, config);

const clientIpAddress = (req) => {
  return req?.headers["origin"] || req?.socket.remoteAddress || "localhost";
};

const hostIpAddress = (req) => {
  return req?.headers["host"] || req?.hostname || "localhost";
};

const pangeaRegister = async (
  first_name,
  last_name,
  phone,
  image,
  email,
  password
) => {
  const createResp = await authn.user.create(
    email,
    password,
    AuthN.IDProvider.PASSWORD,
    {
      profile: {
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        image: image,
        role: "doctor",
      },
    }
  );
  return createResp;
};

const pangeaLogin = async (email, password) => {
  const loginResp = await authn.user.login.password(email, password);
  return loginResp;
};

const pangeaUpdatePassword = async (
  token,
  password_initial,
  password_update
) => {
  const passUpdateResp = await authn.client.password.change(
    token,
    password_initial,
    password_update
  );
  return passUpdateResp;
};

const pangeaGetProfile = async (userId) => {
  const resp = await authn.user.profile.getProfile({ id: userId });
  return resp;
};

const pangeaUpdateProfile = async (email, profile) => {
  const resp = await authn.user.profile.update({
    email: email,
    profile: profile,
  });
  return resp;
};

const pangeaAudit = async (actor, action, status, message, req) => {
  await audit.log(
    {
      actor: actor,
      action: action,
      status: status,
      target: `${hostIpAddress(req)}`,
      source: `${clientIpAddress(req)}`,
      message: message,
    },
    { verbose: true }
  );
};

export {
  pangeaRegister,
  pangeaLogin,
  pangeaUpdatePassword,
  pangeaGetProfile,
  pangeaUpdateProfile,
  pangeaAudit,
};

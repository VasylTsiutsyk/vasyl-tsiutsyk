// /services/squidex.js
import axios from 'axios';

const clientId = process.env.SQUIDEX_CLIENT_ID;
const clientSecret = process.env.SQUIDEX_CLIENT_SECRET;
const appName = process.env.SQUIDEX_APP_NAME;

const squidexApiBase = `https://cloud.squidex.io/api/content/${appName}`;

async function getSquidexToken() {
  const authUrl = 'https://cloud.squidex.io/identity-server/connect/token';
  const authData = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    scope: 'squidex-api',
  });

  const response = await axios.post(authUrl, authData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  return response.data.access_token;
}

function unwrapIvFields(data) {
  return Object.keys(data).reduce((acc, key) => {
    acc[key] = data[key].iv !== undefined ? data[key].iv : data[key];
    return acc;
  }, {});
}

export async function fetchSquidexData(endpoint) {
  const token = await getSquidexToken();
  const response = await axios.get(`${squidexApiBase}/${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data.items.map((item) => {
    item.data = unwrapIvFields(item.data); // unwrap `iv` fields
    return item;
  });
}

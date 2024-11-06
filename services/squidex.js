// /services/squidex.js
import axios from 'axios';

const squidexBaseUrl = 'https://cloud.squidex.io';
const clientId = process.env.SQUIDEX_CLIENT_ID;
const clientSecret = process.env.SQUIDEX_CLIENT_SECRET;
const appName = process.env.SQUIDEX_APP_NAME;
const squidexApiBase = `${squidexBaseUrl}/api/content/${appName}`;

function constructImageUrl(imgId) {
  return imgId ? `${squidexBaseUrl}/api/assets/${appName}/${imgId}` : null;
}

async function getSquidexToken() {
  try {
    const authUrl = `${squidexBaseUrl}/identity-server/connect/token`;
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
  } catch (error) {
    console.error('Failed to fetch Squidex token:', error);
    throw new Error('Authentication failed');
  }
}

function unwrapIvFields(data) {
  return Object.entries(data).reduce((acc, [key, value]) => {
    acc[key] = value.iv !== undefined ? value.iv : value;
    return acc;
  }, {});
}

export async function fetchSquidexData(endpoint) {
  try {
    const token = await getSquidexToken();
    const response = await axios.get(`${squidexApiBase}/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.items.map((item) => {
      item.data = unwrapIvFields(item.data);

      if (Array.isArray(item.data.img) && item.data.img[0]) {
        item.imgUrl = constructImageUrl(item.data.img[0]);
      }

      return item;
    });
  } catch (error) {
    console.error('Failed to fetch Squidex data:', error);
    throw new Error('Data fetching failed');
  }
}

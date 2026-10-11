// app/api/logs/route.js
import { GET as getLogsHandler, POST as postLogsHandler } from '../audit/logs/route';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  return getLogsHandler(request);
}

export async function POST(request) {
  return postLogsHandler(request);
}

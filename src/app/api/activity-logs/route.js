// app/api/activity-logs/route.js
import { prisma } from '@/lib/prisma';

export async function GET(request) {
  return getLogsHandler(request);
}

export async function POST(request) {
  return postLogsHandler(request);
}

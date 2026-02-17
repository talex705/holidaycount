/**
 * Deal data aggregator — loads JSON deal files and provides lookup functions.
 */

import type { DealFile } from '@/lib/deals/types';
import * as fs from 'fs';
import * as path from 'path';

// ---------------------------------------------------------------------------
// Load all deal JSON files at import time (build time for SSG)
// ---------------------------------------------------------------------------

const DEALS_DIR = path.join(process.cwd(), 'data', 'deals');

function loadDealFiles(): DealFile[] {
  if (!fs.existsSync(DEALS_DIR)) return [];

  const files = fs.readdirSync(DEALS_DIR).filter((f) => f.endsWith('.json'));
  const deals: DealFile[] = [];

  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(DEALS_DIR, file), 'utf-8');
      const parsed: DealFile = JSON.parse(content);
      deals.push(parsed);
    } catch {
      // Skip malformed files
    }
  }

  return deals;
}

const ALL_DEALS = loadDealFiles();

// ---------------------------------------------------------------------------
// Lookup functions
// ---------------------------------------------------------------------------

export function getDealsByHoliday(holidayId: string): DealFile | null {
  return ALL_DEALS.find((d) => d.holidayId === holidayId) ?? null;
}

export function getAllDealFiles(): DealFile[] {
  return ALL_DEALS;
}

export function getDealsForUpcomingHolidays(holidayIds: string[]): DealFile[] {
  return holidayIds
    .map((id) => getDealsByHoliday(id))
    .filter((d): d is DealFile => d !== null);
}

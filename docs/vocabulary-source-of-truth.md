# Vocabulary Source of Truth & Local Snapshot

This document details the relationship between COSYdata, COSYgames, and the local canonical vocabulary snapshot.

## Canonical Source
- **COSYdata** declares itself the single source of truth for vocabulary used by COSYgames.

## Local Read-Only Snapshot
- COSYgames maintains a READ-ONLY snapshot at `vocabulary/_canonical/en/A0-A1_master.json` containing 1,274 unique words.
- This snapshot is used by `scripts/sync-from-cosydata.js` and the CI workflow "Validate COSYdata Sync & Datasets" (`.github/workflows/validate-cosydata-sync.yml`).

## Provenance
- As recorded in the file notice, this snapshot was copied from COSYlanguages on 2026-09-12 (commit `5c89fc9036afba450f942e4fd672ea57d42c42a6`).

## Known Gap
- Measured on 2026-10-03: COSYdata's current A0-A1 list is `a0_a1_entries.json` with 1,433 unique words.
- The local snapshot (1,274 unique words) and COSYdata's `a0_a1_entries.json` overlap on 1,201 words (73 words exist only in the snapshot, 232 words exist only in COSYdata).
- Because of this discrepancy, the offline CI check currently audits local game data against a stale snapshot list. Reconciliation is pending and must happen in COSYdata first before updating the local snapshot in COSYgames.

## Maintenance Rule
- **Never edit the local snapshot file (`vocabulary/_canonical/en/A0-A1_master.json`) by hand.**
- Any vocabulary updates or corrections must be proposed and merged in COSYdata first, after which the local snapshot in COSYgames can be refreshed.

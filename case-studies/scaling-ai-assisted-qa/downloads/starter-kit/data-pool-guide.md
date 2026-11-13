# Build and use your pool

A pool describes candidates and verified prerequisites. Choose the workspace by capability, then select an identity/role and record that satisfy the scenario. Role names alone may not represent effective access. Check actual relationships and permissions.

## Populate

Replace bracketed fields in data-pool.json or data-pool.csv. The two files illustrate the same example; choose one as the authoritative format for your implementation. List prerequisites as testable facts. Keep protected resources excluded. Run the verification method, store its evidence reference and timestamp, and mark verified only when all prerequisites are satisfied. Invalidate verification after environment refresh or relevant changes. Refresh age alone cannot prove current validity.

## Coordinate concurrent runs

The template is not a lock manager. Build or reuse a coordination mechanism if tests change shared state. Allocate atomically using a database transaction or a properly implemented lock; reading a JSON file and later writing a claim has a race. Scope keys by environment and workspace, with canonical resource IDs. Readers of a shared role must participate in role coordination alongside the scenario changing it. Use expiring leases with heartbeat renewal; do not let a still-active mutation lose its reservation merely because a timer expired. A crashed run can leave changed data after its lease expires, so verify restoration before reallocating. Multi-resource acquisition needs a consistent order or an all-or-nothing operation and release of partial claims.

## Mutate and restore

Create disposable fixtures when authorized and tag them with the run identifier. Capture original values before editing existing allowed records. After the check, restore and verify. On cleanup failure keep the record unavailable and surface the affected checks. An intentionally retained failure fixture needs an owner and expiry. Perform the same outcome checks before retrying any operation whose success is uncertain.

## Prove suitability

A report test can require an active record with a specific linked contact. Verify that relationship before predicting a count. If a relationship is missing, choose another verified record or create the approved setup. Treat a post-action mismatch as evidence to investigate. Changing fixtures or expected results solely to make it pass undermines the test.

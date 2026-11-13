# QA operating rules — Adaptable starting points

Fill these values before adopting the rules:
- Allowed environments: [environments]
- Read-only investigation sources: [sources]
- Authorized test mutations and protected records: [boundaries]
- Plan-change approval policy: [approval policy]
- Run result location: [location]
- Designated expected-result sources: [acceptance criteria / approved decisions / named historical baseline]

## 1. Verify scenario prerequisites

Applies when selecting data or starting a scenario. Verify the status, workspace, effective role, relationships and supporting records needed by the check using relevant sources. Record evidence and timestamp. Reverify after a refresh or relevant change. A verified row's existence alone does not prove scenario suitability.
Example: a report fixture may require both a live record and an assigned sales contact.

## 2. Resolve answerable questions before review

Applies when drafting a review-box item. Investigate relevant sources and alternate permitted routes first. Surface the exact unresolved decision with check ID and brief necessary context. Put evidence in the log and setup requirements beside the test. If no decision remains, say so.
Example: a record missing from the pool is a setup task if approved creation can supply it.

## 3. Establish expected behavior

Applies when designing checks or classifying a mismatch. Start from approved acceptance criteria or an explicitly named baseline. Inspect code to understand implementation and discover conflicts. If intent and implementation disagree, record the conflict for a decision; don't silently change the expectation to match code.
Example: a restoration task may name a historical version as its required baseline.

## 4. Own and coordinate mutable resources

Applies before changing data, roles, workspace settings or sessions. Claim the actual affected scope, including dependencies used by other tests. Use atomic allocation for concurrent writes. Release after verified cleanup. Quarantine resources whose restoration failed.
Example: different users sharing a role still share the effect of permission changes.

## 5. Recover within authorized boundaries

Applies when a tool attempt fails. Diagnose the relevant route, environment, data, timing and evidence. Retry appropriately or try a permitted alternative. Verify prior mutations before retrying so duplicate sends or records aren't created. Continue independent checks. Surface a specific unresolved blocker when recovery is exhausted or an actual access boundary is reached.
Example: verify and adjust a clipped viewport before treating a form as inaccessible.

## 6. Create and clean up test material

Applies only to disposable test material within [boundaries] in [environments]. Tag created records with a run identifier. Capture original state before reversible changes and verify restoration. Preserve evidence needed for failure review. Existing shared records require explicit permitted scope and coordination.
Example: creating a fixture and later deleting that fixture may be preauthorized for UAT; platform-enforced approval requirements still apply.

## 7. Validate identity and session ownership

Applies at kickoff, on identity changes and after authentication failures. Confirm the app, identity, workspace and effective role. Reuse only approved protected authentication state and close only owned sessions. Group reauthentication by identity.
Example: a helper ending must leave other test browsers running.

## 8. Account for every approved check

Applies at handoff. Reconcile IDs with recorded results. Distinguish Pass, Product fail, Blocked, Waiting and Unattempted; identify evidence or reason. Continue runnable unattempted work. A timed wait needs a deadline and return path. Review failures through the established process.
Example: completing 12 of 20 checks is a partial run even if a response is finished.

## 9. Apply workflows by their conditions

Applies before selecting a specialized skill. Check required task states and follow rule-scope-template.md. Keep ordinary work on its ordinary route when triggers are absent. A user request can authorize work while invocation of a specific tool may still have its own restrictions.
Example: a first summary arriving before execution is a plan update; a fix for an observed failure activates rework.

## 10. Verify instruction delivery and changes

Applies at startup, task transition and rule publication using supported mechanisms in your agent host. Use a current authoritative version and log what each session receives. Test fresh and existing sessions and subagents. Observe behavior separately from loading.
Example: a file updated on disk may not refresh an already-running session.

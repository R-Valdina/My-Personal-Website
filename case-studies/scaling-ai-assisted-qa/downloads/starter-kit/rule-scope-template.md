# Define one rule

Rule ID: [stable ID]
Version: [published version]
Purpose: [problem it prevents]
Applies when: [observable conditions, all required conditions stated]
Required action: [what to do]
Scope: [specific environments, records, files, tools or workflow]
Ends when: [condition that ends this procedure or restriction]
Otherwise: [ordinary task route]
Authority: [source and actual approval boundary; respect platform policy]
Evidence location: [execution log]

## Example

Rule ID: REWORK-01
Applies when: a test has an observed failure and a developer has delivered a fix for it.
Required action: compare the fix and summary with the approved plan, assess impacted checks, propose changes under the plan approval policy, and retest the approved scope.
Scope: affected card and relevant regression coverage.
Ends when: approved retest scope has evidence-backed results or explicit unresolved blockers.
Otherwise: an initial late summary before testing follows ordinary plan maintenance.

## Pair of tests

Must activate: a fix arrives for an open failed check.
Must stay inactive: the first summary arrives after planning but before any testing.
Also test: new information arrives mid-run without a failure; route to impact assessment and the existing approval policy.

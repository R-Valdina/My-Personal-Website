# Shared authentication recipe

Goal: reduce repeated human sign-ins while keeping independent runs isolated. Complete using your existing platform, permissions and identity policy.

## Fill in your setup

| Item | Your value |
| --- | --- |
| UAT environments | [staging / patch / other] |
| Required applications and hosts | [all hosts and apps under test] |
| Approved identities and roles | [identity references] |
| Auth method | [SSO / application login / other] |
| Protected state location | [local path excluded from source control and public logs] |
| Expiration and refresh behavior | [observed policy] |
| Human-only sign-in steps | [password / MFA / device approval as required] |

## Establish the supported state

Inspect whether each app uses cookies, local storage, IndexedDB, session storage, device-bound tokens or another mechanism. Browser-state export capabilities differ by tool and version. Some apps require a fresh sign-in per device or session. Do not assume one file covers unrelated origins or identities. Confirm the tool's current official authentication documentation for the installed version.

## Validate at kickoff

Authenticate each approved identity and save supported state securely. Load it into a fresh named session, visit every required app and verify identity, workspace and effective role. A logged-in landing page does not prove every app or role works. Repeat with a second concurrent session and harmless requests. Verify impersonation in one session does not change the other, including an appropriate permitted data request if available.

## Launch and recover

Assign a unique browser session per concurrent browser-driving worker. Reuse the correct identity state. Separate users may be required for tests changing account-level or workspace-level state. Group actual expiration blockers by identity. Preserve independent runs while access is refreshed. Avoid simultaneous writes to the same state file; publish refreshed state atomically and track its generation. Token rotation can invalidate copies, so test your app's behavior. A global logout may invalidate all reused sessions. Close only the helper session you own.

## Acceptance test

Two sessions remain valid during harmless activity, with correct roles and isolated impersonation. Ending the helper leaves both test sessions alive. Expired state produces a clear sign-in request identifying the app and affected work. The test must match your real nested-chat structure and approval settings.

## Reference

For Playwright users, begin with the official authentication documentation and the CLI documentation for the installed version. Authentication-state reuse reduces browser setup; it does not isolate backend records or grant new permissions.

https://playwright.dev/docs/auth
https://playwright.dev/docs/browser-contexts

# Before scaling to a release

- [ ] Required app hosts and approved identities are listed.
- [ ] Two real sessions can reuse authentication as intended.
- [ ] Every browser-driving worker has its own named session.
- [ ] Auth and cleanup helpers close only owned sessions.
- [ ] Scenario prerequisites have current verification evidence.
- [ ] Mutable fixtures and role dependencies have coordinated ownership.
- [ ] Concurrent reservations are atomic and expired leases cannot expose dirty resources.
- [ ] Protected records and approved mutation boundaries are explicit.
- [ ] Original state is captured and cleanup is verified.
- [ ] Every approved check ID is accounted for in the result schema.
- [ ] A false expectation or unsuitable fixture is investigated before product-failure classification.
- [ ] Review box contains decisions and links to affected checks; logs hold investigation detail.
- [ ] Parent, child and subagents receive the current rules through tested mechanisms.
- [ ] Rule changes have matching-case and nonmatching-case exercises.
- [ ] Pilot preserves real nesting, titles, tools and permissions.
- [ ] Notifications, if used, are visibly confirmed rather than inferred from a successful script exit.
- [ ] A failure of one independent run leaves the others usable.

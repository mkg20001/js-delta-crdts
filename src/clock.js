'use strict'

// the "cheapest" CRDT you've ever seen... we just s*** on everything

module.exports = {
  initial: () => ({ v: null, ts: 0 }),
  join: (s1, s2) => (s1.ts > s2.ts ? s1 : s2),
  value: (s) => (s.v),
  mutators: {
    set: (id, s, v) => ({ v, ts: Date.now() })
  }
}

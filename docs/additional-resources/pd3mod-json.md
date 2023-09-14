---
sidebar_position: 4
draft: true
---

# pd3mod.json
This page explains the fields of the `pd3mod.json` file.
You can also get this information in more detail from [the json schema](/files/schema-v0.1.0-draft.json).

## Required fields
- **id:** the mod's unique identifier. A string of alphanumeric characters with a length of 2-64 characters.
- **version:** the mod's version. Must follow the [Semantic Versioning 2.0.0](https://semver.org) specification.
- **environment:** the environment the mod runs in. Must be either `client`, `server` or `*` for both.
  - `client` - Client-side only mod: your mod can be used on servers/hosts that do not have the mod installed (visual mods, HUD mods, etc.)
  - `server` - Server-side only mod: other clients can join your hosted games without having the mod installed (AI rebalances, etc.)
  - `*` - Bilateral mod: your mod needs to be installed on both host and client to work correctly (Custom/new heists, weapons, etc.)

## Dependencies
TODO

## Metadata
TODO

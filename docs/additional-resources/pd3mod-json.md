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
- **schemaVersion:** constant field checked by the launcher. Must always be `1`.

## Metadata
- **name:** a pretty name for the mod. Any unicode string.
- **description:** a description for the mod. Any unicode string, use `\n` to add newlines.
- **icon:** the path to an icon, formats other than png and jpg might not be supported by the launcher
- **authors:** a list of the primary authors of the mod
- **contributors:** a list of additional contributors to the mod, testers and translators for example

## Dependencies
The dependencies objects are a map where the keys are mod ids and the values are NPM style [semver ranges](https://devhints.io/semver), for example `1.2.3`, `1.x.x`, `1.2.3-2.3.4` and `*`

- **depends:** the game will not launch if this does not match, the launcher shows an error
- **recommends:** the launcher will show a warning if this does not match
- **suggests:** this is only metadata, and not used by the launcher
- **conflicts:** the launcher will show a warning if this matches
- **breaks:** the game will not launch if this matches, the launcher shows an error

## Updates
You can provide metadata to allow for semi-automatic updates of your mod.
The launcher will alert the user of new updates
and provide a way to automatically download and install them.

You can specify one of four update providers in your mod metadata.
These can be either GitHub/GitLab releases, modworkshop or a custom solution.

:::caution
This part is not documented yet, and might not be fully implemented by the launcher.
:::

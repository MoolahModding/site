---
sidebar_position: 1
draft: true
---

# Tools
:::info
The list below is curated to contain only tools which are most used and relevant to PAYDAY 3.
For a more exhaustive list of Unreal Engine modding tools,
see [Buckminsterfullerene's repository](https://github.com/Buckminsterfullerene02/UE-Modding-Tools).
:::

## Working with Pak files
### Repak _by truman_
[Repak](https://github.com/trumank/repak) is a popular community-made option, with support for both unpacking and packing assets.
Repak is written in rust and crazy fast.

### UnrealPak _by Epic_
UnrealPak is the official tool shipped with the Unreal Editor.
You can find it in your editor's install directory under `Engine\Binaries\Win64\UnrealPak.exe`.

While having the best compatibility due to it using the Engine's own logic to work with Pak files,
it is by far the hardest to work with for mod developers.
The command line interface is unintuitive, not well-documented,
and AES encryption keys must be specially formatted into a configuration file.

### FModel
[FModel](https://github.com/4sval/FModel) is a very powerful interactive Pak viewer.
It allows viewing most assets serialized as JSON, as well as playing back audio and viewing textures and models.

## Working with cooked Blueprint code (aka Kismet)
### kismet-analyzer _by truman_
[kismet-analyzer](https://github.com/trumank/kismet-analyzer) is a command line toolkit to help analyze and manipulate assets containing Kismet functions.

### kismet-debugger _by truman_
[kismet-debugger](https://github.com/trumank/kismet-debugger) is an extension for UE4SS which allows you to interactively step through Blueprint functions.
:::caution
Several people have reported issues getting this to work with PAYDAY 3.
Should you get it to work, feel free to update this page with instructions.
:::

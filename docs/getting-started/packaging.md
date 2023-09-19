---
sidebar_position: 5
---

# Packaging
Follow these steps to make your mod installable by the Moolah Mod Launcher.

:::caution
The mod launcher is not quite available for use. Hang tight, we're almost there!
:::

Start by creating a directory with the name and version of your mod. For example: `MyMod-v1.0.0`.

Next, create a file called `pd3mod.json` inside.
This file contains metadata about your mod, such as a unique identifier, version, name and description.
To see all available fields and their types, see the page on [pd3mod.json](/docs/additional-resources/pd3mod-json) or the [json schema](/files/schema-v0.1.0-draft.json).

:::info Why pd3mod?
Those familiar with Unreal Engine modding know that mods usually come packaged as a `.pak` file.
The advantage of `pd3mod` is that it can contain both a pak file
and additional files for scripting extensions such as UE4SS.

Additionally, pak files lack a lot of metadata.
`pd3mod` allows for specifying a mod identifier, version, name, description, dependencies and much more.
This is intended to be used by the launcher to provide a better experience for the end user.
:::

Here's a simple example of what the metadata file could look like:
```json title="pd3mod.json"
{
    "id": "modid",
    "version": "1.0.0",
    "name": "Example mod",
    "description": "This is an example description! Tell everyone what your mod is about!",
    "authors": [
      "Me!"
    ],
    "license": "MIT",
    "icon": "icon.png",
    "environment": "*",

    "contact": {
      "homepage": "https://modworkshop.net/mod/26824",
      "sources": "https://github.com/MoolahModding/site"
    },

    "depends": {
      "payday3": "*"
    }
}
```

The `id` and `version` fields are required.
Version **must** follow the [Semantic Versioning 2.0.0](https://semver.org) specification.

Next, if your mod has a **pak file**, add it to a folder called `Paks`.<br />
If your mod has **UE4SS** lua scripts or DLLs, you can add those to a folder called `ue4ss`.

:::caution UE4SS mods
You should not add an `enabled.txt` file,
as the Moolah Mod Launcher will handle this by updating UE4SS' `mods.txt` file.
:::

All together, it should look something like this:

```
MyMod-v1.0.0
├── pak
│   └── MyMod.pak
├── ue4ss
│   ├── dlls
│   │   └── main.dll
│   └── Scripts
│       ├── main.lua
│       └── util.lua
├── icon.png
└── pd3mod.json
```

With all of your files in the right place,
you can now zip up the **contents** of the directory.
Make sure `pd3mod.json` is at the root of the zip file and not in another subdirectory.

Finally, change the file extension of the resulting `.zip` file to `.pd3mod` and test it out with the mod launcher.

---
sidebar_position: 1
---

# Getting Started with Mapping

In order to begin with mapping, you must first get accustomed to Unreal Engine's editor and create a map.
As of writing, the preferred place to store your map is in `PAYDAY3/Content/Mods/.../Maps/{ModName}`.

:::info
As always, the Mod structure needs to be the same as the Unreal Engine structure as to not cause any Problems, if you dont 
follow this rule, problems may arise.
:::

:::tip
We recommend you join the ModWorkshop Discord server for questions
and to interact with experienced members of the modding community.
:::

## Setting up your map

Once you've created your map, you'll need to set it up for use in PAYDAY 3.
The first thing you need to do is setup the map's world settings,
you can do this by opening the World Settings window with the map open in the editor.
The World Settings window looks like this:

![SBZWorldSettings](assets/world-settings.png)

The settings in this window can be left largely untouched,
but if your map needs the player to start with their mask, then you can disable the "Start in Casing" option.
If your map also requires a soundtrack through Wwise, like the game's default sounds tracks,
then you'll need to set the "Music Event" option to the heist track you'd prefer to use for your level.
If you don't set the music event, then the map will have no background music.

A requirement for PAYDAY 3 to load your level is to have a `SBZPlayerStartGroup` actor in your level and add at least one `PlayerStart` to it.
In order for the `MapLoader` mod to add your map to the list of maps the game can load,
you'll need to create a `PD3HeistDataAsset` and place it somewhere preferably in `Content/Mods/Maps/{ModName}` and name it `DA_Heist_{ModName}`.
You'll also need to set the `Level Path` property to the map you've made.
This is also a good time to give your map a name and description that will display in-game.

:::tip
Learn how to make a `PD3HeistDataAsset` on [the Data Assets page](/docs/getting-started/data-assets)
:::

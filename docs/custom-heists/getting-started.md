---
sidebar_position: 1
draft: true
---

# Getting Started with Mapping

In order to begin with mapping, you must first get accustomed to Unreal Engine's editor and create a map. As of writing, the preferred place to store your map is in `Content/Maps/{ModName}`.

## Setting up your map

Once you've created your map, you'll need to set it up for use in PAYDAY 3. The first thing you need to do is setup the map's world settings, you can do this by opening the World Settings window with the map open in the editor. The World Settings window looks like this:


![SBZWorldSettings](/img/world-settings.png)

The settings in this window can be left largely untouched, but if your map needs the player to start with their mask you then you can disable the "Start in Casing" option. If your map also requires a sound track through Wwise, like the game's default sounds tracks, then you'll need to set the "Music Event" option to the heist track you'd prefer to use for your level. If you don't set the music event, then the map will have no background music.

A requirement for PAYDAY 3 to load your level is to have a `SBZPlayerStartGroup` actor in your level and add atleast one `PlayerStart` to it.
In order for the `MapLoader` mod to add your map to the list of maps the game can load, you'll need to create a `PD3HeistDataAsset` and place it somewhere preferrably in `Content/Mods/Maps/{ModName}` and name it `DA_Heist_{ModName}`, you'll also need to set the `Level Path` property to the map you've made. This is also a good time to give your map a name and description that will display in-game.

:::tip

If you can't make a `PD3HeistDataAsset`, please refer to [the Data Assets section in Creating Assets Used by PAYDAY 3](/getting-started/creating-assets-used-by-pd3#data-assets)

:::
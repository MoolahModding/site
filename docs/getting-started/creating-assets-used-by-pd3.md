---
sidebar_position: 4
draft: true
---

# Creating Assets Used by PAYDAY 3

## Data Assets

To create a data asset, follow these simple instructions:
1. Right click on the content browser and select `Miscellaneous` and choose `Data Asset` ![Data Asset in UE4 Editor](/img/data-asset-content-browser.png)
2. Search for the data asset type you want to use, for this example I use `PD3HeistDataAsset`, and select it. And finally, name it. ![PD3HeistDataAsset](/img/pd3heistdataasset-in-class-picker.png)

## Making dummy Wwise Assets

:::note
Support for dummying Wwise assets is provided by the `DummyFactories` plugin, disabling this plugin will remove the ability to create dummy Wwise assets.
:::

### AkAudioEvent
AkAudioEvents are only really used for heist soundtracks, so there's a high likelyhood you won't need to make one as someone would have already made one.

To make a dummy `AkAudioEvent`, do the following:
1. Right click on the content browser and select `Media` and choose `AkAudioEvent`
2. Name your dummy asset and it's done.

![AkAudioEvent in UE4 Editor](/img/media-content-browser.png)
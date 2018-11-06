<<<<<<< HEAD
# TDI-Radio-Chrome-Extension

While working I always listen TDI radio so to do that i have to have one tab always open. So i made this Chorme Extension that stream radio in the background. Im working on to get this extension on Chrome Store

**How to use**

You have to enable Developer Mode in Extension section. Click on load unpacked and select directory with all files.

To play stream press ALT+1 and to stop ALT+2

**Different radio station**

If youy have to listen different radio station you must find that station stream link. Open background.js and replace link in audio.setAtribute.

**Change controls**

To change controls open Manifest.json and in commands choose your combination.

Supported keys: A-Z, 0-9, Comma, Period, Home, End, PageUp, PageDown, Space, Insert, Delete, Arrow keys (Up, Down, Left, Right) and the Media Keys (MediaNextTrack, MediaPlayPause, MediaPrevTrack, MediaStop).

Note: All key combinations must include either Ctrl* or Alt. Combinations that involve Ctrl+Alt are not permitted in order to avoid conflicts with the AltGr key. Shift can be used in addition to Alt or Ctrl, but is not required. Modifiers (such as Ctrl) can not be used in combination with the Media Keys. Tab key was removed from list of supported keys in Chrome version 33 and above for accessibility reasons.

* Please note that on Mac 'Ctrl' is automatically converted to 'Command'. If you want 'Ctrl' instead, please specify 'MacCtrl' under "mac". Specifying 'MacCtrl' under "default" will cause the extension to be uninstallable.

**TO DO**
Create notification for users when radio show start. 
=======
# TDI-Radio-Chrome-Extension


[![Alt text](http://res.cloudinary.com/sekenikola/image/upload/v1530047144/ChromeWebStore_Badge_v2_206x58_ik2flu.png)](https://chrome.google.com/webstore/detail/tdi-radio/bjjffjeanbleeaijfdjndampfamdkkol?authuser=1)


While working I always listen TDI radio so to do that i have to have one tab always open. So i made this Chorme Extension that stream radio in the background. Im working on to get this extension on Chrome Store

**How to use**

You have to enable Developer Mode in Extension section. Click on load unpacked and select directory with all files.

To play stream press ALT+1 and to stop ALT+2

**Different radio station**

If youy have to listen different radio station you must find that station stream link. Open background.js and replace link in audio.setAtribute.

**Change controls**

To change controls open Manifest.json and in commands choose your combination.

Supported keys: A-Z, 0-9, Comma, Period, Home, End, PageUp, PageDown, Space, Insert, Delete, Arrow keys (Up, Down, Left, Right) and the Media Keys (MediaNextTrack, MediaPlayPause, MediaPrevTrack, MediaStop).

Note: All key combinations must include either Ctrl* or Alt. Combinations that involve Ctrl+Alt are not permitted in order to avoid conflicts with the AltGr key. Shift can be used in addition to Alt or Ctrl, but is not required. Modifiers (such as Ctrl) can not be used in combination with the Media Keys. Tab key was removed from list of supported keys in Chrome version 33 and above for accessibility reasons.

* Please note that on Mac 'Ctrl' is automatically converted to 'Command'. If you want 'Ctrl' instead, please specify 'MacCtrl' under "mac". Specifying 'MacCtrl' under "default" will cause the extension to be uninstallable.

**TO DO**
Create notification for users when radio show start. 


[![Chrome Web Store](https://img.shields.io/badge/rating-5-blue.svg)](https://chrome.google.com/webstore/detail/tdi-radio/bjjffjeanbleeaijfdjndampfamdkkol?authuser=1) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SekeNikola/TDI-Radio-Chrome-Extension/graphs/commit-activity)[![Version](https://img.shields.io/badge/version-1.1-orange.svg)](https://github.com/SekeNikola/TDI-Radio-Chrome-Extension/graphs/commit-activity)


>>>>>>> 241c23d2476dae961ead939ef45fb30d8538ccd6

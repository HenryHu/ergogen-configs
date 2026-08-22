Overview
========

This repo contains Erogen configs for my keyboards:

* jegan

  Split keyboard, with per-key RGB and a small OLED screen.

# Environment

These are fairly standard Ergogen configs, but because I used footprints from ceoloide,
it's easier to use them on https://ergogen.ceoloide.com/. Other Ergogen deployments
should work as well, as long as the ceoloide footprints are provided.

# Footprints

Other than the standard and ceoloide footprints, the following footprints are used:

* choc_stabilizer: stabilizer footprint for Choc v1 switches.
* choc_stabilizer_top_plate: top-place cuts for Choc v1 stabilizer.

# Keyboards

## jegan

jegan is a split keyboard with per-key RGB and a small OLED screen.
In theory it can support more OLED screens, I just didn't bother installing them.

### Bill of materials

The following components are used for building this keyboard:

* PCBs, left-half and right-half
* Reset button x 2, EVQPUC02K
* Power switch x 2, SSSS811101
* MCU x 2, nice!nano or clone
* Machine header 12 x 4
  Regular pin header & socket should work as well.
* Battery jack x 2, JST PH 2.0mm 2-pin, right angled
* Battery x 2, 301230 or thicker (401230 etc.), depending on how much space you have below the MCU
* Diode x 84, 1N4148W
* RGB LED x 84, SK6812 mini-E
  Notice that there are multiple variations for SK6812, and only the mini-E version is comptabile.
* Hotswap sockets for Choc v1 switches x 84
* Choc v1 switches x 84
* Choc v1 keycap x 73, as I designed this with MX spacing, bigger keycaps can be used
* Special Choc v1 keycaps x 11, including
  * 1.25u x 4, for ctrl/alt etc.
  * 2.25u x 3, for left shift and space bars
  * 1.5u x 2, for tab and backspace
  * 1.75u x 2, for capslock and enter

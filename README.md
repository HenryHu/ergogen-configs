Overview
========

This repo contains Erogen configs for my keyboards:

* jegan

  Split keyboard, with per-key RGB and a small OLED screen.

## Environment

These are fairly standard Ergogen configs, but because I used footprints from ceoloide,
it's easier to use them on https://ergogen.ceoloide.com/. Other Ergogen deployments
should work as well, as long as the ceoloide footprints are provided.

## Footprints

Other than the standard and ceoloide footprints, the following footprints are used:

* choc_stabilizer: stabilizer footprint for Choc v1 switches.
* choc_stabilizer_top_plate: top-place cuts for Choc v1 stabilizer.

## Keyboards

### jegan

jegan is a split keyboard with per-key RGB and a small OLED screen.
In theory it can support more OLED screens, I just didn't bother installing them.

#### Bill of materials

The following components are used for building this keyboard:

| Component | Count | Model | Note
| - | - | - | - |
| PCBs | 2 | / | left-half and right-half
| Top panel | 2 | / | left-half and right-half
| Bottom panel | 2 | / | left-half and right-half
| Screws | 8 | M2 | I used 4 short ones and 4 long ones to create an angle
| Washer | 32 | M2 | For each screw, I used 1 washer at top, 2 between top-panel and PCB, and one below the bottom panel
| Nut | 16 | M2 | For each screw, I used 1 nut to secure PCB and top-panel, and 1 nut to secure bottom-panel
| Reset button | 2 | EVQPUC02K | Other similar ones also can be used
| Power switch | 2 | SSSS811101 | 
| MCU | 2 | nice!nano or clone |
| Machine header | 12 x 4 | |  Regular pin header & socket should work as well.
| Battery jack | 2 | JST PH 2.0mm 2-pin, right angled |
| Battery | 2 | 301230 or thicker (401230 etc.) | depending on how much space you have below the MCU
| Diode | 84 | 1N4148W
| RGB LED | 84 | SK6812 mini-E | Notice that there are multiple variations for SK6812, and only the mini-E version is comptabile.
| Hotswap sockets | 84 | for Choc v1 switches
| Switches | 84 | Choc v1 |
| Keycap | 73 | Choc v1 | as I designed this with MX spacing, bigger keycaps can be used
| Special keycaps | 11 | Choc v1 | see below
| Stabilizer | 3 | Choc v1 | needed for the 2.25u keys
| OLED screen | 1 | SSD1306-compatible | more screen can possibly be installed

Special keycaps include the following:
  * 1.25u x 4, for ctrl/alt etc.
  * 2.25u x 3, for left shift and space bars
  * 1.5u x 2, for tab and backspace
  * 1.75u x 2, for capslock and enter

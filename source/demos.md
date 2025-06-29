<!--
layout: default
title: Demos
nav_order: 3
-->

# Demo

This document describes different strategies for developing demonstration packages using or extending the core `space_station_os` integration repository.

## Example

---

**[Estimates of Nauka incident on ISS in July 2021 and more](https://github.com/space-station-os/demo_nauka_incident2021_estimate)**

**[ECLSS initial demo on Space Station OS in ROS 2](https://github.com/space-station-os/demo_nova_sanctum)**

---

## Typical Use Cases

- Modify integration (`space_station_os`) while developing your own test scenarios
- Build from scratch with reference to SSOS interfaces
- Prepare for future pull requests to the main repo

## Six recommended approaches for 

We encourage contributors to begin with unit-level development using a demo repository before attempting integration into the main space_station_os repository.
To support this, we propose six typical approaches for demo development. Each option reflects a different level of integration and customization, allowing developers to choose the path that best suits their needs.

### Demo Selection Flowchart

The Demo Selection Flowchart below can help guide this decision-making process. 

![Demo Selection Flowchart](demo2select.png)

### README.md templates

Each case links to a corresponding README.md template that can be used as a starting point for your own demo repository.

- For upstream contribution: consider using Option 1 or 2
1. [Using Git Submodule](README_template_demo_case1.md)  
2. [Fork & Dev Branch](README_template_demo_case2.md)  

- For isolated testing: use Option 3 or 4 (recommended for users new to ROS 2)
3. [Static Copy of Code](README_template_demo_case3.md)  
4. [Selective Node Copy](README_template_demo_case4.md)  
   
- For structured partial builds: use Option 5
5. [Selective Build (colcon/CMake)](README_template_demo_case5.md)  
   
- For conceptual freedom: use Option 6 (suitable even for non-ROS 2 users)
6. [Fully Standalone / Scratch-Built](README_template_demo_case6.md)  



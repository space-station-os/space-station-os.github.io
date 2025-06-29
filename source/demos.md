
<!--
layout: default
title: Demos
nav_order: 3
-->

# Demo

This document describes different strategies for developing demonstration packages using or extending the core `space_station_os` integration repository.

# Example

---

**[Estimates of Nauka incident on ISS in July 2021 and more](https://github.com/space-station-os/demo_nauka_incident2021_estimate)**

**[ECLSS initial demo on Space Station OS in ROS 2](https://github.com/space-station-os/demo_nova_sanctum)**

---

## Typical Use Cases

- Modify integration (`space_station_os`) while developing your own test scenarios
- Build from scratch with reference to SSOS interfaces
- Prepare for future pull requests to the main repo

## Six Recommended Approaches

1. [Using Git Submodule](README_template_demo_case1.md)
2. [Fork & Dev Branch](README_template_demo_case2.md)
- For upstream contribution: consider using Option 1 or 2

3. [Static Copy of Code](README_template_demo_case3.md)
4. [Selective Node Copy](README_template_demo_case4.md)
- For isolated testing: use Option 3 or 4 (precommended for users new to ROS 2)

5. [Selective Build (colcon/CMake)](README_template_demo_case5.md)
- For structured partial builds: use Option 5

6. [Fully Standalone / Scratch-Built](README_template_demo_case6.md)
- For conceptual freedom: use Option 6 (suitable even for non-ROS 2 users)

## Strategy Selection Flowchart

```mermaid
flowchart TD
    A[Start: Need to modify or use Integration code] --> B{Do you need version control<br>and future PR support?}
    B -->|Yes| C[Use git submodule (Option 1)]
    B -->|No| D{Just need to quickly test or customize?}
    D -->|Yes| E[Static copy of code (Option 3)]
    D -->|No| F[Do you want to contribute back later?]
    F -->|Yes| G[Fork & create dev branch (Option 2)]
    F -->|No| H[Copy only necessary nodes (Option 4)]
    G --> I{Do you need partial build integration?}
    I -->|Yes| J[Use colcon/CMake selective build (Option 5)]
    I -->|No| K[Use full repo]
    K --> L[Or write from scratch (Option 6)]
```


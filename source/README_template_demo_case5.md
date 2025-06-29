# Demo Using Selective Build of space_station_os

This repository builds alongside `space_station_os` but uses selective colcon and CMake configuration to target specific packages.

## Purpose

(Describe the purpose of this demo here, e.g., integrating a new ECLSS controller while ignoring unrelated modules.)

## Prerequisites

(List your prerequisites here, e.g., ROS 2 Humble or later, colcon, knowledge of COLCON_IGNORE or CMake options.)

## Setup

1. Clone repositories:

    mkdir -p ros2_ws/src
    git clone https://github.com/space-station-os/space_station_os.git ros2_ws/src/space_station_os
    git clone https://github.com/yourname/demo_xyz.git ros2_ws/src/demo_xyz

2. Add `COLCON_IGNORE` to unwanted packages in `space_station_os`:

    touch ros2_ws/src/space_station_os/unused_pkg/COLCON_IGNORE

3. Build:

    cd ros2_ws
    colcon build

## Notes

- This structure allows building only the packages you need.
- Ideal for prototyping or testing new modules without full system overhead.

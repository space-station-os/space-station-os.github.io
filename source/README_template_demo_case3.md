# Demo Project with Static Copy

This repository includes a copy of selected components from `space_station_os`, statically imported for local experimentation.

## Purpose

(Describe the purpose of this demo here, e.g., simplifying the logic for a classroom tutorial, testing only the thermal loop, etc.)

## Prerequisites

(List your prerequisites here, e.g., ROS 2 Humble or later, Python 3.10+, no external dependencies if fully self-contained.)

## Setup

No special setup is required. All code is self-contained in this repository.

To build:

    mkdir -p ros2_ws/src
    mv demo_xyz ros2_ws/src/
    cd ros2_ws
    colcon build

## Notes

- This repository does not rely on the upstream `space_station_os` repository.
- Suitable for rapid prototyping, concept testing, or educational demonstrations.
- If you later wish to contribute your changes upstream, you will need to manually adapt your code to match the original architecture and submit a pull request.

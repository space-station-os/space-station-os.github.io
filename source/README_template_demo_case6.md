# Fully Standalone Demo (Scratch-Built)

This repository implements a self-contained demo developed from scratch without depending on `space_station_os`.

## Purpose

(Describe the purpose of this demo here, e.g., concept testing for a new space station mission sequence.)

## Prerequisites

(List your prerequisites here, e.g., Python 3.10+, ROS 2 optional, standalone simulation engine, etc.)

## Setup

To build:

    mkdir -p ros2_ws/src
    mv demo_xyz ros2_ws/src/
    cd ros2_ws
    colcon build

## Notes

- This repository does not depend on any components from `space_station_os`.
- Recommended for conceptual experiments or users not using ROS 2.
- If later integration is desired, interface alignment with SSOS may be necessary.

# Lightweight Demo Using Selected Nodes

This repository includes only selected components (e.g., a thermal node) copied from `space_station_os` for isolated testing.

## Purpose

(Describe the purpose of this demo here, e.g., testing a minimal thermal simulation without full SSOS infrastructure.)

## Prerequisites

(List your prerequisites here, e.g., ROS 2 Humble or later, specific dependencies such as sensor_msgs or std_srvs.)

## Setup

To build:

    mkdir -p ros2_ws/src
    mv demo_xyz ros2_ws/src/
    cd ros2_ws
    colcon build

## Notes

- This repository contains only the minimum required code from `space_station_os`.
- Recommended for users who want to focus on specific subsystems in isolation.
- Manual dependency resolution may be necessary.

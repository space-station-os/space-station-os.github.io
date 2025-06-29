# Demo Using a Forked Integration Repository

This demo works with a fork of `space_station_os` under active development.

## Purpose

(Describe the purpose of this demo here, e.g., evaluating alternate life support logic, testing fault tolerance behaviors, etc.)

## Prerequisites

(List your prerequisites here, e.g., ROS 2 Humble or later, Python 3.10+, simulation tools like Gazebo Harmonic, etc.)

## Setup

1. Fork `space_station_os` and clone both repositories:
    git clone https://github.com/yourname/space_station_os.git
    git clone https://github.com/yourname/demo_xyz.git
    mkdir -p ros2_ws/src
    mv space_station_os demo_xyz ros2_ws/src/

2. Build:
    cd ros2_ws
    colcon build

## Notes

- Changes should be pushed to your fork and optionally merged upstream via Pull Request.

---

> ### Optional: Updating the Integration Repository
> If you wish to fetch a newer version of `space_station_os` from upstream:
>
>     cd ros2_ws/src/space_station_os
>     git remote add upstream https://github.com/space-station-os/space_station_os.git
>     git fetch upstream
>     git checkout main
>     git merge upstream/main
>     cd ../../..
>     colcon build --packages-select space_station_os
>
> **Caution:** Please do not push directly to the upstream repository. If you intend to contribute changes, submit a pull request with proper documentation and testing.

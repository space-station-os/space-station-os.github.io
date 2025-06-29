# Demo Project using Git Submodule

This repository demonstrates a custom feature built upon `space_station_os`, which is included as a Git submodule.

## Purpose

(Describe the purpose of this demo here, e.g., testing custom thermal control logic, evaluating new GNC algorithm, etc.)

## Prerequisites

(List your prerequisites here, e.g., Python 3.10+, Gazebo Harmonic (or compatible simulator), ROS 2 Humble, etc.)

## Setup

Clone this repository with submodule:
    git clone --recurse-submodules https://github.com/yourname/demo_xyz.git
    cd demo_xyz

Then build the workspace:
    mkdir -p ros2_ws/src
    mv demo_xyz ros2_ws/src/
    cd ros2_ws
    colcon build

## Notes

- This project uses a fixed version of `space_station_os` as a submodule.
- This approach is suitable for development that is planned to be upstreamed later.
- You are free to explore and modify the code locally.

---

> ### Optional: Updating the Integration Repository
> If you wish to fetch a newer version of `space_station_os`, you can:
>
>     cd space_station_os
>     git checkout main  # or a specific tag
>     git pull
>     cd ..
>     git add space_station_os
>     git commit -m "Update submodule"
>
> **Caution:** If you plan to contribute your changes back to the integration repository,
> you must submit a pull request with appropriate justification and testing. Do not push directly to the main branch.

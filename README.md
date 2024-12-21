<img src="source/assets/logo/SSOS_LogoMark_TextSide_White_BGBlack.png" alt="Space Station OS Logo" width="50%" />



# Space Station OS

**Space Station OS** is an open-source platform advancing space station software, designed to facilitate operational research, simulation, and real-time control for space habitats. It leverages the **ROS 2 framework** and provides tools for tasks such as **Fault Detection, Isolation, and Recovery (FDIR)** with practical demos simulating space station scenarios.

---

## Requirements

To set up Space Station OS:
- **Ubuntu 22.04**
- **ROS 2 Humble** (desktop install)

After cloning this repository, source the ROS2 setup in your terminal, e.g., 
`source \opt\ros\humble\setup.bash`

Then, `colcon build` from the top level of the repository. 

Afterward, each terminal must also source the install, i.e., `source install\setup.bash`


---

## Demos

### Demo 1a - Nauka Incident

Recreates the ISS Nauka incident for fault analysis.

Run commands in multiple terminals (after sourcing):

- **Terminal 1**: `$ ros2 run space_station_gnc demo1a_nauka_incident_estimate`
- **Terminal 2**: `$ ros2 launch space_station_gnc launch_gnc.py`
- **Terminal 3**: `$ ros2 run rviz2 rviz2` (launches RVIZ)

---

## Features

- **FDIR Tools for Incident Response**
- **Simulated Propulsion and Attitude Control**
- **Real-time Visualization with RVIZ**
- **Community-driven, open-source architecture**

---

## TODOs 
- **Specify joints in URDF for Isaac Sim**
- **Decouple URDF components to isolate mechanics/physics**
- **Create Action Graph generator for Isaac Sim**
- **Implement simple method for deploying environmental dynamics**

---
## Contact

For further information, please reach out to us at: [info@spacestationos.org](mailto:info@spacestationos.org)

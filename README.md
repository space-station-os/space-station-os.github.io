<img src="assets/logo/spacedata_logo.png" alt="Space Station OS Logo" width="25%" />

# Space Station OS

**Space Station OS** is an open-source platform advancing space station software, designed to facilitate operational research, simulation, and real-time control for space habitats. It leverages the **ROS 2 framework** and provides tools for tasks such as **Fault Detection, Isolation, and Recovery (FDIR)** with practical demos simulating space station scenarios.

---

## Requirements

To set up Space Station OS:
- **Ubuntu 22.04**
- **ROS 2 Humble** (desktop install)

---

## Demos

### Demo 1a - Nauka Incident

Recreates the ISS Nauka incident for fault analysis. Run commands in multiple terminals:

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

## Contact

For further information, please reach out to us at: [info@spacestationos.org](mailto:info@spacestationos.org)

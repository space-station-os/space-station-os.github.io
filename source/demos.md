
<!--
layout: default
title: Demos
nav_order: 3
-->

# Demos

Explore practical demonstrations of Space Station OS in action.

---

**Demo 1a - Nauka Incident**

This demo recreates the ISS Nauka incident for fault analysis. Follow these steps:

1. **Source ROS 2 setup**:
   ```bash
   source /opt/ros/humble/setup.bash
   ```

2. **Clone the repository**:
   ```bash
   git clone https://github.com/space-station-os/space-station-os.git
   cd space-station-os
   ```

3. **Build the workspace**:
   ```bash
   colcon build
   source install/setup.bash
   ```

4. **Run the simulation**:
   ```bash
   ros2 run space_station_gnc demo1a_nauka_incident_estimate
   ```

5. **Launch visualizer**:
   ```bash
   ros2 run rviz2 rviz2
   ```

---

**Future Demos**
More demonstration scenarios will be added to showcase advanced features, including:
- Multi-agent coordination
- Fault Detection, Isolation, and Recovery (FDIR)
- Real-time simulations of complex space station environments

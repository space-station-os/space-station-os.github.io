<!--
layout: default
title: How_to_contribute
nav_order: 10
-->


# GitHub Contribution Workflow

## Pull Requests:

• Create a pull request (PR) for every change 

• PR Requirements: Link to an issue

 • Include a summary of changes and justification  
 
 ⇒ New classes/interfaces  

 ⇒ Impact on existing object hierarchies  
   
 ⇒ Tests added or modified  

•　Enforce tests passing before merging (Branch Protection)

•　Use peer reviews (via assignment; major integration or merges)

•　Require signed commits for security

•　Must include a proper License (Apache 2.0)

✓　(Desired) Include class diagrams or flowcharts explaining contributions

✓　CI/CD Integration: Modular build systems for independent compilation of classes/modules

# Manners for Joining a Community

•　Maintain professionalism in communications  

 ⇒ Please try to communicate clearly but kindly  
 
 ⇒ Please be realistic in your commitments  
 
•  Engage in collaborative problem-solving and knowledge sharing

# Engineering requirements (Features, Use Cases)  

## Feature Requests:  

•  Motivate reason (need, interest) with Use Case  

•  Document assumptions and dependencies  

•  Identify cross-package interactions and interfaces  

•  Define requirements in user stories and maintain traceability  

•  Define clear functional and non-functional requirements, linking them to system-level objectives  

•  New features should link to corresponding GitHub issues

•  Use (justify) verification and validation metrics for features

## Object-Oriented Design:

•  Classify modules as classes or objects (e.g., sensors, actuators, controllers).

•  Define interactions using design-by-contract principles (preconditions, postconditions, invariants).

•  Inclusion: Open to all contributors regardless of experience level

•  Support mentorship programs for new developers

# Testing Standards:

I. Unit Testing: Test individual classes and methods in isolation.Usemock objects to simulate dependencies

II. Integration Testing: Focus on interactions between objects and their interfaces

III. System Testing: Validate that contributions adhere to end-to-end requirements

IV. Design Principles in Testing: Test derived classes through their base class interfaces. Write test cases for edge cases (e.g., inheritance ambiguities)

V. Automated Testing:

i. Python: Use pytestfor unit and integration tests

ii. C++: Employ Google Test Framework

iii. Test Coverage: Maintain >85% (?) test coverage for critical modules

iv. Hardware Simulation: Validate numerical consistency with physical principles


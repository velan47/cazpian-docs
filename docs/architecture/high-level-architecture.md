---
id: high-level-architecture
title: High-Level Architecture
sidebar_label: High-Level Architecture
---

# High-Level Architecture

Cazpian follows a modern cloud-native architecture split between the Control Plane and the Data Plane.

## Core Components
1. **Control Plane**: Manages metadata, authentication, and job orchestration.
2. **Data Plane**: Where actual processing happens in the customer's AWS environment.
3. **AI Data Plane**: Specialized compute for running AI agents and LLM integrations.

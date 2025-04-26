# UI Policies

## Purpose:
Control field behaviors dynamically based on the State of the Incident.

## UI Policies Created:

### 1. When State is Resolved
- **Fields:** Resolved By, Resolved At
- **Behavior:** 
  - Make fields mandatory
  - Make fields read-only

### 2. When State is Closed
- **Fields:** Resolved By, Resolved At
- **Behavior:**
  - Make fields mandatory
  - Make fields read-only

## Notes:
- These fields become mandatory once incident is being closed or resolved.
- Ensures that no incident is closed without resolution information.

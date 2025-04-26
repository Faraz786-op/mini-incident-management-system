# Mini Incident Management System

## Overview
This project is a small simulation of an Incident Management System built on ServiceNow platform.

## Table Structure
- **Table Name**: Mini Incident [u_mini_incident]
- **Important Fields**:
  - Number (Auto-generated)
  - Short Description
  - Description
  - Impact
  - Urgency
  - Priority (Calculated based on Impact & Urgency)

## UI Policies
- Set fields to mandatory based on State changes.
- Make fields read-only after closure.

## Business Rules
- Auto-populate Number field.
- Auto-set Priority based on Impact and Urgency.

## Future Enhancements
- Add Email Notifications.
- Build SLA tracking.

---

# Table: u_mini_incident

## Purpose:
This table is created for the Mini Incident Management System to track incidents and their life cycle.

## Fields Created:

| Field Name      | Type              | Description                               | Mandatory | Read-Only |
|-----------------|-------------------|-------------------------------------------|-----------|-----------|
| Number          | String             | Auto-generated unique identifier         | Yes       | Yes       |
| Caller          | Reference (sys_user) | Person reporting the incident             | Yes       | No        |
| Short Description | String          | Brief description of the issue           | Yes       | No        |
| Description     | String             | Detailed description of the incident      | No        | No        |
| Impact          | Choice (High, Moderate, Low) | Impact level                  | Yes       | No        |
| Urgency         | Choice (High, Moderate, Low) | Urgency level                 | Yes       | No        |
| Priority        | Integer             | Calculated from Impact + Urgency          | Yes       | Yes       |
| State           | Choice (New, In Progress, Resolved, Closed) | Incident Status | Yes | No |
| Assignment Group | Reference (sys_user_group) | Support team handling the incident  | No        | No        |
| Assigned To     | Reference (sys_user) | Support individual assigned              | No        | No        |
| Resolved By     | Reference (sys_user) | Person who resolved the incident         | No        | Yes       |
| Resolved At     | Date/Time           | Time when incident was resolved           | No        | Yes       |

## Special Behaviors:
- **Number** auto-generates incrementally through Business Rule.
- **Priority** will be calculated based on Impact and Urgency (to be automated).

---

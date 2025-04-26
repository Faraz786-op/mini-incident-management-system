# Business Rules

## Purpose:
Automate data population when the incident is Resolved.

## Business Rule Created:

### 1. Set Resolved Information
- **Trigger:** Before Update
- **Condition:** [State] changes to [Resolved]
- **Action:**
  - Set `Resolved By` = current user (gs.getUserID())
  - Set `Resolved At` = current date/time (gs.nowDateTime())

## Example Script Used:
```javascript
(function executeRule(current, previous) {
    if (current.state == 'Resolved') {
        current.resolved_by = gs.getUserID();
        current.resolved_at = gs.nowDateTime();
    }
})(current, previous);

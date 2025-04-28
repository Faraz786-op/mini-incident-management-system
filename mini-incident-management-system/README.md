# 🚀 Mini Incident Management System - ServiceNow

This is a mini project created in ServiceNow to simulate a simple Incident Management System.  
It covers basic Incident functionalities like creating incidents, assigning, resolving, email notifications, reporting, and dashboarding.

---

## 🛠️ Features

- Create and manage Mini Incidents.
- Auto-generate Incident Number (MINC0001, MINC0002, etc.)
- Impact, Urgency, and automatic Priority calculation (1-High, 2-Moderate, 3-Low).
- Business Rules to update resolved fields.
- Email notification sent to "Assigned To" user.
- Two reports created:
  - Active Incidents
  - Incidents by State
- Dashboard displaying both reports.
- GitHub version-controlled project with documentation and screenshots.

---

## 🏗️ Technologies Used

- **ServiceNow** (Yokohama version)
- **Flow Designer / Business Rules**
- **Email Notifications**
- **Reports and Dashboards**
- **GitHub** for version control

---

## 🧩 Table Structure (`u_mini_incident`)

| Field Name         | Type            | Details                   |
|:-------------------|:----------------|:---------------------------|
| Number             | String           | Auto-generated             |
| Short Description  | String           | Mandatory                  |
| Description        | String           |                            |
| State              | Choice           | New, Assigned, In Progress, On Hold, Resolved, Closed |
| Assigned To        | Reference (User) | User who is assigned       |
| Impact             | Choice           | 1-High, 2-Moderate, 3-Low   |
| Urgency            | Choice           | 1-High, 2-Moderate, 3-Low   |
| Priority           | Integer          | Auto-calculated             |
| Resolved By        | Reference (User) | Auto-populated when resolved |
| Resolved At        | Date/Time        | Auto-populated when resolved |
| Created By         | Reference (User) | Auto-populated             |
| Created On         | Date/Time        | Auto-populated             |

---

## 📋 Business Rules

- **BR Set Resolved Info:**  
  When the Incident is moved to the Resolved state:
  - Set Resolved By = Current User
  - Set Resolved At = Current Date/Time

- **BR Send Assignment Email:**  
  When an Incident is assigned:
  - Send email notification to "Assigned To" user.

---

## 📊 Reports Created

- **Active Incidents Report**  
  (List of all open Incidents)

- **Incidents by State Report**  
  (Pie Chart showing Incident distribution per state)

---

## 📈 Dashboard

- **Mini Incident Dashboard** created showing:
  - Active Incidents
  - Incidents by State

---

## 📸 Screenshots

### 1. Table Structure
![Table Structure](screenshots/table_structure.png)

### 2. List View
![Form View](screenshots/incident_list_view.png)

### 3. Form View
![Form View](screenshots/incident_form_view.png)

### 4. Business Rules
![Business Rules](screenshots/business_rules.png)
- **If State==Resolved**
  ![Incidents Per Day](screenshots/br_set_resolved.png)
- **Setting Priority based on Urgency & Impact**
  ![Incidents Per Day](screenshots/br_priority.png)

### 5. Reports
- **Incidents by State**
  ![Incidents by State](screenshots/reports_by_state.png)
- **Incidents Day by Day**
  ![Incidents Per Day](screenshots/reports_incidents_per_day.png)

### 6. Dashboard View
![Dashboard](screenshots/dashboard_view.png)

### 7. Email Notification Log
![Email Log](screenshots/email_log.png)

---

## 🎯 Future Enhancements

- Add Flow Designer automation for Notifications.
- Create REST APIs for Incident creation and retrieval.
- Add SLAs for resolution times based on Impact/Urgency.
- Create Service Catalog Item for submitting Mini Incidents.
- Role-based access control (ACLs).

---

## 🧠 Author

- Faraz S.
- ServiceNow CSA | CAD | CIS-ITSM Certified
- Fresher Associate Software Engineer
- LinkedIn: *(You can add later if you want)*

---

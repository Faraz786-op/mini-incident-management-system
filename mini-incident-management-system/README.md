# 🚀 Mini Incident Management System - ServiceNow

This is a mini project created in ServiceNow to simulate a simple Incident Management System.  
It covers basic Incident functionalities like creating incidents, assigning, resolving, email notifications, reporting, and dashboarding.

---

## 🛠️ Features

- Create and manage Mini Incidents.
- Auto-generate Incident Number (INC0010001, INC0010002, etc.)
- Impact, Urgency, and automatic Priority calculation (1-High, 2-Moderate, 3-Low).
- Business Rules to update resolved fields.
- Email notification sent to "Assigned To" user.
- Two reports created:
  - Incidents Created per Day
  - Incidents by State
- Dashboard displaying both reports.
- Sets the state to Closed after 7 days automatically with Flow Designer.
- Auto-populate Description based on selected Category using GlideAjax + Script Include Functionality.
- GitHub version-controlled project with documentation and screenshots.

---

## 🏗️ Technologies Used

- **ServiceNow (Yokohama Version)** – Platform for building and deploying the Mini Incident Management System
- **Custom Tables & Forms** – Created `u_mini_incident` table with custom fields and UI Policies
- **Business Rules** – Server-side logic to automate state changes and data updates
- **Flow Designer** – No-code automation to schedule incident closure after resolution
- **Client Scripts + Script Includes (GlideAjax)** – Dynamic field updates using client-server communication
- **Email Notifications** – Triggered to assigned users for status awareness
- **Reports & Dashboards** – Visual representation of incidents by State and Days
- **GitHub** – Version control and project documentation
- **REST Outbound Integration (Demo)** – Demonstrated basic REST API call from ServiceNow

---

## 🧩 Table Structure (`u_mini_incident`)

| Field Name         | Type            | Details                   |
|:-------------------|:----------------|:---------------------------|
| Number             | String           | Auto-generated             |
| Short Description  | String           | Mandatory                  |
| Description        | String           |                            |
| State              | Choice           | New, Assigned, In Progress, Resolved, Closed |
| Assigned To        | Reference (User) | User who is assigned       |
| Impact             | Choice           | 1-High, 2-Moderate, 3-Low   |
| Urgency            | Choice           | 1-High, 2-Moderate, 3-Low   |
| Priority           | Integer          | Auto-calculated             |
| Resolved By        | Reference (User) | Auto-populated when resolved |
| Resolved At        | Date/Time        | Auto-populated when resolved |
| Resolution Notes   | String           | Visible when state changes to Resolved |
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

- **Incidents Created per Day Report**  
  (List of all Incidents Created per Day)

- **Incidents by State Report**  
  (Pie Chart showing Incident distribution per state)

---

## 📈 Dashboard

- **Mini Incident Dashboard** created showing:
  - Incidents Created Day by Day
  - Incidents by State

---

## 📸 Screenshots

### 1. Table Structure

![Table Structure](screenshots/table_structure.png)

### 2. List View

![List View](screenshots/incident_list_view.png)

### 3. Form View

![Form View](screenshots/incident_form_view.png)

### 4. Business Rules

![Business Rules](screenshots/business_rules.png)

- **If State==Resolved**
  
  ![If State==Resolved](screenshots/br_set_resolved.png)
  
- **Setting Priority based on Urgency & Impact**
  
  ![Setting Priority based on Urgency & Impact](screenshots/br_priority.png)

### 5. Reports

- **Incidents by State**
  
  ![Incidents by State](screenshots/reports_incidents_per_day.png)
  
- **Incidents Day by Day**
  
  ![Incidents Per Day](screenshots/reports_by_state.png)

### 6. Dashboard View

![Dashboard](screenshots/dashboard_view.png)

### 7. Email Notification Log

![Email Log](screenshots/email_log.png)

---

## ⚙️ Scheduled Flow to Auto-Close Incidents

This flow checks daily for any incidents that are in the **Resolved** state for over 7 days and automatically changes their state to **Closed**.

### 🔄 Flow Details:
- **Trigger Type:** Scheduled (Daily)
- **Conditions:**
  - State is `Resolved`
  - Resolved At is on or before Today - 7 days
- **Action:** Update record to set State = `Closed`

### 📸 Screenshots

| Description             | Screenshot |
|-------------------------|------------|
| Flow Properties         | ![Flow Properties](screenshots/flow_designer_properties.png) |
| Trigger Configuration   | ![Trigger](screenshots/flow_trigger_schedule.png) |
| Condition Set           | ![Conditions](screenshots/flow_conditions.png) |
| Action: Update State    | ![Update](screenshots/flow_action_update_state.png) |

---

## 💡 Feature: Auto-Set Description via Category (GlideAjax + Script Include)

This feature demonstrates the use of **Client Script** and **Script Include** with GlideAjax.

- When the **Category** field is changed, a client script sends the selected value to the Script Include using `GlideAjax`.
- The Script Include returns a default description for that category.
- The client script sets the returned value to the **Description** field.

📁 Files:
- `/ScriptInclude-GlideAjax/CategoryHelper.js`
- `/ScriptInclude-GlideAjax/CategoryClientScript.js`

🔁 Technologies Used: GlideAjax, Script Include, Client Script (onChange)

---

## 🔄 REST Integration Demo

This project includes a basic REST integration using [webhook.site](https://webhook.site) to simulate sending incident data to an external endpoint.

### ✔️ How It Works
- A REST Message is triggered via Business Rule whenever an incident is updated.
- JSON payload is posted to an external endpoint with details like:
  - Incident Number
  - Short Description
  - State

### 📸 Screenshots

| Description                    | Screenshot |
|-------------------------------|------------|
| REST Message Config with Header| ![REST Message](screenshots/rest_message_config.png) |
| HTTP Method Content            | ![HTTP Method](screenshots/rest_message_http_method.png) |
| Business Rule Script           | ![Business Rule](screenshots/business_rule_rest_call.png) |
| Webhook Response Received      | ![Webhook](screenshots/webhook_response.png) |

---

## 🎯 Future Enhancements

- Add Flow Designer automation for Notifications.
- Add SLAs for resolution times based on Impact/Urgency.
- Create Service Catalog Item for submitting Mini Incidents.
- Role-based access control (ACLs).

---

## 🧠 Author

- Faraz Shariq.
- ServiceNow CSA | CAD | CIS-ITSM Certified
- Associate Software Engineer
- LinkedIn: www.linkedin.com/in/faraz-shariq

---

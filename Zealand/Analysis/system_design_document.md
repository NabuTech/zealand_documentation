# System Design Document

## Project: Zealand Immigration Website Redesign and Integration
### By: Development Team

---

### 1 Introduction

#### 1.1 Purpose

We are developing this solution to address the outdated and inefficient website design and integration of the Zealand Immigration website. The goal is to enhance customer engagement, streamline internal operations, and integrate with external systems such as Zoho CRM and Stripe.

#### 1.2 Description

The solution involves redesigning the website with a modern, responsive interface, developing a robust backend system, integrating with Zoho CRM and Stripe, and implementing a new content management system (CMS).

#### 1.3 Scope

User stories in scope for this release:
- **User Story 1**: As a prospective immigrant, I want to register on the website so that I can submit my inquiries.
- **User Story 2**: As an administrator, I want to manage inquiries efficiently so that I can provide timely responses.
- **User Story 3**: As a manager, I want to track the progress of user registrations and inquiries to ensure smooth operations.
- **User Story 4**: As a developer, I want to ensure seamless integration with Zoho CRM and Stripe so that data flows smoothly.

#### 1.4 Target Users

- Prospective immigrants (end users)
- Internal staff (administrators)
- Managers
- Developers

---

### 2 Solution Design

#### 2.1 Architecture Overview

The solution will be built using a Content Management System (CMS) which provides the engine for the website, and allows a simple and fast way to develop a first working solution. The diagram below gives an overview of one CMS architecture, for the Django framework, which is based on the Model-View-Controller pattern.

The CMS provides developers with templates for:
- The models (which are the entities to be stored in the database)
- The views (which represent the user interface or web pages that get displayed on the browser)

The CMS provides:
- The controller through its framework and the URL dispatcher

Developers will define the Views (based on templates) and the Models and the CMS will provide the rest.

![Django Architecture Diagram](https://www.slideshare.net/fishwarter/the-django-web-application-framework-2-1221388)

#### 2.2 Model Design (Data Model)

This is the “model” part of the MVC pattern. We refine the high-level business domain model and create a detailed data model with all the entities that we will need to store in the database, with their attributes and relationships.

**Entities and Attributes:**
- **Users**
  - UserID (PK)
  - Username
  - PasswordHash
  - Email
  - FullName
  - PhoneNumber
  - Address
  - Role
- **Inquiries**
  - InquiryID (PK)
  - UserID (FK)
  - InquiryType
  - SubmissionDate
  - Status
  - Content
- **Transactions**
  - TransactionID (PK)
  - UserID (FK)
  - Amount
  - Date
  - PaymentStatus
  - PaymentMethod
- **CRMData**
  - CRMDataID (PK)
  - UserID (FK)
  - CRMStatus
  - CRMNotes
- **UploadedFiles**
  - FileID (PK)
  - UserID (FK)
  - FileType
  - FilePath
  - UploadDate
  - Status

#### 2.3 Functional Decomposition

From the user stories, we identify the types of functions needed on each entity, and which users will be performing them. This provides the basis for identifying the Views that will be needed.

**Users**
- Register (End User)
- Login (End User)
- Manage Profile (End User)

**Inquiries**
- Submit Inquiry (End User)
- View Inquiries (Administrator)
- Update Inquiry Status (Administrator)

**Transactions**
- Process Payment (End User)
- View Transactions (Administrator)

**CRMData**
- Sync with Zoho CRM (Developer)
- View CRM Data (Administrator)

**UploadedFiles**
- Upload File (End User)
- View Files (Administrator)

#### 2.4 View Design (UI List)

List the user interfaces needed to perform each user story.

##### 2.4.1 User Story 1

- Registration Page
- Login Page

##### 2.4.2 User Story 2

- Inquiry Management Dashboard
- Inquiry Detail View

##### 2.4.3 User Story 3

- Management Dashboard
- User Inquiry Tracking Page

##### 2.4.4 User Story 4

- Integration Settings Page
- Transaction Management Page

#### 2.5 Design Considerations

This section includes technical aspects derived from the non-functional requirements.

##### 2.5.1 Performance

The system should handle up to 10,000 concurrent users with fast load times.

##### 2.5.2 Scalability

The architecture should support future growth and feature additions.

##### 2.5.3 Security

Implement robust security measures including encryption and access control.

##### 2.5.4 Usability

The interface should be intuitive and user-friendly for all types of users.

---

### 3 Detailed Design

The detailed design of the user interfaces will be documented individually, in separate documents.


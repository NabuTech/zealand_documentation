# Business Requirements Document

## Zealand Immigration Website Redesign and Integration
### Team Name: Development Team

---

### 1 Problem Overview

#### 1.1 Introduction

This document outlines the business requirements for the redesign and integration of the Zealand Immigration website. The goal is to enhance customer engagement, streamline internal operations, and integrate with external systems such as Zoho CRM and Stripe.



#### 1.2 Statement of Problem or Need

The problem of outdated and inefficient website design and integration affects both customers and internal stakeholders. Customers struggle with a non-responsive and unengaging user interface, leading to lower satisfaction and engagement. Internal stakeholders face challenges with inefficient backend systems, cumbersome content management, and lack of integration with CRM and payment gateways. 

The impact of this problem is significant: reduced customer satisfaction, lower conversion rates, increased operational inefficiencies, and higher maintenance costs. A successful solution would modernize the website, improve user engagement, streamline content management, and ensure seamless integration with Zoho CRM and Stripe, thereby enhancing both customer experience and internal operational efficiency.

#### 1.3 Description of Current Situation

##### 1.3.1 Business/System Context Diagram

*To be created.*

##### 1.3.2 Current Business Processes

## Current User Interaction
- User visits the website.
- User navigates through web pages.
- User submits inquiries or requests via basic forms, call, WhatsApp, Email
- Internal team manually processes inquiries that come in through
    - Email (Entered into Mailing List)
    - CRM Lead (Automated to Zoho CRM)
    - Whats App (Need to Understand)
    - Phone Call (Entered into Mailing List, Zoho CRM)
- Payment transactions are handled through Stripe through Website
    - User
    - Front Office

## Managing Website
- SEO Report to GM
- Content updates are decided by GM/Agents/Front Office
- Blog Posts/Content Update Provided to Website Management Company
- Website Management Company Updates 
- GM/Agents/Front Office check content (loop with Updates)



##### 1.3.3 Activity Sequence Diagram for One Business Process

*To be created.*

---

### 2 Business Requirements

#### 2.1 Business Requirements

##### 2.1.1 List of Stakeholders

- Customers (prospective immigrants)
- Internal Staff (customer service, content managers)
- Management
- IT Team
- Zoho CRM Team
- Stripe Payment Gateway Team

##### 2.1.2 List of Business Requirements

- Modern, responsive website design.
- Improved user interface and user experience.
- Seamless integration with Zoho CRM.
- Integration with Stripe for payment processing.
- Robust content management system (CMS).
- Enhanced security and data protection measures.
- Scalable architecture to accommodate future growth.

##### 2.1.3 Project Scope

The project includes the redesign of the Zealand Immigration website, development of a new backend system, integration with Zoho CRM and Stripe, and implementation of a new CMS. The scope also covers testing, deployment, and user training.

#### 2.2 Description of Future State

##### 2.2.1 Future State System Context Diagram

*To be created.*

##### 2.2.2 Future Business Processes

- User visits the modernized website.
- User interacts with a responsive and engaging user interface.
- User submits inquiries or requests via dynamic forms.
- Integrated system processes inquiries and updates Zoho CRM automatically.
- Payment transactions are processed seamlessly through Stripe integration.
- Content updates are managed efficiently through the new CMS.

##### 2.2.3 Activity Sequence Diagram for One Business Process

*To be created.*

---

### 3 Business Solution

#### 3.1 Options Considered

##### 3.1.1 Options

- **Option 1**: Continue with current design and development team.
- **Option 2**: Refactor design and change architecture.
- **Option 3**: Move to an out-of-the-box website builder.
- **Option 4**: Build the website with a new development team.

##### 3.1.2 Evaluation Criteria

- Cost
- Time to market
- Scalability
- Customization
- Maintenance

##### 3.1.3 Evaluation

**Option 1**: Continue with Current Design and Development Team
- **Cost**: Low
- **Time to market**: Moderate
- **Scalability**: Limited
- **Customization**: Low
- **Maintenance**: High

**Option 2**: Refactor Design and Change Architecture
- **Cost**: High
- **Time to market**: Long
- **Scalability**: High
- **Customization**: High
- **Maintenance**: Moderate

**Option 3**: Move to an Out-of-the-Box Website Builder
- **Cost**: Low
- **Time to market**: Short
- **Scalability**: Limited
- **Customization**: Low
- **Maintenance**: Moderate

**Option 4**: Build the Website with a New Development Team
- **Cost**: Very High
- **Time to market**: Long
- **Scalability**: High
- **Customization**: High
- **Maintenance**: Low

| Evaluation Criteria | Option 1 | Option 2 | Option 3 | Option 4 |
|---------------------|----------|----------|----------|----------|
| Cost                | 3        | 1        | 4        | 2        |
| Time to market      | 2        | 3        | 1        | 4        |
| Scalability         | 4        | 2        | 3        | 1        |
| Customization       | 4        | 2        | 3        | 1        |
| Maintenance         | 3        | 2        | 4        | 1        |
| **Overall Ranking** | **3**    | **2**    | **1**    | **4**    |

#### 3.2 Recommended Solution

##### 3.2.1 Business Solution Outline

**Solution Position Statement**

For Zealand Immigration, who need to enhance customer engagement and streamline internal operations, the proposed redesigned website is a comprehensive web solution that provides a modern user interface, seamless CRM and payment integration, and efficient content management. Unlike the current outdated system, our solution offers improved user experience, operational efficiency, and scalability.

##### 3.2.2 Main Features

1. Modern, responsive design using React.
2. Seamless integration with Zoho CRM and Stripe.
3. Robust content management system (CMS).

##### 3.2.3 Unique Value Proposition / Justification

Our recommended solution is unique due to its combination of a modern, user-friendly interface, seamless integration capabilities, and efficient content management. This approach not only addresses the immediate needs of improved user engagement and operational efficiency but also provides a scalable foundation for future growth. The choice of React, Django, Zoho CRM, and Stripe ensures that the system is built using robust, reliable technologies that are well-supported and widely used.

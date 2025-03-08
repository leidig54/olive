# Olive Bootcamp Website

This is the landing page for the Olive Bootcamp, a 6-week program that helps Palestinian entrepreneurs build and launch their startups.

## Setup and Deployment

### Prerequisites
- Node.js and npm installed
- Formspree CLI (for form handling)

### Local Development
1. Clone this repository
2. Open `index.html` in your web browser to view the site locally

### Form Handling with Formspree CLI
This site uses Formspree for handling form submissions via a form endpoint created with the Formspree CLI.

The form is set up to:
- Send notifications to the email associated with your Formspree account
- Redirect users to the thanks.html page after successful submission
- Process submissions securely through Formspree's service

### Form Configuration
The form uses a direct Formspree endpoint URL in the action attribute:
```html
<form id="apply-form" action="https://formspree.io/p/2688535783240892369/f/applicationForm" method="POST">
```

### Setting Up Formspree CLI
This form was created using the Formspree CLI. To set up similar forms:

1. Install the Formspree CLI:
   ```
   npm install -g @formspree/cli
   ```

2. Initialize a formspree.json file:
   ```
   formspree init
   ```

3. Edit the formspree.json file to define your forms

4. Deploy the configuration:
   ```
   formspree deploy
   ```

5. Use the provided endpoint URL in your HTML form's action attribute

### Customizing the Form
To change the form settings:

1. Log in to your Formspree dashboard
2. Navigate to the form
3. Update settings such as email notifications, redirects, and spam protection

## Website Structure
- `/index.html` - Main landing page
- `/thanks.html` - Thank you page after form submission
- `/css/` - Stylesheet directory
- `/js/` - JavaScript directory
- `/images/` - Image assets


# Olive Bootcamp Website

This is the landing page for the Olive Bootcamp, a 6-week program helping Palestinian entrepreneurs go from idea to MVP.

## Setup and Deployment

### Prerequisites
- Node.js and npm installed
- Formspree CLI (for form handling)

### Local Development
1. Clone this repository
2. Open `index.html` in your web browser to view the site locally

### Form Handling with Formspree
This site uses Formspree for handling form submissions. The form is configured with a direct form endpoint.

The form is set up to:
- Send notifications to the email associated with the Formspree form
- Include the subject "New Olive Bootcamp Application"
- Redirect users to the thanks.html page after submission
- Protect from spam with a honeypot field

### Form Configuration
The form uses the standard Formspree endpoint URL:
```html
<form id="apply-form" action="https://formspree.io/f/xvoeqdpd" method="POST">
```

### Customizing the Form
To change the form configuration:

1. Log in to your Formspree account at https://formspree.io/
2. Navigate to the form with ID "xvoeqdpd"
3. Update the settings as needed (email recipients, redirects, etc.)

### Redirects
After form submission, users will be redirected to the `thanks.html` page as specified in the form's `_next` hidden field.

## Website Structure
- `/index.html` - Main landing page
- `/thanks.html` - Thank you page after form submission
- `/css/` - Stylesheet directory
- `/js/` - JavaScript directory
- `/images/` - Image assets

## Contact
For questions or updates, contact [george@olivestartups.org](mailto:george@olivestartups.org).
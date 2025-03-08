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
This site uses Formspree for handling form submissions. The configuration is in `formspree.json`.

To set up Formspree:

1. Install the Formspree CLI:
   ```
   npm install -g @formspree/cli
   ```

2. Log in to Formspree:
   ```
   formspree login
   ```

3. Deploy your form configuration:
   ```
   formspree deploy
   ```

The form is already configured to use the form ID `xrgyzrwj`. The submission will be emailed to the address specified in the `formspree.json` file.

### Customizing the Form
To change the form configuration:

1. Edit the `formspree.json` file
2. Run `formspree deploy` to update your form settings

### Redirects
After form submission, users will be redirected to the `thanks.html` page as specified in the `formspree.json` file.

## Website Structure
- `/index.html` - Main landing page
- `/thanks.html` - Thank you page after form submission
- `/css/` - Stylesheet directory
- `/js/` - JavaScript directory
- `/images/` - Image assets

## Contact
For questions or updates, contact [george@olivestartups.org](mailto:george@olivestartups.org).
# Syllabus Builder and Manager

Syllabus Builder is a web-based tool designed to streamline the process of creating and managing syllabi. Users can easily build syllabi, download them as PDFs, and store them in a database. Once finalized, syllabi become read-only, but they can be edited under specific conditions by re-entering the course name.

## Features

- **Create Syllabus**: Use intuitive forms to build a syllabus.
- **Download PDF**: Generate and download syllabi in PDF format.
- **Database Storage**: Save syllabi in a MongoDB database for persistence.
- **Finalization**: Mark syllabi as read-only once completed.
- **Conditional Editing**: Edit finalized syllabi by retyping the course name.

## Technology Stack

- **Frontend**: React (with React Router v7, library approach)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (managed locally via MongoDB Compass)

## Future Enhancements

- Add user authentication for managing syllabus access.
- Implement versioning for finalized syllabi.
- Enable deployment to a live environment (if required later).

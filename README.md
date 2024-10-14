# Docify

**Docify** is a document management web application, similar to Google Docs, that allows users to create, update, and manage documents seamlessly. The application leverages the **Jodit Editor** for rich-text editing, offering a user-friendly experience for managing document content.

## Features

- **Create Documents**: Users can create new documents and add content with the Jodit Editor.
- **Update Documents**: Edit existing documents in real-time with smooth content synchronization.
- **Delete Documents**: Remove unwanted documents from the system.
- **Rich Text Editing**: Powered by Jodit Editor for WYSIWYG (What You See Is What You Get) document editing.
- **User Authentication**: Ensure that only authenticated users can manage documents.

## Tech Stack

- **Frontend**: React, Jodit Editor
- **Backend**: Node.js (Express)
- **Database**: MongoDB (or any other backend database)
- **API Communication**: RESTful API with `fetch` for CRUD operations

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/docify.git

2. Navigate to the project directory:
    ```bash
    cd docify
    
3. Install dependencies for the frontend:
   ```bash
   npm install
   
4. Set up environment variables: Create a .env file in the root of the project with the following:
   ```bash
     VITE_API_BASE_URL=<Your Backend API Base URL>


## Usage

1. Start the development server:
   ```bash
   npm run dev
   
2. Open your browser and navigate to:
   ```bash
   http://localhost:5173

### API Endpoints

1. POST /uploadDoc: Upload or update the content of a document.
2. POST /getDoc: Retrieve the content of a specific document.

### Dependencies

vite: Bundler for lightning-fast builds and development.

react-router-dom: For routing and navigation.

Jodit Pro React: WYSIWYG editor for rich-text editing.

fetch: For API communication with the backend.

### How to Contribute
  Fork the repository.
  
  Create a new feature branch (git checkout -b feature-branch).
  
  Make your changes and commit (git commit -am 'Add new feature').
  
  Push to the branch (git push origin feature-branch).
  
  Create a Pull Request.
  
### Future Enhancements

  Add support for real-time collaboration.
  
  Implement document sharing and permission settings.
  
  Improve the overall UI/UX design.

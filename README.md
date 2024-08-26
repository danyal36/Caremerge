
# Caremerge Test

## Introduction

The Caremerge Test is a Node.js-based project designed to measure your understanding of asynchronous control flow. The task involves creating a server that fetches the titles of websites provided as query parameters and returns them in HTML format. This repository showcases three different implementations of the task, each using a distinct control flow strategy.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or later)

### Installation

Follow these steps to set up and run the application:

1. **Clone the Repository:**

   Start by cloning the repository to your local machine:

   \`\`\`bash
   git clone git@github.com:danyal36/Caremerge.git
   cd Caremerge
   \`\`\`

2. **Install Dependencies:**

   Install the required Node.js dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. **Run the Server:**

   To start the server using Async implementation use the following command:

   \`\`\`bash
   node usingAsync.js
   \`\`\`

   This will start the server on port \`3000\`.

   To start the server using Plain node.js callback implementation use the following command:

   \`\`\`bash
   node usingPlain.js
   \`\`\`

   This will start the server on port \`3000\`.
   
   To start the server using Promises implementation use the following command:

   \`\`\`bash
   node usingPlain.js
   \`\`\`

   This will start the server on port \`3000\`.

4. **Access the Application:**

   Open your web browser and navigate to the following URL to access the application:

   \`\`\`
   http://localhost:3000/I/want/title?address=google.com
   \`\`\`

5. **Stopping the Server:**

   To stop the server, press \`Ctrl+C\` in the terminal.

## Additional Information

For troubleshooting and further details on the project, please refer to the documentation or the project’s wiki.

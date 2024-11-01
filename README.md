Server side code link: https://github.com/devalienbrain/the-master-full-stack-project-client
Client side Live deploy (Vercel) Link: [https://the-master-full-stack-project-client.vercel.app/
](https://github.com/devalienbrain/the-master-full-stack-project-client)

BookMania
This is a full-stack book shop  where users can register, log in, view and update their profiles, and where admins can manage users' roles and statuses.

Features
User Registration: Users can sign up by providing their name, phone number, photo URL, address, email, and password.
Login and Authentication: User authentication is handled by Firebase, and email addresses cannot be changed once registered.
MongoDB Integration: After registration, user details are stored in MongoDB, and each user is linked to Firebase via a unique UID.
Role-Based Dashboard:
Admin Dashboard: Admin users can view all registered users, change their roles (Admin/User), block/unblock users, and monitor system activity.
User Dashboard: Regular users can view and update their profile details (except email, role, and block status).
Admin:
Email: admin@gmail.com
Password: 123456

Blocked Users: Blocked users will only see their profile page and the option to log out. They cannot access other features or update their profile details.
Key Functionality
Registration:

New users register via Firebase by providing their basic information.
After registration, user data is sent to MongoDB with a unique UID for linking Firebase and MongoDB.
By default, users are assigned the role of 'User' and are 'Active'.
Login:

Users log in via Firebase authentication.
After successful login, users are redirected to their respective dashboards based on their role:
Admin Dashboard: Allows admins to manage user roles and status.
User Dashboard: Allows users to view and edit their profile details.
Admin Features:

Admins can view all users and change their roles between 'Admin' and 'User'.
Admins can block or unblock users.
A blocked user cannot access any feature except viewing their profile and logging out.
User Features:

Users can update their profile details (name, phone, photo URL, address) but cannot change their email, role, or active/block status.
Blocked users have limited access to only their profile and a logout option.
Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Firebase (for login and user authentication)
State Management: Redux (for handling authentication state and data)
Admin Credentials

To log in as the  Admin, use the following credentials:

Email: gmail.com
Password: 123456

Installation & Setup
Clone the repository:

git clone <repo-link>
cd <repo-folder>
Install the dependencies:

git clone <repo-link>
cd <repo-folder>
Set up Firebase: Add your Firebase configuration details to the .env file. Enable Firebase Authentication for Email/Password sign-in.

Set up MongoDB: Create a MongoDB database and add the URI to the .env file. Run the project:

Copy code
npm run dev


React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
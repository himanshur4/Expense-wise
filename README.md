# Expense-wise 💸📊

**Expense-wise** is a full-stack expense tracking application that helps users manage their spending with visual insights. Built with a GraphQL backend, secure authentication using Passport.js, and a dynamic frontend powered by React and Chart.js.
**Live Preview:** https://expense-wise-o97x.onrender.com
---

## 🚀 Features

- 🔐 Secure authentication using Passport.js
- 🧾 Add, view, and delete expenses, savings and investments
- 📈 Interactive charts powered by Chart.js
- ⚡ GraphQL API for flexible data queries
- 🧠 MongoDB database for persistent storage
- 📱 Responsive and modern UI

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **GraphQL (Apollo Server)**
- **Passport.js** for authentication
- **React.js**
- **Apollo Client** for GraphQL queries
- **Chart.js** for data visualization
- **Tailwind CSS** 
- **Aceternity UI**
---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/himanshur4/Expense-wise.git
cd Expense-wise
```

### 2. Setup the backend
```bash
cd server
npm install
# Add your environment variables (see below)
npm run dev
```

### 3. Setup the frontend
```bash
cd ../client
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`server/.env`)
```
PORT=5000
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
```

---

## 📊 Screenshots

![image](https://github.com/user-attachments/assets/035ab5d7-30ac-4b2a-8652-0528b8d2a1a1)

---

## 📁 Folder Structure

```
/client         # React frontend
/server         # Express GraphQL backend
```

---

## 🙌 Contributing

Contributions are welcome! If you'd like to suggest improvements or fix bugs, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

# 🚗 FASTag Dashboard

A modern, responsive **FASTag Wallet Dashboard** built with **React.js** and **Tailwind CSS**.  
Users can manage their FASTag wallet, recharge their account, and view complete recharge & transaction history — all in one place.

---

## ✨ Features

- 🔒 **Authentication** – Secure login with session persistence.
- 💳 **Wallet Management** – View current balance and recharge instantly.
- 📜 **Recharge History** – Displays all past transactions and recharges.
- 🧭 **Dynamic Dashboard Navigation** – Sidebar with active page routing.
- 📱 **Responsive Design** – Fully optimized for desktop, tablet, and mobile.
- ⚙️ **LocalStorage Data Persistence** – Keeps user data even after refresh.
- 🔔 **Instant UI Updates** – Balance and transactions sync across all pages.

---

## 🧩 Tech Stack

- **Frontend:** React.js (Vite or CRA)
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Storage:** LocalStorage & SessionStorage
- **Icons:** React Icons (Feather Icons)

---

## 📁 Project Structure

src/
├── components/
│ ├── auth/
│ │ ├── LoginModalEmailJS.jsx
│ │ └── PrivateRoute.jsx
│ │
│ ├── layout/
│ │ ├── DashboardNavbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Navbar.jsx
│ │ └── SideBar.jsx
│ │
│ ├── sections/
│ │ ├── AboutUs.jsx
│ │ ├── FAQ.jsx
│ │ ├── FastagBanner.jsx
│ │ ├── HeroBanner.jsx
│ │ ├── HeroSection.jsx
│ │ ├── ProvidersSection.jsx
│ │ ├── ProvidersSectionInteractive.jsx
│ │ └── TopBanner.jsx
│ │
│ └── ui/
│ ├── ProviderCard.jsx
│ └── ProviderModal.jsx
│
├── data/
│
├── pages/
│ ├── Dashboard.jsx
│ ├── DashboardHome.jsx
│ ├── HelpSupport.jsx
│ ├── Home.jsx
│ ├── Offers.jsx
│ ├── RechargeHistory.jsx
│ └── WalletHistory.jsx
│
├── App.jsx
├── index.css
└── main.jsx

---

## ⚡ Installation & Setup

Follow these simple steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/adityasoam55/Fast-tag

# 2️⃣ Move into the project folder
cd fastag-dashboard

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev



🔧 Key Functionalities
💰 Add Money

Click the Card icon in the top navigation bar.

Enter an amount to add.

Balance updates instantly (synced via LocalStorage).

📄 Recharge & Wallet History

Navigate via the Sidebar.

Displays all previous recharge transactions stored in LocalStorage.

📊 Dashboard Home

Shows top banner with current balance.

Displays available providers and FAQs.

🧑‍💻 Author -
👨‍💻 Aditya Som
Frontend Developer | ReactJS | Tailwind CSS | REST APIs
```

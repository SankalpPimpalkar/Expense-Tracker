# 💸 Personal Expense Tracker API

A Django REST Framework-powered backend for tracking **income**, **expenses**, and **categories** with a financial **summary dashboard**. Built with PostgreSQL and containerized using Docker.

---

## 🚀 Features

- Manage expenses with amount, date, category, and description
- Track income records with sources
- Categorize expenses (Food, Rent, Travel, etc.)
- Get financial summary: total income, expenses, and balance
- RESTful API with browsable UI (DRF)
- PostgreSQL database
- Dockerized setup for easy deployment

---

## 🛠️ Technologies Used

- Django
- Django REST Framework
- PostgreSQL
- Docker & Docker Compose

---

## 🚏 API Routes

```bash
http://localhost:8000/api/expense/ — List expenses
http://localhost:8000/api/income/ — List income
http://localhost:8000/api/summary/ — Financial summary (shows balance)
http://localhost:8000/admin/ — Django admin
```

---
## ⚙️ Setup Instructions

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/SankalpPimpalkar/Expense-Tracker.git
cd Expense-Tracker
```

---
### 🐍 2. Run Without Docker (Update DB setting to cloud or sqlite)

Create virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations and start the server:

```bash
python manage.py migrate
python manage.py runserver
```

---
### 🐳 3. Run With Docker (Recommended)

Ensure Docker & Docker Compose are installed.

```bash
docker-compose up -d --build
```

Then run:

```bash
docker-compose exec web python manage.py migrate
docker-compose exec web python manage.py createsuperuser
```
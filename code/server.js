const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Підключення до MongoDB
mongoose.connect('mongodb://localhost/PSDRegisterBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Створення схеми користувача
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Створення моделі користувача
const User = mongoose.model('User', userSchema);

app.use(express.json());

const accessCode = '5mH9T2xi'; // Унікальний код доступу

app.post('/register', async (req, res) => {
  const { username, email, password, confirm_password, provided_access_code } = req.body;

  // Валідація імені користувача (унікальність)
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send({ message: 'Email already exists' });
  }

  // Валідація електронної пошти
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send({ message: 'Invalid email format' });
  }

  // Валідація пароля (мінімальна довжина - 6)
  if (password.length < 6) {
    return res.status(400).send({ message: 'Password must be at least 6 characters long' });
  }

  // Перевірка співпадіння паролів
  if (password !== confirm_password) {
    return res.status(400).send({ message: 'Passwords do not match' });
  }

  // Перевірка унікального коду 
  if (provided_access_code !== accessCode) {
    return res.status(401).send({ message: 'Invalid access code' });
  }

  // Хешування пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  // Створення нового користувача
  const newUser = new User({
    username,
    email,
    password: hashedPassword
  });

  try {
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error registering user' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

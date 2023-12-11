const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/PSDRegisterBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Lesson = mongoose.model('Lesson', lessonSchema);

app.use(express.json());

const accessCode = '5mH9T2xi';

app.post('/register', async (req, res) => {
  const { username, email, password, confirm_password, provided_access_code } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send({ message: 'Email already exists' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send({ message: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.status(400).send({ message: 'Password must be at least 6 characters long' });
  }

  if (password !== confirm_password) {
    return res.status(400).send({ message: 'Passwords do not match' });
  }

  if (provided_access_code !== accessCode) {
    return res.status(401).send({ message: 'Invalid access code' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

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

app.post('/save-lesson', async (req, res) => {
  const { title, content } = req.body;

  try {
    const lesson = new Lesson({ title, content });
    await lesson.save();
    res.status(201).send({ message: 'Lesson saved successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error saving lesson' });
  }
});

app.get('/lesson/:title', async (req, res) => {
  try {
    const lesson = await Lesson.findOne({ title: req.params.title });
    if (!lesson) {
      return res.status(404).send({ message: 'Lesson not found' });
    }
    res.send(lesson);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving lesson' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

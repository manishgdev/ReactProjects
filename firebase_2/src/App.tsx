import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { NavBar } from './components/navbar';
import { CreatePost } from './pages/create-post/create-post';

/*
  npm install react-router-dom
  npm install firebase
  npm install react-firebase-hooks
  npm install react-hook-form yup @hookform/resolvers

  firestore: PERMISSION_DENIED: Missing or insufficient permissions
  In Firestore Console go to Rules tab update the rules to below ** allow read, write: if request.auth != null;** 

  rules_version = '2';

  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if request.auth != null;
      }
    }
  }

  An Advanced version of above rules to check the userID coming from the request matches the uid in auth object or not, if matches then only allow to write
  read the posts when the user is logged in, this will make user to read other's posts also

  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow write, delete, update: if request.auth != null && request.auth.uid == request.resource.data.userId;
        allow read: if request.auth != null;
      }
    }
  }

*/
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

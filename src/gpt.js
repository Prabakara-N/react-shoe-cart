import { useState, useEffect } from 'react';
import { useAuth } from './firebase/AuthContext';
import { useFirestore } from './firebase/FirestoreContext';

function UserProfile() {
  const { currentUser } = useAuth();
  const firestore = useFirestore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  // Retrieve user profile from Firestore
  const getUserProfile = async () => {
    const userProfile = await firestore.collection('users').doc(currentUser.uid).get();
    setName(userProfile.data().name);
    setEmail(userProfile.data().email);
    setProfilePicture(userProfile.data().profilePicture);
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  // Update user profile in Firestore
  const saveUserProfile = async (e) => {
    e.preventDefault();
    await firestore.collection('users').doc(currentUser.uid).update({
      name,
      email,
      profilePicture
    });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={saveUserProfile}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input type="text" id="profilePicture" value={profilePicture} onChange={e => setProfilePicture(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

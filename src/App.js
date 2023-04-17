import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// import pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import UserInfo from "./pages/UserInfo";
import AddProfile from "./pages/AddProfile";
import Error from "./pages/Error";
import { UserAuth } from "./contexts/AuthContext";
import { db, storage } from "./utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

const App = () => {
  const {
    user,
    isEditing,
    setUserName,
    setImageAsset,
    setEmail,
    setNumber,
    setAddress,
    setIsDone,
    setDocId,
    setIsLoading,
  } = UserAuth();

  const fetchUserDetails = async () => {
    if (user && user?.uid) {
      const q = query(
        collection(db, "userInfo"),
        where("userId", "==", user?.uid)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.map((doc) => {
        setDocId(doc.id);
        const userData = doc.data();
        console.log(userData);
        if (userData) {
          setUserName(userData.userName);
          setImageAsset(userData.image);
          setEmail(userData.email);
          setNumber(userData.number);
          setAddress(userData.address);
          setIsDone(true);
        } else {
          setIsDone(false);
        }
        return doc.id;
      });
    }
  };

  const uploadProfile = (img) => {
    setIsLoading(true);
    if (img) {
      const imageFile = img;
      const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(uploadProgress);
        },
        (error) => {
          toast.error(`Error while uploading : Try Again...`);
          console.log(error);
          setTimeout(() => {
            setIsLoading(false);
          }, 4000);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageAsset(downloadURL);
            setIsLoading(false);
            toast.success("Image uploaded successfully...!");
          });
        }
      );
    }
  };

  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="home"
            element={
              <Home
                fetchUserDetails={fetchUserDetails}
                uploadProfile={uploadProfile}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/userinfo/:id"
            element={
              <UserInfo
                fetchUserDetails={fetchUserDetails}
                uploadProfile={uploadProfile}
              />
            }
          />
          <Route path="/addprofile" element={<AddProfile />} />
          <Route
            path="/editprofile/:id"
            element={isEditing && <AddProfile />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

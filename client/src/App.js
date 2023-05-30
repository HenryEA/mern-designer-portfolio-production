import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Logout from './components/Logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register, Landing, Error, ProtectedRoute } from './pages/Index.jsx';

function App() {
  return (
    <Router>
      <div h-screen justify-between>
        <Navbar />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/experience"
            element={
              <ProtectedRoute>
                <Experience />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import About from './components/About';
// import Contact from './components/Contact';
// import Experience from './components/Experience';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Portfolio from './components/Portfolio';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Register, Landing, Error, ProtectedRoute } from './pages/Index.jsx';

// function App() {
//   return (
//     <Router>
//       <div h-screen justify-between>
//         <Navbar />
//         <Routes>
//           <Route path="/landing" element={<Landing />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/home"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <ProtectedRoute>
//                 <About />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/portfolio"
//             element={
//               <ProtectedRoute>
//                 <Portfolio />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/experience"
//             element={
//               <ProtectedRoute>
//                 <Experience />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <ProtectedRoute>
//                 <Contact />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

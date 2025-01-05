import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../routes/ProtectedRoute';
import Login from '../pages/Login';
import AdminHome from '../pages/AdminHome';
import InstructorHome from '../pages/InstructorHome';
import CandidateHome from '../pages/CandidateHome';
import NotFound from '../pages/NotFound';
import InterviewPanel from '../pages/InterviewPanel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Login />} /> */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminHome />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={['instructor']} />}>
        <Route path="/instructor" element={<InstructorHome />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={['candidate']} />}>
        <Route path="/candidate" element={<CandidateHome />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={['candidate']} />}>
        <Route path="/interview" element={<InterviewPanel />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

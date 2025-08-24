import StudentDashboard from "../Dashboard/StudentDashboard/StudentDashboard.jsx"
import FacultyDashboard from "../Dashboard/FacultyDashboard/FacultyDashboard.jsx"
import HODDashboard from "../Dashboard/HODDashboard/HODDashboard.jsx"
import AdminDashboard from "./AdminDashboard/AdminDashboard.jsx"
import { useAuth } from "../Context/AuthProvider.jsx";

function Dashboard() {
    const [authUser, setAuthUser] = useAuth();
    const dashboardRole = (role) => {
        const roleMap = {
            Student: <StudentDashboard />,
            Faculty: <FacultyDashboard />,
            HOD: <HODDashboard />,
            "@dmin": <AdminDashboard/>
        };
        return roleMap[role];
    };


    return (
        <>
            <div className="w-[90%] mx-auto ">
                <div className=" p-1 font-bold text-center">
                    <h1 className=" text-2xl">Welcome, {authUser.user.role}</h1>
                    <span className="Text_Color  text-xl ">Hello {authUser.user.fullname}</span>
                </div>
                {dashboardRole(authUser.user.role)}

            </div>
        </>
    )
}

export default Dashboard
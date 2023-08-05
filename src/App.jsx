import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
    HomeLayout,
    Register,
    Login,
    DashboardLayout,
    Error,
    Landing, AddJob, Stats, AllJobs, Profile, Admin
} from './pages'


const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('dark-theme')
    document.body.classList.toggle('dark-theme', isDarkTheme)
    return isDarkTheme
}

const isDarkThemeEnabled = checkDefaultTheme()

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>,
            },
            {
                path: '/dashboard',
                element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled}/>,
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <AddJob/>,
            },
            {path: 'stats', element: <Stats/>},
            {
                path: 'all-jobs',
                element: <AllJobs/>,
            },

            {
                path: 'profile',
                element: <Profile/>,
            },
            {
                path: 'admin',
                element: <Admin/>,
            },
        ],
    }
]);

const App = () => {
    return <RouterProvider router={router}/>;
};
export default App;
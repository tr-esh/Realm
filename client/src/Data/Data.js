import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
const DashIcon = new URL('./icons8_dashboard (1).png', import.meta.url)
const AnalyticsIcon = new URL('./icons8_web_analytics_icon (1).png', import.meta.url)
const RecordIcon = new URL('./icons8_activity_history.png', import.meta.url)
const ControlIcon = new URL('./icons8_settings_icon.png', import.meta.url)
const Notif = new URL('./icon_notification.png', import.meta.url)





export const SidebarData = [
    {
        icon: <DashboardRoundedIcon className='sidebar-icon'  sx={{ fontSize: 35, paddingTop:'0.5rem'}}/> ,
        path: "/",
        heading: "Dashboard",
    },
    {
        icon: <TimelineRoundedIcon className='sidebar-icon'sx={{ fontSize: 35, paddingTop:'0.5rem'}}/>,
        path: "/Analytics",
        heading: "Analytics",
    },
    {
        icon: <FormatListBulletedRoundedIcon className='sidebar-icon' sx={{ fontSize: 35, paddingTop:'0.5rem'}}/> ,
        path: "/Logs",
        heading: "Record Logs",
    },
    {
        icon: <SettingsRoundedIcon className='sidebar-icon' sx={{ fontSize: 35, paddingTop:'0.5rem'}}/> ,
        path: "/Controls",
        heading: "Control Panel",
    },
    
];

export const CardsData = [
    {
        title: "WATER TEMPERATURE",
        color: {
            backGround: "#006064",
            boxShadow: "rgb(96,228,222)",
        },
        value: "20.5 C",
        png: <img src={Notif} alt="notification"/>,
        name: "NORMAL",
    },
    {
        title: "WATER TURBIDITY",
        color: {
            backGround: "#006064",
            boxShadow: "rgb(96,228,222)",
        },
        value: "3 NTU",
        png: <img src={Notif} alt="notification"/>,
        name: "CONDITIONAL",
    },
    {
        title: "PH LEVEL",
        color: {
            backGround: "#006064",
            boxShadow: "rgb(96,228,222)",
        },
        value: "4.5",
        png: <img src={Notif} alt="notification"/>,
        name: "LOW",
    },
    
];

export const Months = [
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "JANUARY",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "FEBRUARY",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "MARCH",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "APRIL",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "MAY",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "JUNE",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "JULY",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "AUGUST",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "SEPTEMBER",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "OCTOBER",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "NOVEMBER",
        name: "LOGS"
    },
    {
        icon: <PlaylistAddCheckCircleRoundedIcon sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem'}} /> ,
        month: "DECEMBER",
        name: "LOGS"
    }

];
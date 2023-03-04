import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import '../styles/Dashboard.css';
import {Divider} from '@mui/material';
import '../styles/DashboardSide.css'
import Welcome from '../Welcome';
import { Badge, IconButton, Dialog, DialogContent, DialogTitle} from '@mui/material'
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import moment from 'moment';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const DashboardSide = () => {

  const useStyles = styled(() => ({
    badge: {
      position: "absolute",
      top: -10,
      right: -10,
    },
  }));

  const classes = useStyles();
  
  const Modal = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: "transparent",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",

    },
    '& MuiDialog-paper': {
      backgroundColor: "transparent",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",

    },
    '& .MuiPaper-root-MuiDialog-paper': {
      backgroundColor: "transparent",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
    },
    padding: theme.spacing(1),
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '1rem',
    color: '#ffff',
    boxShadow: 'none',
    width:'100%'
  })
);
 

  const [notificationCount, setNotificationCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [all, setAll] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const maxWidth = React.useState('xs');



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/realm/getall')
      const json = await response.json()

      if (response.ok) {
        // Filter data to only include the current day
        const today = moment().startOf('day');
        const filteredData = json.filter((data) => moment(data.createdAt).isSame(today, 'day'));
  
        setAll(filteredData);
        setNotificationCount(filteredData.length);
        setOpen(true);
      }
    }


    fetchData()

  }, [])

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };



  const newIllustration = new URL('../../img/error_notif.png', import.meta.url)
  const warnIllustration = new URL('../../img/Warning-pana.png', import.meta.url)


  return (
    <div className='Dashboard-Side'>

      <div className="welcome-statement" style={{ marginTop: '2rem'}}>
        <Welcome />
        <div style={{fontSize: '0.8rem', fontWeight:'400', 
                    marginTop:'0.5rem', lineHeight: 1.3, padding:'1.2rem'}}>
                    Keep a watchful eye on water quality with REALM, the innovative IoT
                    solution that simplifies and streamlines water quality monitoring in real-time.
        </div>
        <div className="Header" style={{gap: '5rem'}}>
          <span style={{
            fontSize: '1rem',
            fontWeight: '600', 
            fontFamily: 'Inter', 
            color: '#ffff'
          }}>Alert Bulletin </span>

          <IconButton sx={{ marginTop: '-15px' }}>
            <Badge color="error" 
            sx={{ fontWeight: '800', 
                  fontSize: '2rem', 
                  color: 'red' }}
              className={classes.badge}
              badgeContent={notificationCount}>
              <CircleNotificationsRoundedIcon 
              sx={{ fontSize: 25, color: '#ffff', 
              paddingTop:'0.4rem', paddingLeft:'4rem'}} />
            </Badge>
          </IconButton>
        </div>

        <Divider orientation="horizontal" 
                                style={{ backgroundColor: '#ffff', width: '18.5rem'}}/>
      </div>


      <div>
      {all && all.length > 0 ? (
        <p className='bulletin-holder' onClick={handleModalOpen}>
         <WarningRoundedIcon className='warning-icon' style={{color: '#ffc661'}} sx={{fontSize: '2rem'}}/>
                <span className='warning-holder'>
                  <span className='warning-signal' style={{color:'#ffff'}}> Anomalies Detected </span>
                  <span className='subwarning'> Anomalies Detected in Parameter. Click to review and take timely remedial actions. </span> 
                </span>
        </p>
        
      ) : (
        <img style={{width:'20rem', display:'block', margin:'auto'}} src={newIllustration} alt="Illustration"/>
      )}
    </div>
        
        
        <Modal open={modalOpen} onClose={handleModalClose} maxWidth={maxWidth}>
          <div>
          <DialogTitle className='alert-title' style={{fontFamily:'Poppins'}}>
           <div style={{ lineHeight:'0.5', paddingTop:'0.7rem'}}> 
              <div style={{color:'#ff725e', fontWeight:'700'}}> ANOMALIES DETECTED 
              <div onClick={handleModalClose}  style={{cursor:'pointer'}}>
              <CloseRoundedIcon sx={{color:'#ffff', float:'right', fontSize:'2rem'}}/>
              </div>
              </div> 
             </div>
             <div style={{fontWeight:'300', fontSize:'1rem'}}> {all.length} result/s </div>
             </DialogTitle>
          <DialogContent className='content-holder'>
          <div className='modal-holder'> 
          <img className='warn-icon' style={{width:'27rem', display:'block', margin:'auto'}} src={warnIllustration} alt="Illustration" /> 
            <div className='alert-holder' style={{ height:'30rem'}}>
            {all && all.length > 0 ? (
              all.map((data, index) => (
                <div className='alert-details' key={index}>
                  <div className='time-created'>{moment(data.createdAt).format('LT')} • {moment(data.createdAt).fromNow('mm')}
                  </div>
                  <div className='param-name'>{data.parameter_name}</div>
                  <div className='status'>
                    <div className='a'> {data.status}</div></div>
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
            </div>
            </div>
          </DialogContent>
          </div>
        </Modal>
        


    </div>
  )
}

export default DashboardSide
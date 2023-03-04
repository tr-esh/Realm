import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Divider, Grid } from '@mui/material';
import RecordMonthTable from './RecordMonthTable';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import ElectricMeterRoundedIcon from '@mui/icons-material/ElectricMeterRounded';
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import Tooltip from '@mui/material/Tooltip';
import '../styles/RecordMonthMain.css'
import '../styles/RecordMonthSide.css'
import { useNavigate } from "react-router-dom";
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
const record_illustration = new URL('../../img/record_illustration.png', import.meta.url);


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode ===  'dark' ? '#1e88e5' : '#10273d',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '2.6rem',
    fontWeight: '600',
    fontSize: '1rem',
    fontFamily: 'Poppins, sans-serif',
    color: '#7da4cc',
    boxShadow: 'none',
  }));
  

  const RecordMonthMain = () => {

  
  const navigate = useNavigate(); 
  const navigatetoRecordLogs = () => {
  
      navigate('/Logs');
    };  

  const noData = new URL('../../img/empty_data.png', import.meta.url)


  const params = { temperature: 'TEMPERATURE', 
                     turbidity: 'TURBIDITY',
                     phlevel: 'PH LEVEL'}

  const [showTable, setShowTable] = useState(false);
  const [color, setColor] = useState('');
  const [data, setData] = useState('');
  const [type, setType] = useState('');

  function handleClick(newColor, newData, newType) {
    setShowTable(!showTable);
    setColor(newColor);
    setData(newData);
    setType(newType);
  }
   


  return (

  <div className="monthMainContainer" style={{ display: 'grid', gridTemplateColumns: '73rem auto'}}>


    
    <Grid className='Record-Month-Main' style={{  height: '60rem'}}>
        <Item style={{  height: '13rem', margin: '3rem 4rem',
                padding: '2rem 1rem', alignItems: 'center'}} >
                  <div className="header-month" 
                      style={{ marginTop: '2rem',
                               display: 'grid', 
                               gridTemplateColumns: '25rem auto'}}>

                      <div style={{  fontFamily: 'Poppins, sans-serif', 
                                fontWeight: '600', 
                                lineHeight: '0.8', 
                                textAlign: 'start', 
                                width: '8rem', 
                                paddingLeft:'2rem'}} >

                        <div style={{ display: 'flex' }}>
                            <span onClick={navigatetoRecordLogs}  className='backhome' style={{marginRight: '0.7rem'}}>
                              <Tooltip title="Back" arrow style={{fontFamily:'Poppins'}}> 
                              <KeyboardReturnRoundedIcon className='home-icon' sx={{fontSize:'2rem', color: '#BDD2CF', width: '3rem'}}/>
                            </Tooltip>
                            </span>    
                            <div style={{ display: 'flex', 
                                          flexDirection: 'column' }}>
                              <span style={{ color:'#66B2FF', 
                                            width: '25rem', 
                                            fontSize:'2rem', paddingTop:'0.4rem'}}>
                                        
                                              RECORD LOGS
                              </span>

                              <span style={{ color:'#FFFF', 
                                              width: '25rem', 
                                              fontSize:'13px',
                                              fontWeight: '400',
                                              paddingTop: '0.3rem'}}>
                                              Never miss a beat with our log tracking solution.
                              </span>
                            </div>
                        </div>


                        <div style={{ display: 'flex', marginTop:'1rem', 
                             backgroundColor:'#0E2337',
                             height: '6rem',
                             width: '16rem',
                             borderRadius: '1.2rem',
                             alignItems:'center'}}>
                            <span className='hero-icon-holder' style={{marginRight: '0.7rem'}}>
                              <ElectricMeterRoundedIcon className='hero-icon'
                              sx={{fontSize:'2rem', color: '#eeeeee', width: '3rem'}}/>
                            </span>    
                            <div style={{ display: 'flex', 
                                          flexDirection: 'column'}}>
                              <span style={{ color:'#66B2FF', 
                                            width: '25rem', 
                                            fontSize:'1.3rem', 
                                            paddingTop:'0.7rem'}}>
                                        
                                              SENSOR TYPE
                              </span>

                              <span style={{ color:'#FFFF', 
                                              width: '25rem', 
                                              fontSize:'15.5px',
                                              fontWeight: '400',
                                              paddingTop: '0.3rem',
                                              }}>
                                              {type}
                              </span>
                            </div>
                            <span style={{ display: 'flex', 
                             backgroundColor:'#0E2337',
                             height: '6rem',
                             width: '16rem',
                             borderRadius: '1.2rem',
                             alignItems:'center',
                             marginLeft:'-13rem'}}>
                            <span className='hero-icon-holder' style={{marginRight: '0.7rem'}}>
                              <DeviceThermostatRoundedIcon className='hero-icon'
                              sx={{fontSize:'2rem', color: '#eeeeee', width: '3rem'}}/>
                            </span>    
                            <div style={{ display: 'flex', 
                                          flexDirection: 'column'}}>
                              <span style={{ color:'#66B2FF', 
                                            width: '25rem', 
                                            fontSize:'1.3rem', 
                                            paddingTop:'0.7rem'}}>
                                        
                                              PARAMETER
                              </span>

                              <span style={{ color:'#FFFF', 
                                              width: '25rem', 
                                              fontSize:'15px',
                                              fontWeight: '400',
                                              paddingTop: '0.3rem',
                                              }}>
                                              {data}
                              </span>
                            </div>
                        </span> 

                        </div> 

                    </div>

                    <div style={{marginTop:'-9rem'}}>
                      <img src={record_illustration} alt="record_item" className="record_illus"
                          style={{ width: '45rem'}}/>
                    </div>
                  </div>
              </Item>

              <Item style={{ margin: '0 4rem',
                             width: '88%',
                             height: '50%' }}>
                <div className="table-record">
                {showTable ? (
                  color && data && type ? (
                     <RecordMonthTable />
                    ) : (
                      <img className='nodata-icon' style={{ width: '30rem', alignItems: 'center', marginTop: '8rem' }} src={noData} alt="Illustration" />
                      
                    )
                  ) : (
                      <img style={{ width: '30rem', alignItems: 'center', marginTop: '8rem' }} src={noData} alt="Illustration" />
                  )}  

                    
                </div>
              </Item>
      </Grid>                                          



      <Grid className='Record-Month-Side'>
          <div className='statement'> 
          Unlock insights with 
          <span style={{ color: '#66B2FF', marginLeft: '4px' }}>
              organized data - Datasets!
          </span>
        </div>
        
        <Item style={{marginTop:'3rem', width:'300px'}}>
            <div className="Card-top" 
                  style={{ marginTop: '1rem', marginLeft:'0.2rem' }}>
                <div className="heading-name" style={{fontSize:'1.6rem'}}>
                    <span style={{ color:'#FFFF', display: 'flex'}}>Select
                    <Divider orientation="horizontal" 
                            style={{ height: '1.2px', backgroundColor: '#bde0ff', width: '10.5rem', 
                            marginTop: '1rem', marginLeft: '1rem'}}/> 
                    </span>
                    <span style={{ color:'#66B2FF' }}>Parameter</span>
                    <div className="content2-text">
                      <span style={{fontSize:'0.9rem'}}>
                      Optimize your performance with the right parameters and 
                      gain valuable insights into your operations and make data-driven decisions.
                      </span>
                  </div>
                </div>
            </div>
          </Item>
          
                <div className='parameter-holder' style={{marginTop:'-5rem'}}> 
                <Item> 
                    <div onClick={() => handleClick('#8A6DC1', params.temperature, 'DS18B209')} className='param-container' > 
                          <span className='icons-holder' style={{backgroundColor:'#8A6DC1'}}> 
                            <OpacityRoundedIcon className='water-icon' sx={{ fontSize: 30, color:'#8A6DC1', paddingTop:'0.8rem'}}/> 
                            </span>
                        
                        <div className='results'> 
                        <span style={{textAlign:'center', paddingLeft:'0.7rem', color:'#ffff'}}>{params.temperature}</span>
                        </div>
                        <span style={{ color:'#66B2FF', fontSize:'0.7rem', fontWeight:'400', marginLeft:'-7rem', marginTop:'0.6rem'}}> 5 results </span>
                        <TrendingFlatRoundedIcon className='select' sx={{color: '#0D2135', paddingLeft:'6rem'}}/>
                    </div>

                    <div onClick={() => handleClick('#F1918F', params.turbidity, 'SEN0189')} className='param-container' > 
                          <span className='icons-holder' style={{backgroundColor:'#F1918F'}}> 
                            <OpacityRoundedIcon className='water-icon' sx={{ fontSize: 30, color:'#F1918F', paddingTop:'0.8rem'}}/> 
                            </span>
                            <div className='results'> 
                        <span style={{textAlign:'center', marginLeft:'-1.4rem', color:'#ffff'}}>{params.turbidity}</span>
                        </div>
                        <span style={{ color:'#66B2FF', fontSize:'0.7rem', fontWeight:'400', marginLeft:'-7rem', marginTop:'0.6rem'}}> 5 results </span>
                        <TrendingFlatRoundedIcon className='select' sx={{color: '#0D2135', paddingLeft:'6rem'}}/>
                    </div>


                    <div onClick={() => handleClick('#F5D087', params.phlevel, 'PH-4502C')} className= 'param-container'> 
                          <span className='icons-holder' style={{backgroundColor:'#F5D087'}}> 
                            <OpacityRoundedIcon className='water-icon' sx={{ fontSize: 30, color:'#F5D087', paddingTop:'0.8rem'}}/> 
                            </span>
                            <div className='results'> 
                        <span style={{textAlign:'center', marginLeft:'-1.6rem', color:'#ffff'}}>{params.phlevel}</span>
                        </div>
                        <span style={{ color:'#66B2FF', fontSize:'0.7rem', fontWeight:'400', marginLeft:'-7rem', marginTop:'0.7rem'}}> 5 results </span>
                        <TrendingFlatRoundedIcon className='select' sx={{color: '#0D2135', paddingLeft:'6rem'}}/>
                    </div>

                    
                    <div className= 'param-container' style={{marginTop:'2rem'}}> 
                        <span  style={{textAlign:'center', paddingLeft:'5rem', color:'#ffff'}}> All Parameters</span>
                    </div>

                </Item>
                </div>  
      
      </Grid>

    </div>
  )
}

export default RecordMonthMain
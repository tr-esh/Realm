import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


const MonthLogs = () => {
    
  const navigate = useNavigate();
  const [months, setMonths] = useState([
    { abbreviation: "January", name: "JANUARY", data: [], count: 0 },
    { abbreviation: "February", name: "FEBRUARY", data: [], count: 0 },
    { abbreviation: "March", name: "MARCH", data: [], count: 0 },
    { abbreviation: "April", name: "APRIL", data: [], count: 0 },
    { abbreviation: "May", name: "MAY", data: [], count: 0 },
    { abbreviation: "June", name: "JUNE", data: [], count: 0 },
    { abbreviation: "July", name: "JULY", data: [], count: 0 },
    { abbreviation: "August", name: "AUGUST", data: [], count: 0 },
    { abbreviation: "September", name: "SEPTEMBER", data: [], count: 0 },
    { abbreviation: "October", name: "OCTOBER", data: [], count: 0 },
    { abbreviation: "November", name: "NOVEMBER", data: [], count: 0 },
    { abbreviation: "December", name: "DECEMBER", data: [], count: 0 },
  ]);

  // /api/realm/monthdata
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/parameters");
      const data = await response.json();
      const monthCounts = {
        JANUARY: 0,
        FEBRUARY: 0,
        MARCH: 0,
        APRIL: 0,
        MAY: 0,
        JUNE: 0,
        JULY: 0,
        AUGUST: 0,
        SEPTEMBER: 0,
        OCTOBER: 0,
        NOVEMBER: 0,
        DECEMBER: 0,
      };
    
      // Count the number of data in each month
      data.forEach((param) => {
        const month = new Date(param.createdAt).toLocaleString("en-PH", { month: "long" }).toUpperCase();
        monthCounts[month]++;
      });
      
      // Merge the count with the data for each month
      const monthsWithData = months.map((month) => ({
        ...month,
        data: data.filter((param) => new Date(param.createdAt).toLocaleString("en-PH", { month: "long" }).toUpperCase() === month.name),
        count: monthCounts[month.name],
      }));
      
      setMonths(monthsWithData);
    };
    
    fetchData();
  }, []);


  const handleMonthClick = (month) => {
    navigate(`/Logs/RecordTable/${month.abbreviation}`);
  };

    return(
        <div className="month-logs">

        {months.map((month) => (
              <button key={month.abbreviation} onClick={() => handleMonthClick(month)} className="monthly-logs">
                <div className="months">
                  <PlaylistAddCheckCircleRoundedIcon className="icon" sx={{ fontSize: 41, color: '#e3f2fd', width: '5rem' }} />
                  <span className="month">
                    {month.name} <span className="logs">LOGS ({month.data ? month.data.length : 0})</span> {/* display the count of data for the month */}
                  </span>
                </div>
              </button>
            ))}
          
        </div>
    )
}
export default MonthLogs
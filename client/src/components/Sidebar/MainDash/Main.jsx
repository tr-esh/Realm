import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Analytics from '../../../pages/Analytics'
import ControlPanel from '../../../pages/ControlPanel'
import Dashboard from '../../../pages/Dashboard'
import RecordLogs from '../../../pages/RecordLogs'
import './Main.css'

const Main = () => {
  return (
    <div className="Main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Logs" element={<RecordLogs />} />
          <Route path="/Controls" element={<ControlPanel />} />
        </Routes>
    </div>
  )
}

export default Main
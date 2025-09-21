import axios from 'axios'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = props => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [dToken, setDToken] = useState(
    localStorage.getItem('dToken') ? localStorage.getItem('dToken') : ''
  )

  const [appointments, setAppointments] = useState([])
  const [dashData, setDashData] = useState(false)
  const [profileData, setProfileData] = useState(false)

  // ---------- Helper: Axios headers ----------
  const getAuthHeader = () => {
    return { Authorization: `Bearer ${dToken}` }
  }

  // ---------- Appointments ----------
  const getAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + '/api/doctor/appointments',
        { headers: getAuthHeader() }
      )

      if (data.success) {
        setAppointments(data.appointments)
        console.log(data.appointments)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const completeAppointment = async appointmentId => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/doctor/complete-appointment',
        { appointmentId },
        { headers: getAuthHeader() }
      )

      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async appointmentId => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/doctor/cancel-appointment',
        { appointmentId },
        { headers: getAuthHeader() }
      )

      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // ---------- Dashboard ----------
  const getDashData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + '/api/doctor/dashboard',
        { headers: getAuthHeader() }
      )

      if (data.success) {
        setDashData(data.dashData)
        console.log(data.dashData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // ---------- Profile ----------
  const getProfileData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + '/api/doctor/profile',
        { headers: getAuthHeader() }
      )

      if (data.success) {
        setProfileData(data.profileData)
        console.log(data.profileData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // ---------- Value ----------
  const value = {
    dToken,
    setDToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
    dashData,
    setDashData,
    getDashData,
    profileData,
    setProfileData,
    getProfileData
  }

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  )
}

export default DoctorContextProvider

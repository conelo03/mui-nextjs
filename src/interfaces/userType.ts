export default interface UserType {
  id: string
  avatar?: string
  fullname?: string
  username?: string
  email?: string
  lastLogin?: string
  status?: string | boolean
  isActive?: boolean
  createdAt?: string
  role?: string
  createdBy?: string
  phoneNumber?: string
  department?: string
  gender?: string
  dateOfBirth?: string
  jobTitle?: string
}

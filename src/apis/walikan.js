import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getWalikan ({ categoryId }) {
    const searchParams = new URLSearchParams({ categoryId })
    return apiHelper.get(`/walikan?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
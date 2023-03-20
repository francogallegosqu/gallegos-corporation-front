import { defineStore } from 'pinia'
import Api from '../api'
export const contact = defineStore('contact', {
  actions: {
    async sendContact(params) {
      try {
        const { name, business, file, subject, message, email } = params
        const formData = new FormData()
        let data = {
          name,
          business,
          subject,
          message,
          email,
        }
        formData.append('files.file', file)
        formData.append('data', JSON.stringify(data))
        const response = await Api.post('/api/form-contacts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data; charset=utf-8',
          },
        })
        console.log(response, 'statyus', response.status)
        if (response) return response.code == '200'
      } catch (error) {
        return error
      }
    },
  },
})

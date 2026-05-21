import axios from 'axios'

const service = axios.create({
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers.token = '99a19db32c81449688f408f73a3222d9'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
	sts_info2: data => service.post('https://editor.meishesdk.com:8888/upload/sts/info', data),

	video_create: data => service.post('https://editor.meishesdk.com:8888/video/create', data),

  job_info: data => service.post('https://editor.meishesdk.com:8888/job/batch/info', data),
}

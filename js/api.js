const api = {
  async getStudents() {
    const url = 'https://university.web-app.click/api/v1/students'
    const resp = await fetch(url)
    const json = await resp.json()
    const jsonPayload = await json.payload
    console.log(jsonPayload)
    return jsonPayload
  },
}

import { ref } from 'vue'
import axios from 'axios'

export function checkLoginCredentials() {
  const username = ref('afiqzamzuzzaman.work@gmail.com')
  const password = ref('F6mu*9tr4d93')

  const usernameMessage = ref('Username is required.')
  const passwordMessage = ref('Password is required.')

  const usernameValidity = ref(true)
  const passwordValidity = ref(true)

  const jwtToken = ref('')

  async function onSubmit() {
    const valueCheck1 = ['', null, undefined]
    const valueCheck2 = [`"`, `'`, `/`, `\\`]
    let usernameFlag = false, passwordFlag = false

    if (valueCheck1.includes(username.value)) {
      usernameValidity.value = false
    }
    else {
      usernameFlag = true
    }
    
    if (usernameFlag === true && !username.value.includes('@')) {
      usernameMessage.value = 'Invalid username.'
    }
    else if (username.value.includes('@')) {
      usernameValidity.value = true
    }
    else {
      usernameMessage.value = 'Username is required'
    }

    if (valueCheck1.includes(password.value)) {
      passwordValidity.value = false
    }
    else {
      passwordFlag = true
    }

    // console.log(valueCheck1.includes(username.value))
    // console.log(usernameFlag)
    // console.log(valueCheck1.includes(password.value))
    // console.log(passwordFlag)
    
    if (passwordFlag === false && !valueCheck2.some(checkPassword)) {
      passwordMessage.value = 'Password is required.'
    }
    else if (valueCheck2.some(checkPassword)) {
      passwordMessage.value = 'Invalid password.'
    }
    else {
      passwordValidity.value = true
    }
    
    if (usernameValidity.value === true && passwordValidity.value === true) {
      // const API_URL = 'https://restcountries.com/v3.1'
      // axios.get('${API_URL}/all').then(response => {
      //   console.log(response)
      // })
      
      const data = {
        "email": username.value,
        "password": password.value
      }
      const header = {
        'Frontline':  'eqBIKsZkTU364diN1Jiphjtsdvsr0wctxgE8ACfBM6xm50wL7r2Vs4ugO2dKbhSk',
        'Frontline-Secret': '$2y$12$OE4.Ab6X9PCRSGvOBL70F.yL7qYZSZ.sl4rer9Tpn4GUTWMOjdbTm'
      }
      const APP_NAME2 = 'iToolsSkillsTest'
      
      // axios.post(`api/secure/login`/*, data, { headers: header }*/).then((response) => {
      //   console.log(response)
      // }).catch((error) => {
      //   console.log(error)
      // })

      const postData = async () => {
        try {
          const response = await axios.post(`api/secure/login`, data, { headers: header })
          if (response.status === 200) {
            let data = response.data.data
            let token = data.token
            jwtToken.value = token
            console.log(jwtToken.value)
            let stringifiedToken = JSON.stringify(jwtToken.value)
            localStorage.setItem(`${APP_NAME2}`, `{"token":${stringifiedToken}}`)
            console.log(localStorage.iToolsSkillsTest)
            console.log(JSON.parse(localStorage.iToolsSkillsTest).token)
            // localStorage.setItem(`${APP_NAME}`, `{"token":"${JSON.stringify(jwtToken.value)}"}`)
            // localStorage.getItem(`${APP_NAME}`)
          }
        } catch (error) {
          console.log(error.toJSON())
        }
      }
      postData()
    }
  }
  
  function checkPassword(value) {
    return password.value.includes(value)
  }

  return { 
    username, 
    password, 
    usernameMessage, 
    passwordMessage, 
    usernameValidity, 
    passwordValidity, 
    onSubmit
  }
}
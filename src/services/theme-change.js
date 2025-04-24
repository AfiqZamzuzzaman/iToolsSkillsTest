import { ref, /*onMounted,*/ onUnmounted } from 'vue'

export function changeTheme() {
  const APP_NAME1 = 'iToolsSkillsTest'
  localStorage.setItem(`${APP_NAME1}`, `{"darkTheme":false}`)
  
  let data = JSON.parse(localStorage.getItem(`${APP_NAME1}`))
  let darkTheme = data.darkTheme
  const theme = ref('Light')
  // console.log(data)
  // console.log(darkTheme)
  // console.log(theme.value)
  
  function setTheme() {
    darkTheme = darkTheme ? false : true
    
    let target = document.querySelector(':root').classList
    if (darkTheme) {
      target.add('dark')
      theme.value = 'Dark'
    }
    else {
      target.remove('dark')
      theme.value = 'Light'
    }

    data.darkTheme = darkTheme
    localStorage.setItem(`${APP_NAME1}`, JSON.stringify(data))

    // console.log(darkTheme)
    // console.log(data)
    // console.log(localStorage)
  }

  // onMounted(() => {
  //   console.log(localStorage.getItem(`${APP_NAME1}`))
  //   if (JSON.parse(localStorage.getItem(`${APP_NAME1}`)).darkTheme === true) {
  //     document.querySelector(':root').classList.add('dark')
  //   }
  //   else {
  //     document.querySelector(':root').classList.remove('dark')
  //   }
  // })

  onUnmounted(() => {
    localStorage.removeItem(`${APP_NAME1}`)
  })
  
  return { theme, setTheme }
}
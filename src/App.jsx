import List from "./Components/List"
import Search from "./Components/Search"

export default function App() {

  const list = [
    {
      id: 1,
      title: 'react',
      url: 'www.react.com',
      point: 4
    },
    {
      id: 2,
      title: 'redux',
      url: 'www.redux.com',
      point: 8,
    }
  ]

  return (
    <>
      <div className='w-full h-screen flex flex-col space-y-3 items-center justify-center'>
        <List list={list} />
        <Search />
      </div>
    </>
  )
}

/*
ساختار فایل : (import & export)

فایل person.js
const firstName = 'ali'
const lastName = 'mohamadi'
export (firstName , lastName)


فایل app.js
import {firstName , lastName } from './person'
console.log(firstName , lastName)


نکته : اگر تعداد آیتم ها برای ایمپورت زیاد باشد، می توانیم به روش زیر عمل کنیم

import * as personExample from './person'
console.log(personExample.firstName + '' + personExample.lastName)

نکته : اگر دو یا چند فایل ، موارد مختلف را با نام یکسان اکسپورت ککند، برای رفع تشابه اسمی ، هنگام ایمپورت کردن ، به روش زیر عمل می کنیم
(userName 'یک نام مستعار است')

import {firstName as userName} from './person.js'
console.log(userName)

اکسپورت کردن یک آبجکت :

const people = {
  firstName : 'ali',
  lastName : 'ahmadi'
}
export defualte people;

import developer from './persone'

console.log(developer.firstName)

*/


/*
state : زمانی که بخوایم روی کامپوننت تغییری ایجاد کنیم ، از آن استفاده کنیم

*/

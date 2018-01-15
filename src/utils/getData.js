
import fetch from '@/utils/fetch'
import api from '@/utils/Api'


export const is_login = () => fetch(api.login.is_login);
const apiPre = process.env.API_HOST;

const Api = {

    login:{
        login : 			`${apiPre}?s=api/User/do_login`,
        is_login : 			`${apiPre}?s=api/User/is_login`,
        user_is_verify : 	`${apiPre}?s=api/User/user_is_verify`,
        getUserInfo : 		`${apiPre}?s=api/user/getUserInfo`
    },
    home:{
        getFeatureSite:`${apiPre}?s=api/site/getFeatureSite`,
        getAdList:`${apiPre}?s=api/ad/getAdList`,
        getlevel1:`${apiPre}?s=api/category/getlevel1`
    },

};
export default Api;
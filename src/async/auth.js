

export const login = async (email,password) => {

    try{
        
    const response =await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      

        },
        body: JSON.stringify({
            email:email,
            password:password
        })
    })

    const data = await response.json()
    localStorage.setItem('token', data.token); // Almacena el token en localStorage
    return data

    }
    catch(err){
        console.log(err)
    }




 

}

export const register = async (username,firstName,lastName,password) => {
    try{
        const response = await fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
    
            },
            body: JSON.stringify({
                username:username,
                firstName:firstName,
                lastName:lastName,
                email:'jose@gmail.com',
                password:password
            })
    
        })
    
        const data = await response.json()<
        console.log(data)
        return data

    }catch(err){
        console.log(err)
    }
  
}




import React,{useState} from 'react'

function Login() {
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  return (
    <div className='my-4'>
    <section className=" ">

      <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best management App <br />
                <span className="text-primary">for your Farm</span>
              </h1>
              <p style={{color: "hsl(217, 10%, 50.8%)"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>
    
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form >
                    
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" value={firstname}  name='firstname'  id="form3Example1" className="form-control" placeholder='First Name' />
                          
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" value={lastname} name='lastname' id="form3Example2" className="form-control" placeholder='Last Name'/>
                          
                        </div>
                      </div>
                    </div>
    
                   
                    <div className="form-outline mb-4">
                      <input type="email" value={email} name='email' id="form3Example3" className="form-control" placeholder='Email Address'/>
                      
                    </div>
    

                    <div className="form-outline mb-4">
                      <input type="password" value={password} name='password' id="form3Example4" className="form-control" placeholder='Password'/>
                      
                    </div>
    

                    <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                      Sign up
                    </button>
    

                    {/* <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>
    
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>
    
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>
    
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
</div>
  )
}

export default Login
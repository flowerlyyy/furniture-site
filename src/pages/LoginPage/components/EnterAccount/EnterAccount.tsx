import './EnterAccount.scss';
export const EnterAccount=()=>{
    return(
<>
<div className='login-frame'>
    <div className='login'>
    <h1 className='signin-heading'>Login</h1>
    <p className='signin-paragraph'>Please login using account detail bellow.</p>
    <input style={{marginTop: "37px"}} className='signin-input' type="text" placeholder='Email Address'/>
    <input style={{marginTop: "23px"}}  className='signin-input' type="text" placeholder='Password'/><br/>
    <a className='forgot-password' href='#'>Forgot your password?</a><br/>
    <button className='signin-button'>Sign In</button><br/>
    <a className='have-account' href='#'>Don’t have an Account?Create account</a>
</div>
</div>
</>
    );
};
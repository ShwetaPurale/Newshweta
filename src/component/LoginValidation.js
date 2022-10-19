import {
    Box, Button,
    FormControlLabel,
    FormLabel,
    // IconButton, Input, InputAdornment, InputLabel, 
    //  OutlinedInput, 
    makeStyles,
    Radio,
    RadioGroup,
    TextField, Typography
} from '@material-ui/core'
// import { RemoveRedEye, Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
    LoginValidationMain: {
        width: "100%",
        height: "100vh",
        backgroundColor: "Lightblue",
        padding: "60px 0px 0px 500px"
    },
    LoginBox: {
        alignItems: "center",
        // color:"white",
        width: "500px",
        height: "850px",
        backgroundColor: "white",
        // margin:"50px "        
    },
    UsernameLabel: {
        fontSize: "25px",

    },
    TextField: {
        margin: "20px",
        marginBottom: "60px"

    },
    UsernameField: {
        width: "100%",
        height: "30px",
        fontSize: "18px",

    },
    btn: {
        alignItems: "center",
        backgroundColor: "pink",
        width: "140px",
        height: "50px",
        // marginTop: "10px",
        marginLeft: "160px",
        fontSize: "20px",
        textTransform: "capitalize",
    },
    ErrorMsg: {
        color: "red",
        fontSize: "20px",
        marginLeft: "20px",
        marginTop: "10px"
    },
    genderField:{
       display:"flex",
    },
    genderTextField:{
        display:"flex",
    }

}))

const LoginValidation = () => {
    const classes = useStyles();
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    }
    const [formValue, setFormValue] = useState(initialValues);
    const [formErr, setFormErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [value, setValue] = useState();

    const genderHandle = (e) => {
        setValue(e.target.value);
    };


    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
        // console.log(formValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErr(validate(formValue));
        setIsSubmit(true);
    };



    useEffect(() => {
        // console.log(formErr);
        if (Object.keys(formErr).length === 0 && isSubmit) {
            // console.log(formValue);
        }
    }, [formErr]);

    // not accepting space at start.....

    //    const validation = (value) => {
    //     if (/^\s/.test(value))
    //         value = '';
    // }



    const validate = (value) => {
        const errors = {};
        // const action = {};
        const userre = /^(?=.*[A-Z])[A-Za-z]{2,20}$/;
        const confirmPass = value.password;
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const eregex = /^[A-Za-z0-9-_.]{3,30}@[A-Za-z]{3,30}[.]{1}[A-Za-z.]{3,6}$/;
        // const passre = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;
        if (!value.username) {
            errors.username = "username is required!";
        }
        else if (!userre.test(value.username)) {
            errors.username = "username is not valid!";
        }
        if (!value.email) {
            errors.email = "email is required!";
        }
        else if (!eregex.test(value.email)) {
            errors.email = "please enter valid email";
        }
        if (!value.password) {
            errors.password = "password is required!";
        }
        else if (value.password.length < 8) {
            errors.password = "password must be have 8 charactor";
        }
        else if (value.password.length > 16) {
            errors.password = "password to long";
        }
        // if (!value.confirm_password) {
        //     errors.confirm_password = "confirm password is required!";
        // }
        // else if (!confirmPass.test(value.confirm_password)) {
        //     errors.confirm_password = "password must be same";
        // }
        return errors;
    }
    // action.resetForm();
    return (
        <Box className={classes.LoginValidationMain}>
            {Object.keys(formErr).length === 0 && isSubmit ? (
                <div className="ui message success">signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
            )}
            <Box className={classes.LoginBox}>
                <form onClick={handleSubmit}>
                    <h1 style={{ textAlign: "center" }}>Login Form</h1>
                    <div className={classes.TextField}>
                        {/* <Typography className={classes.UsernameLabel}>Username : </Typography> */}
                        <TextField variant='outlined'
                            type="text"
                            name='username'
                            label="username"
                            className={classes.UsernameField}
                            value={formValue.username}
                            onChange={handleChange}
                        // onInput={validation} 
                        />
                    </div>
                    <p className={classes.ErrorMsg}>{formErr.username}</p>

                    <div className={classes.TextField}>
                        {/* <Typography className={classes.UsernameLabel}>Email : </Typography> */}
                        <TextField variant='outlined' type="text"
                            name='email'
                            label="Email"
                            className={classes.UsernameField}
                            value={formValue.email}
                            onChange={handleChange} />
                    </div>
                    <p className={classes.ErrorMsg}>{formErr.email}</p>

                    <div className={classes.TextField}>



                        {/* <Typography className={classes.UsernameLabel}>Password : </Typography> */}
                        <TextField variant='outlined' type="password"
                            name='password'
                            label="Password"
                            className={classes.UsernameField}
                            value={formValue.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className={classes.ErrorMsg}>{formErr.password}</p>

                    <div className={classes.TextField}>
                        <TextField variant='outlined' type="password"
                            name='confirm_password'
                            label="confirm Password"
                            className={classes.UsernameField}
                            value={formValue.confirm_password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className={classes.ErrorMsg}>{formErr.confirm_password}</p>

                    <div className={classes.TextField}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup className={classes.genderField}
                            aria-label="gender"
                            name="gender1" value={value}
                            onChange={genderHandle}>
                            <FormControlLabel
                                value="female"
                                className={classes.genderField}
                                control={<Radio />}
                                label="Female" />
                            <FormControlLabel
                                value="male"
                                className={classes.genderField}
                                control={<Radio />}
                                label="Male" />
                            <FormControlLabel
                                value="other"
                                className={classes.genderField}
                                control={<Radio />}
                                label="Other" />
                        </RadioGroup>

                    </div>
                    <Button className={classes.btn}>Log in</Button>
                </form>
            </Box>
        </Box>
    )
}

export default LoginValidation

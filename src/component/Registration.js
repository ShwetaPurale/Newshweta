import { Box, Button,  Checkbox,  Link,
     makeStyles,  Radio, TextField, 
     Typography } from '@material-ui/core'
import { SettingsPhone, Visibility } from '@material-ui/icons';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { singUpSchemas } from '../schemas';

const useStyles = makeStyles(() => ({
    MainBox: {
        width: "100%",
        height: "150vh",
        backgroundColor: "#1A2C38",
        padding: "100px 0px 0px 500px",

    },
    RegistrationForm: {
        width: "550px",
        // height: "700px",
        padding: "10px 10px 20px 10px",
        backgroundColor: "white",
        // position:"center"
    },
    RegistrationFormHeading: {
        textAlign: "center",
        textTransform: "uppercase",
        paddingTop: "30px",
    },
    RegistrationInput: {
        fontSize: "24px",
        margin: "20px",
        padding: "3px 10px 3px 10px"
    },
    RegistrationInputField: {
        // position:"relative",
        width: "100%",
        height: "45px",
        fontSize: "18px",
        borderRadius: "8px",
        // color:"#fff",
        cursor: "pointer",
        // outlineColor:"#fff"
       
    },
    GenderField: {
        padding: "10px 0px 0px 40px"
    },
    GenderLabel: {
        fontSize: "19px",
        //    paddingRight:"10px"
    },
    btn: {
        backgroundColor: "pink",
        width: "150px",
        height: "50px",
        fontSize: "16px",
        fontWeight: "bold",
        marginLeft: "180px",
        marginTop: "20px",
        marginBottom: "20px",
    },
    errorMsgs: {
        color: "red",
        fontSize: "20px",
        marginLeft: "35px",
    },
    Accound: {
        fontSize: "20px",
        fontWeight: "bold",
        marginLeft: "15px",
        // letterSpacing:"1px"
    },
    btnForget: {
        right: "0px"
    },
    SelectBox: {
        padding: "20px 20px 0px 35px"

    },
    SelectBoxText: {
        width: "100%",
        height: "40px"
    },
    Checkbox:{
        marginLeft:"35px",
    },
    PasswordEye:{
        position:"absolute",
        // textAlign:"right",
        paddingTop:"15px ",
        left:"1000px"
        
    }
}))

const Registration = () => {

    const classes = useStyles();

       // password show hide

       const [showPass, setShowPass] = useState({       
        // password: "",
        showPassword:"true",
    });

    const handleClickShowPassword = () => {
        setShowPass({ ...showPass, showPassword: !showPass.showPassword });
      };
      

    //   Confirm Password Show Hide

    const [showConfirmPass, setShowConfirmPass] = useState({       
        // password: "",
        showConfirmPassword:"true",
    });

    const handleClickConfirmPassword = () => {
        setShowConfirmPass({ ...showConfirmPass, showConfirmPassword: !showConfirmPass.showConfirmPassword });
      };




   

    const [gender, setGender] = useState({});
    const handleGender = (event) => {
        setGender(event.target.value)
        if (!values.gender) {
            errors.gender = "gender is required";
        }
        else {
            setGender(event.target.value)
        }
    }
    //    const Validate = (value) => {
    //       const error = {};
    //       if(!value.gender){
    //         error.gender = "please select the gender"
    //       }        
    //    }

    // Formik ..............


    const initialValues = {
        username: "",
        fullname: "",
        email: "",
        password: "",
        confirm_password: "",
        gender: "",
        file: "",
        country: "",
        phone: "",
        link: "",
        check: "",
    };

    const { values, errors, touched, handleBlur, handleValidation, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: singUpSchemas,
        onSubmit: (values, action) => {
            // if(!values.country){
            //     errors.country = "please select the country"
            // }
            // if (!values.phone) {
            //     errors.phone = "phone number is required"
            // }
            console.log(values);
            action.resetForm();

            // setIsSubmit(true);
            // setGender(event.target.value)
            console.log(values)
            {
                alert("Thank you for Registration")
            }

        },



    })
    console.log(errors)

    return (

        <Box className={classes.MainBox}>
            <Box className={classes.RegistrationForm}>
                <h1 className={classes.RegistrationFormHeading}>Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className={classes.RegistrationInput}>
                        <TextField
                            className={classes.RegistrationInputField}
                            label="Enter username"
                            name='username'
                            variant='outlined'
                            fontSize="25px"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // className={errors.username ? "input-error borderolor-red" : ""}
                        />
                    </div>
                    {errors.username && touched.username ? (<p className={classes.errorMsgs}>{errors.username}</p>) : null}

                    <div className={classes.RegistrationInput}>
                        <TextField
                            className={classes.RegistrationInputField}
                            label="Enter your fullname"
                            name='fullname'
                            variant='outlined'
                            fontSize="25px"
                            value={values.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // className={errors.username ? "input-error borderolor-red" : ""}
                        />
                    </div>
                    {errors.fullname && touched.fullname ? (<p className={classes.errorMsgs}>{errors.fullname}</p>) : null}



                    <div className={classes.RegistrationInput}>
                        <TextField
                            className={classes.RegistrationInputField}
                            label="Enter your mail id"
                            variant='outlined'
                            name='email'
                            fontSize="25px"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    {errors.email && touched.email ? (<p className={classes.errorMsgs}>{errors.email}</p>) : null}

                    <div className={classes.RegistrationInput}>
                        <TextField
                            className={classes.RegistrationInputField}
                            label="Password"
                            type={showPass.showPassword ? "text" : "password"}
                            variant='outlined'
                            name='password'
                            fontSize="25px"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}  />                     
                            <Visibility
                            onClick={handleClickShowPassword}
                             className={classes.PasswordEye} />
                    </div>
                    {errors.password && touched.password ? (<p className={classes.errorMsgs}>{errors.password}</p>) : null}

                    <div className={classes.RegistrationInput}>
                        <TextField
                            className={classes.RegistrationInputField}
                            label="confirm password"
                            variant='outlined'
                            type={showConfirmPass.showConfirmPassword ? "text" : "password"}
                            name='confirm_password'
                            fontSize="25px"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                             <Visibility
                             onClick={handleClickConfirmPassword}
                              className={classes.PasswordEye} />
                    </div>
                    {errors.confirm_password && touched.confirm_password ? (<p className={classes.errorMsgs}>
                        {errors.confirm_password}</p>) : null}

                    <div className={classes.RegistrationInput}>
                        <TextField
                            className={classes.RegistrationInputField}
                            label="Phone Number"
                            variant='outlined'
                            type="number"
                            name='phone'
                            fontSize="25px"
                            value={values.phone}
                            onChange={handleChange}
                        // onBlur={handleBlur}
                        />
                    </div>
                    {errors.phone && touched.phone ? (<p className={classes.errorMsgs}>
                        {errors.phone}</p>) : null}



                    <div className={classes.GenderField}>
                        <Typography style={{ fontSize: "22px" }}>Gender</Typography>
                        <span style={{ fontSize: "20px" }}>Male</span>
                        <Radio
                            className={classes.GenderLabel}
                            name='gender'
                            type='radio'
                            checked={gender === "male"}
                            value="male"
                            onClick={handleChange}
                            onChange={handleGender}
                            label="Male" />


                        <span style={{ fontSize: "20px" }}>Female</span>
                        <Radio
                            className={classes.GenderLabel}
                            name='gender'
                            type='radio'
                            checked={gender === "female"}
                            value="female"
                            onClick={handleChange}
                            onChange={handleGender}
                            label="female" />

                        <span style={{ fontSize: "20px" }}>Other</span>
                        <Radio
                            className={classes.GenderLabel}
                            name='gender'
                            type='radio'
                            onClick={handleChange}
                            checked={gender === "other"}
                            value="other"
                            onChange={handleGender}
                            label="other" />

                    </div>
                    {errors.gender && touched.gender ? (<p className={classes.errorMsgs}>
                        {errors.gender}</p>) : null}

                    <div style={{ marginTop: "20px", marginLeft: "35px" }}>
                        <Typography>Upload File</Typography>
                        <TextField variant='outlined'
                            type='file'
                            name='file'
                            value={values.file}
                            onChange={handleChange} />
                    </div>
                    {errors.file && touched.file ? (<p className={classes.errorMsgs}>
                        {errors.file}</p>) : null}



                    <div>
                        <div className={classes.SelectBox}>
                            <Typography>Country</Typography>
                            <select name='country'
                                // value={values.country}
                                onChange={handleChange}
                                className={classes.SelectBoxText}>

                                <option value='Select country'>---Select Country---</option>
                                <option >India</option>

                                <option >America</option>
                                <option >Pakistan</option>
                                <option >Austrolia</option>
                                <option >Shreelanka</option>
                            </select>
                        </div>
                        {errors.country && touched.country ? (<p className={classes.errorMsgs}>
                            {errors.country}</p>) : null}

                    </div>

                    <div className={classes.RegistrationInput}>
                        <TextField
                            className={classes.RegistrationInputField}
                            label="Linkdin Link"
                            variant='outlined'
                            type="text"
                            name='link'
                            fontSize="25px"
                            value={values.link}
                            onChange={handleChange}
                        // onBlur={handleBlur}
                        />
                    </div>
                    {errors.link && touched.link ? (<p className={classes.errorMsgs}>
                        {errors.link}</p>) : null}

                        <div className={classes.Checkbox}>
                            <Checkbox 
                            name='check'
                            value={errors.check}
                            onChange={handleChange}
                            /><span style={{fontSize:"22px"}}>I Agree</span>
                            <p style={{fontSize:"18px"}}>If you use our terms and conditions template or our terms and <br />conditions generator, 
                                you will be able to select the name you <br /> prefer for your legal document.</p>
                        </div>
                        {errors.check && touched.check ? (<p className={classes.errorMsgs}>
                        {errors.check}</p>) : null}


                    <Button type='submit'
                        // onSubmit={handleSubmit}
                        className={classes.btn}>Registration</Button>
                    <Typography className={classes.Accound}>I have Already Accound <Link className={classes.btnSignUp}>Sign Up?</Link>
                        <Link className={classes.btnForget}>forget password</Link></Typography>

                </form>
            </Box>

        </Box>
    )
}

export default Registration

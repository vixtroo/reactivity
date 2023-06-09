import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState, useEffect } from "react"
import styles from '@styles/Home.module.css'
import * as Yup from "yup"
import axios from "axios"

const FormsFormik = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too Short!")
            .max(20, "Too Long!")
            .required("First Name is required"),
        lastName: Yup.string()
            .min(2, "Too Short!")
            .max(20, "Too Long!")
            .required("Last Name is required"),
        email: Yup.string()
            .required("Mobile number or email is Required")
            .test('test-name', 'Enter Valid Mobile number/ Email',
                function (value) {
                    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
                    const phoneRegex = /^(09|\+639)\d{9}$/
                    let isValidEmail = emailRegex.test(value)
                    let isValidPhone = phoneRegex.test(value)
                    if (!isValidEmail && !isValidPhone) {
                        return false;
                    }
                    return true;
                }),
        password: Yup.string()
            .required("Password is Required")
            .min(6, "Too Short!")
            .max(30, "Too Long!"),
        date: Yup.date()
            .required("Birthdate is required"),
        // pronouns: Yup.string()
        //     .when('gender', {
        //         is: 'custom',
        //         then: Yup.string()
        //             .required('Select your pronoun')
        //     })
    });
    const [postDisplay, setPostDisplay] = useState()
    const [patchDisplay, setPatchDisplay] = useState()

    // const api = "https://api.ahglab.com/api:W7k9W8HQ/users?fbclid=IwAR3AObBReb32EzfJlWj6FApVzohe1l_rVukVC8iPaU5MMlymaVZhIzZmN0Y"
    const api = "https://api.ahglab.com/api:W7k9W8HQ/users"
    const [data, setData] = useState()
    const [postStatus, setPostStatus] = useState()
    const [patchStatus, setPatchStatus] = useState()
    const [deleteStatus, setDeleteStatus] = useState()
    // Methods
    const getPosts = () => {
        axios.get(`${api}`).then(function (response) {
            setData(response?.data)
            // console.log(data)
        })
    }
    const postPosts = (passValue) => {
        axios
            .post(`${api}`, {
                id: passValue?.id,
                first_name: passValue?.firstName,
                last_name: passValue?.lastName,
                credentials: passValue?.email,
                password: passValue?.password,
                birthdate: passValue?.date,
                gender: passValue?.gender,
                pronoun: passValue?.pronouns,
            })
            .then(function (response) {
                setPostStatus(response?.status);
                console.log(response);
            });
        console.log("passValue == ", passValue);
    };
    useEffect(() => {
        getPosts();
    }, [data]);

    const patchPosts = (passValue) => {
        axios
            .put(`${api}/${passValue?.id}`, {
                id: passValue?.id,
                first_name: passValue?.firstName,
                last_name: passValue?.lastName,
                credentials: passValue?.email,
                password: passValue?.password,
                birthdate: passValue?.date,
                gender: passValue?.gender,
                pronoun: passValue?.pronouns,
            })
            .then(function (response) {
                setPatchStatus(response?.status);
            });
    }
    const deletePosts = (passValue) => {
        axios
            .delete(`${api}/${passValue?.id}`).then(function (response) {
                setDeleteStatus(response?.status);
            });
    };

    return (
        <div className={styles.formikContainer}>
            {/* <h1 className="text-3xl font-bold underline">Hello World</h1> */}
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <h1 style={{ color: 'black', fontFamily: 'Arial' }}>Sign Up</h1>
                    <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '14px' }}>It's quick and easy.</p>
                </div>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        gender: "",
                        inputGender: "",
                        date: "",
                        pronouns: "",
                    }}
                    onSubmit={(values, actions) => {
                        postPosts(values)
                        setPostDisplay(`I'm ${values?.firstName} ${values?.lastName}, my email/ mobile number is ${values?.email}. I was born on ${values?.date}. Gender: ${values?.gender != "custom" ? values.gender : values?.inputGender} | Pronouns: ${values?.pronouns}`);
                        // console.log(values.gender)
                        actions.resetForm({
                            values: {
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                date: "",
                                gender: "",
                                pronouns: "",
                                inputGender: "",
                            },
                        })
                    }}
                    validationSchema={SignupSchema}
                >
                    {({ errors, touched, values }) => (
                        <Form style={{ color: "blue" }}>
                            <div className={styles.credentialsContainer}>
                                <div className={styles.nameContainer}>
                                    <Field id="firstName" name="firstName" placeholder="First Name" className={styles.name} />
                                    <ErrorMessage name="firstName" />
                                    <Field id="lastName" name="lastName" placeholder="Last Name" className={styles.name} />
                                    <ErrorMessage name="lastName" />
                                </div>
                                <Field id="email" name="email" placeholder="Mobile number or email" className={styles.emailPass} />
                                <ErrorMessage name="email" />
                                <Field type="password" id="password" name="password" placeholder="New password" className={styles.emailPass} />
                                <ErrorMessage name="password" />
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '5px' }}>Birthday</p>
                                <Field id="date" name="date" type="date" className={styles.datePicker} />
                                <ErrorMessage name="date" />
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '5px' }}>Gender</p>
                                <div className={styles.radioButtonsContainer}>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="male">Male</label>
                                        <Field type="radio" id="male" name="gender" value="male" />
                                    </div>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="female">Female</label>
                                        <Field type="radio" id="female" name="gender" value="female" />
                                    </div>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="custom">Custom</label>
                                        <Field type="radio" id="custom" name="gender" value="custom" />
                                    </div>
                                </div>
                                {values?.gender == "custom" && (
                                    <div className={styles.pronounsContainer}>
                                        <Field id="pronouns" name="pronouns" placeholder="Select your pronoun" as="select" className={styles.pronouns}>
                                            <option value="" default>Select your pronoun</option>
                                            <option value="She">She: "Wish her a happy birthday!"</option>
                                            <option value="He">He: "Wish him a happy birthday!"</option>
                                            <option value="They">Them: "Wish them a happy birthday!"</option>
                                        </Field>
                                        <ErrorMessage name="pronouns" />
                                        <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '10px' }}>Your pronoun is visible to everyone.</p>
                                        <Field id="gender" name="inputGender" placeholder="Gender (Optional)" className={styles.emailPass} />
                                    </div>
                                )}
                                {/* {formik.errors.gender ? (
                                    <div>{formik.errors.gender}</div>
                                ) : null} */}
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '11px', marginBottom: '10px' }}>People who use our service may have uploaded your contact information to Facebook. Learn more.<br /><br />By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                                <div className={styles.submitBtnContainer}>
                                    <button type="submit" className={styles.submitButton}>Sign Up</button>
                                </div>
                                <p>{postDisplay}</p>
                                <p className={styles.status}>
                                    Status:{" "}
                                    {postStatus === 200 ? (
                                        <span style={{ color: "green" }}>Success</span>
                                    ) : postStatus === 500 ? (
                                        <span style={{ color: "red" }}>Failed</span>
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <h1 style={{ color: 'black', fontFamily: 'Arial' }}>Get</h1>
                    <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '14px' }}>It's quick and easy.</p>
                </div>
                <div style={{ marginTop: '10px' }}>
                    {data && data.map((value, key) => {
                        return (
                            <p key={key} style={{ color: 'black' }}>
                                {key + 1}: {value.first_name} {value?.last_name} - ID:{value?.id}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <h1 style={{ color: 'black', fontFamily: 'Arial' }}>Edit</h1>
                    <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '14px' }}>It's quick and easy.</p>
                </div>
                <Formik
                    initialValues={{
                        id: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        gender: "",
                        inputGender: "",
                        date: "",
                        pronouns: "",
                    }}
                    onSubmit={(values, actions) => {
                        patchPosts(values)
                        setPatchDisplay(`I'm ${values?.firstName} ${values?.lastName}, my email is ${values?.email}. I was born on ${values?.date}. Gender: ${values?.gender != "custom" ? values.gender : values?.inputGender} | Pronouns: ${values?.pronouns}`);
                        // console.log(values.gender)
                        actions.resetForm({
                            values: {
                                id: "",
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                date: "",
                                gender: "",
                                pronouns: "",
                                inputGender: "",
                            },
                        })
                    }}
                    validationSchema={SignupSchema}
                >
                    {({ errors, touched, values }) => (
                        <Form style={{ color: "blue" }}>
                            <div className={styles.credentialsContainer}>
                                <div className={styles.nameContainer}>
                                    <Field id="id" name="id" className={styles.name} placeholder="Id Number"></Field>
                                </div>
                                <div className={styles.nameContainer}>
                                    <Field id="firstName" name="firstName" placeholder="First Name" className={styles.name} />
                                    <ErrorMessage name="firstName" />
                                    <Field id="lastName" name="lastName" placeholder="Last Name" className={styles.name} />
                                    <ErrorMessage name="lastName" />
                                </div>
                                <Field id="email" name="email" placeholder="Mobile number or email" className={styles.emailPass} />
                                <ErrorMessage name="email" />
                                <Field type="password" id="password" name="password" placeholder="New password" className={styles.emailPass} />
                                <ErrorMessage name="password" />
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '5px' }}>Birthday</p>
                                <Field id="date" name="date" type="date" className={styles.datePicker} />
                                <ErrorMessage name="date" />
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '5px' }}>Gender</p>
                                <div className={styles.radioButtonsContainer}>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="male">Male</label>
                                        <Field type="radio" id="male" name="gender" value="male" />
                                    </div>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="female">Female</label>
                                        <Field type="radio" id="female" name="gender" value="female" />
                                    </div>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="custom">Custom</label>
                                        <Field type="radio" id="custom" name="gender" value="custom" />
                                    </div>
                                </div>
                                {values?.gender == "custom" && (
                                    <div className={styles.pronounsContainer}>
                                        <Field id="pronouns" name="pronouns" placeholder="Select your pronoun" as="select" className={styles.pronouns}>
                                            <option value="" default>Select your pronoun</option>
                                            <option value="She">She: "Wish her a happy birthday!"</option>
                                            <option value="He">He: "Wish him a happy birthday!"</option>
                                            <option value="They">Them: "Wish them a happy birthday!"</option>
                                        </Field>
                                        <ErrorMessage name="pronouns" />
                                        <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '10px' }}>Your pronoun is visible to everyone.</p>
                                        <Field id="gender" name="inputGender" placeholder="Gender (Optional)" className={styles.emailPass} />
                                    </div>
                                )}
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '11px', marginBottom: '10px' }}>People who use our service may have uploaded your contact information to Facebook. Learn more.<br /><br />By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                                <div className={styles.submitBtnContainer}>
                                    <button type="submit" className={styles.submitButton}>Update</button>
                                </div>
                                <p>{patchDisplay}</p>
                                <p className={styles.status}>
                                    Status:{" "}
                                    {patchStatus === 200 ? (
                                        <span style={{ color: "green" }}>Success</span>
                                    ) : patchStatus === 500 ? (
                                        <span style={{ color: "red" }}>Failed</span>
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <h1 style={{ color: 'black', fontFamily: 'Arial' }}>Delete</h1>
                    <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '14px' }}>It's quick and easy.</p>
                </div>
                <Formik
                    initialValues={{
                        id: "",
                    }}
                    onSubmit={(values, actions) => {
                        deletePosts(values)
                        actions.resetForm({
                            values: {
                                id: "",
                            },
                        })
                    }}
                >
                    {({ errors, touched, values }) => (
                        <Form style={{ color: "blue" }}>
                            <div className={styles.credentialsContainer}>
                                <div className={styles.nameContainer}>
                                    <Field id="id" name="id" className={styles.name} placeholder="Id Number"></Field>
                                </div>
                                <p className={styles.status}>
                                    Status:{" "}
                                    {deleteStatus === 200 ? (
                                        <span style={{ color: "green" }}>Success</span>
                                    ) : deleteStatus === 500 ? (
                                        <span style={{ color: "red" }}>Failed</span>
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                                <div className={styles.submitBtnContainer}>
                                    <button type="submit" className={styles.submitButton}>Delete</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default FormsFormik
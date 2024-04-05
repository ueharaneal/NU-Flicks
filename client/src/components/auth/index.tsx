import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";

//ui
import { LoaderCircle } from "lucide-react";

function Auth() {
  const [register, setRegister] = useState<boolean>(false);
  let navigate = useNavigate();
  //reducx
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);
  const notifications = useSelector((state: RootState) => state.notifications);

  const formik = useFormik({
    initialValues: { email: "ueharaneal@gmail.com", password: "testing" },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email Required")
        .email("This is not a valid email"),
      password: yup.string().required("Password Required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (register) {
      //dispatch register
    } else {
      //dispatch login
    }
  };

  return (
    <div className="">
      <h1>Authenticate</h1>
      {users.loading ? <LoaderCircle/> : 
        <div>
            <form onSubmit={formik.handleSubmit}>

            </form>


        </div>
      }
  );
}

export default Auth;

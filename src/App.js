import { Form, Formik } from "formik";
import { useLogger } from "react-use";
import * as Yup from "yup";
import Select from "./Select";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  useLogger("App =>");
  return (
    <Formik
      initialValues={{
        fruit: ""
      }}
      validationSchema={Yup.object({
        fruit: Yup.string().required("Fruit is required")
      })}
    >
      {(props) => {
        return (
          <div className="form">
            <Form>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group w-50 pt-5">
                      <Select />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pt-5">
                      <pre>{JSON.stringify(props.values, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUser, useAuth, AuthCheck } from "reactfire";
import { Link, useHistory } from "react-router-dom";
import "../Css/Login.css";

const Login = () => {
  const user = useUser();
  console.log(user);
  const auth = useAuth();
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const signIn = () => {
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then(history.push("/profile"));
    };
    signIn();
  };

  return (
    <div className="login">
      <AuthCheck
        fallback={
          <>
            <Form
              name="normal_login"
              className="login__form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Recordarme</Checkbox>
                </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Ingresar
                </Button>

                <br />

                
              </Form.Item>
              <Link className="login-form-forgot" to="/ForgotPassword">
                ¿Olvidaste tu contraseña?
              </Link>
                <br/>
              <Link path="/signUp">¿No tienes cuenta aun?</Link>
            </Form>
          </>
        }
      >
        <h1>You are already logged in</h1>
      </AuthCheck>
    </div>
  );
};

export default Login;

import React from "react";
import { Form, Input, Checkbox, Button, AutoComplete } from "antd";
import { register } from "../serviceWorker";
import { useAuth } from "reactfire";
import "antd/dist/antd.css";
import "./Register.css";
import { Link } from "react-router-dom";


const Register = () => {
  const [form] = Form.useForm();

  const auth = useAuth();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const signUp = () => {
      auth.createUserWithEmailAndPassword(values.email, values.password);
    };
    signUp();
  };

  return (
    <div className="register">
      <Form
        
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        className="register__form"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Registrarme
          </Button>
        </Form.Item>
        <Form.Item>
        <p className="loginRedirect">¿Ya tienes una cuenta?</p>
        
        Ingresa <Link to="/login">aquí</Link>
        </Form.Item>
        
      </Form>
    </div>
  );
};

export default Register;

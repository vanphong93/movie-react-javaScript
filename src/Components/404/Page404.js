import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const Page404 = () => {
  let navigate = useNavigate();
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button onClick={() => { navigate("/") }} type="primary">Back Home</Button>}
    />
  );
};
export default Page404;

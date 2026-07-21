import React from "react";
import PageTitle from "./components/PageTitle/PageTitle";
import TaskContainer from "./Components/TaskContainer/TaskContainer";
import Form from "./components/Form/Form.jsx";
import Button from "./Components/button/Button.jsx";

function App() {
  return (
    <>
      <PageTitle />
      <TaskContainer/>
      <Form />
      <Button />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Greet from "./Greet";
import Welcome from "./Welcome";
import Message from "./Message";
import Counter from "./Counter";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";
import EventBind from "./EventBind";
import ParentComponent from "./ParentComponent";
import UserGreeting from "./UserGreeting";
import NameList from "./NameList";
import StyleSheet from "./StyleSheet";
import Inline from "./Inline";
import "./appStyles.css";
import style from "./appStyles.module.css";
import Form from "./Form";
import LifecycleA from "./LifecycleA";
import FragmentDemo from "./FragmentDemo";
import Table from "./Table";
import PureComp from "./PureComp";
import ParentComp from "./ParentComp";
import RefsDemo from "./RefsDemo";
import FRParentInput from "./FRParentInput";
import PortalDemo from "./PortalDemo";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCounterTwo from "./HoverCounterTwo";
import User from "./User";
import Counter1 from "./Counter1";
import ComponentC from "./ComponentC";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Tony Stark" hero="Ironman">
        {<p> function children </p>}
      </Greet>
      <Greet name="Bruce Wayne" hero="Batman"></Greet>
      <Greet name="Diana" hero="Wonder Women"></Greet> */}
      {/* <Welcome name="Clark" hero="Superman">
        {<p> class children </p>}
      </Welcome> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <h2 className={style.success}>Modules success</h2> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="Nayeem" />
      <HoverCounter /> */}
      {/* <User name={(isLoggedIn) => (isLoggedIn ? "Nayeem" : "Guest")} />
      <Counter1
        render={(count, incrementCounter) => (
          <ClickCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      />
      <Counter1
        render={(count, incrementCounter) => (
          <HoverCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      /> */}
      {/* <ClickCounterTwo /> */}
      {/* <HoverCounterTwo /> */}
      <UserProvider value="Nayeem">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;

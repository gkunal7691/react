import React from 'react';
import logo from './logo.svg';
import './App.css';
import FonctionalComponent, { FonctionalComponent111 } from './components/functional-component';
import ClassComponent from './components/class-component';
import Hello from './components/jsx-demo';
import Props1 from './components/props';
import State from './components/state';
import Counter from './components/setState';
import FunctionEvent from './components/functionEvent';
import ClassEvent from './components/classEvent';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import ConditionalRendering from './components/conditional-rendering';
import ListRendering from './components/list-rendering';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './Lifecycles/LifecycleA';
import Fragments from './Advanced/Fragments/Fragments';
import Table from './Advanced/Fragments/Table';
import PureComp from './Advanced/PureComponent/PureComp';
import RegComp from './Advanced/PureComponent/RegComp';
import ParentComp from './Advanced/PureComponent/ParentComp';
import Refs from './Advanced/RefsAndWithClass/Refs';
import FocusInput from './Advanced//RefsAndWithClass/FocusInput'
import FRParentInput from './Advanced/ForwardingRefs/FRParentInput';
import PortalDemo from './Advanced/PortalDemo';
import Hero from './Advanced/ErrorBoundary/Hero';
import ErrorBoundary from './Advanced/ErrorBoundary/ErrorBoundary';
import HoverCounter from './Advanced/HigherOrderComponents/HoverCounter';
import ClickCounter from './Advanced/HigherOrderComponents/ClickCounter';
import ClickCounterTwo from './Advanced/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './Advanced/RenderProps/HoverCounterTwo';
import Counter1 from './Advanced/RenderProps/Counter';
import { UserProvider } from './Advanced/Context/userContext'
import ComponentC from './Advanced/Context/ComponentC'
import GetList from './Advanced/HttpRequest/GetList'
import PostList from './Advanced/HttpRequest/PostList'

function App() {
  return (
    <div className="App">
      {/* < FonctionalComponent /> */}
      {/*  <FonctionalComponent111/> */}
      {/* <ClassComponent />*/}
      {/* <Hello /> */}
      {/* <Props1 name="Sachin"/> */}


      {/* <State message = "Subscribe Me!"></State> */}
      {/* <Counter></Counter> */}
      {/* <FunctionEvent></FunctionEvent> */}
      {/* <ClassEvent></ClassEvent> */}
      {/* <EventBind></EventBind>  */}
      {/* <ParentComponent></ParentComponent> */}

      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Form></Form> */}
      {/* <LifecycleA /> */}

      {/* Fragments */}

      {/* <Fragments></Fragments> */}
      {/* <Table></Table> */}

      {/* PureComp */}

      {/* <PureComp></PureComp>
      <RegComp></RegComp>
      <ParentComp></ParentComp> */}

      {/* Refs */}

      {/* <Refs></Refs> */}
      {/* <FocusInput/> */}

      {/* <FRParentInput></FRParentInput> */}

      {/* <PortalDemo></PortalDemo> */}

      {/* ErrorBoundary */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* HigherOrderComponent */}

      {/* <ClickCounter name='Vishwas' /> 
				 <HoverCounter /> */}

      {/* RenderProps */}

      {/* <Counter1
        x={(count, incrementCount) =>
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}>
          </ClickCounterTwo>}>
      </Counter1>
      <Counter1
        x={(count, incrementCount) =>
          <HoverCounterTwo
            count={count} f
            incrementCount={incrementCount}>
          </HoverCounterTwo>}>
      </Counter1> */}

      {/* context */}

      {/* <UserProvider value="Mahesh">
        <ComponentC />
      </UserProvider> */}

      {/* <GetList></GetList> */}

      <PostList></PostList>

    </div>
  );
}

export default App;

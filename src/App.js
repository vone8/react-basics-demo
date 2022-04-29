import "./App.css";
import Greet from "./components/Greet/Greet";
import Welcome from "./components/Welcome/Welcome";
import { NoJsx } from "./components/NoJsx/NoJsx";
import Message from "./components/Message/Message";
import Counter from "./components/Counter/Counter";
import FunClick from "./components/FunctionClick/FunctionClick";
import ClassClick from "./components/ClassClick/ClassClick";
import EventBinding from "./components/EventBinding/EventBinding";
import ParentComponent from "./components/ParentComponent/ParentComponent";
import UserGreeting from "./components/UserGreeting/UserGreeting";
import NameList from "./components/NameList/NameList";
import StyleSheet from "./components/StyleSheet/StyleSheet";
import Form from "./components/form/form";
import LifecycleA from "./components/LifecycleA/LifecycleA";
import FragmentDemo from "./components/FragmentDemo/FragmentDemo";
import TableFragement from "./components/TableFragement/TableFragement";
import PureComp from "./components/PureComp/PureComp";
import ParentComp from "./components/PureComp/ParentComp";
import RefsDemo from "./components/RefsDemo/RefsDemo";
import InputFocus from "./components/RefsDemo/InputFocus";
import ForwardParentInput from "./components/RefsDemo/ForwardParentInput";
import PortalDemo from "./components/PortalDemo/PortalDemo";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import ErroeBoundrySol from "./components/ErrorBoundry/ErroeBoundrySol";
import HigherOrderComponents from "./components/HigherOrderComponents/HigherOrderComponents";
import ClickCounterRenderProps from "./components/ClickCounterRenderProps/ClickCounterRenderProps";
import HoverCounterRenderProps from "./components/ClickCounterRenderProps/HoverCounterRenderProps";
import User from "./components/ClickCounterRenderProps/User";
import CounterMain from "./components/ClickCounterRenderProps/Counter";
import HoverCounterRenderPropsMain from "./components/ClickCounterRenderProps/HoverCounterRenderProps";
import ComponentA from "./components/ReactContext/ComponentA";
import { UserConsumer } from "./components/ReactContext/UserContext";
import { UserProvider } from "./components/ReactContext/UserContext";
import ComponentB from "./components/ReactContext/ComponentB";
import ComponentC from "./components/ReactContext/ComponentC";
import PostList from "./components/AxiosDemo/PostList";
import PostForm from "./components/AxiosDemo/PostForm";

function App() {
	return (
		<div className="App">
			<PostForm />

			{/* <PostList /> */}

			{/* <UserProvider value={"Vijay"}>
				<ComponentA />
			</UserProvider> */}

			{/* <CounterMain>
				{(count, clickHandler) => (
					<ClickCounterRenderProps count={count} clickHandler={clickHandler} />
				)}
			</CounterMain>
			<CounterMain>
				{(count, clickHandler) => (
					<HoverCounterRenderPropsMain
						count={count}
						clickHandler={clickHandler}
					/>
				)}
			</CounterMain> */}

			{/* <HigherOrderComponents /> */}

			{/* <ClickCounterRenderProps />
			<HoverCounterRenderProps />
			<User render={(isLoggedIn) => (isLoggedIn ? "Vijay" : "Guest")} /> */}

			{/* <ErroeBoundrySol>
				<ErrorBoundry heroName="Bat Man" />
			</ErroeBoundrySol>
			<ErroeBoundrySol>
				<ErrorBoundry heroName="Super Man" />
			</ErroeBoundrySol>
			<ErroeBoundrySol>
				<ErrorBoundry heroName="Joker" />
			</ErroeBoundrySol> */}

			{/* <PortalDemo /> */}
			{/* <ParentComp /> */}
			{/* <RefsDemo /> */}
			{/* <InputFocus /> */}
			{/* <ForwardParentInput /> */}
			{/* <TableFragement /> */}
			{/* <FragmentDemo /> */}
			{/* <LifecycleA /> */}
			{/* <Form /> */}
			{/* <UserGreeting />
			<NameList />
			<StyleSheet h1={true} /> */}
			{/* <ParentComponent />
			<FunClick />
			<ClassClick />
			<EventBinding />
			<Counter />
			<Message />
			<Greet className="card-1" name="Vijay" pos="React Dev">
				<p>This is paragraph</p>
				<button>Click Children 1</button>
			</Greet>
			<Greet className="card-2" name="Jay" pos="Frontend Dev">
				<button>Click Children</button>
			</Greet>
			<Greet className="card-3" name="Suraj" pos="Wordpress Dev" />
			<Welcome />
			<NoJsx /> */}
		</div>
	);
}

export default App;

import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import SingleDataFetching from './components/SingleDataFetching';
import ComponentC from './components/ComponentC';

// create the contex in the app component
export const UserContext = React.createContext()

// for muiltple context
export const ChannelContext = React.createContext()


//************************************** */
function App() {
  return (
    <div className="App">
    {/* wrap ComponenC as a child provider and provide the context value  */}
    <UserContext.Provider value={'Ako'}>
     <ChannelContext.Provider value={'Atem Sampson'}>
     <ComponentC />
     </ChannelContext.Provider>
    </UserContext.Provider>
       
       
       {/* <SingleDataFetching /> */}
       {/* <DataFetching /> */}

       {/* <IntervalHookCounter />
      <IntervalClassCounter /> */}
      
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}

      {/* <ClassMouse /> */}
     {/* <HookCounterOne /> */}
     {/* <ClassCounterOne /> */}
    {/* <HookCounterFour /> */}
    {/* <HookCounterThree /> */}
    {/* <HookCounter /> */}
    {/* <ClassCounter /> */}

    </div>
  );
}

export default App;
